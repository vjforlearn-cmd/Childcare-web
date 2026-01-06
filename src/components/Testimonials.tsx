import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah M.",
      role: "Parent of 2",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
      content:
        "The NewGen Kids has been a blessing for our family. Both of my kids absolutely love going there, and I have complete peace of mind knowing they're in such caring hands.",
      rating: 5,
    },
    {
      name: "Michael & Lisa T.",
      role: "Parents of Emma, 3",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
      content:
        "The home environment makes such a difference. Our daughter has flourished here - her language skills and social development have been amazing to watch.",
      rating: 5,
    },
    {
      name: "Jennifer K.",
      role: "Parent of twins",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
      content:
        "Finding quality care for twins was challenging until we found The NewGen Kids. The personalized attention each child receives is remarkable.",
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-20 md:py-28 bg-gradient-to-br from-sage/10 via-cream to-sunshine/10">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-medium bg-primary/10 px-4 py-1.5 rounded-full text-sm">
            Testimonials
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-4">
            What Parents Say
          </h2>
          <p className="text-lg text-muted-foreground">
            Hear from the families who have trusted us with their most precious little ones.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="relative bg-card border-0 shadow-soft hover:shadow-warm transition-shadow duration-300"
            >
              <CardContent className="pt-8 pb-6">
                <Quote className="absolute top-6 right-6 w-10 h-10 text-primary/20" />
                
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-sunshine text-sunshine"
                    />
                  ))}
                </div>
                
                <p className="text-foreground/80 leading-relaxed mb-6">
                  "{testimonial.content}"
                </p>
                
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover ring-2 ring-primary/20"
                  />
                  <div>
                    <h4 className="font-semibold text-foreground">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
