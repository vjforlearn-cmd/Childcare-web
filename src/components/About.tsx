import { CheckCircle } from "lucide-react";

const About = () => {
  const features = [
    "Licensed and insured family child care",
    "Low child-to-caregiver ratio",
    "Nutritious home-cooked meals",
    "Safe, clean, and loving environment",
    "Age-appropriate learning activities",
    "Flexible scheduling options",
  ];

  return (
    <section id="about" className="py-20 md:py-28 bg-cream/50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden shadow-soft">
                  <img
                    src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=300&h=350&fit=crop"
                    alt="Child painting"
                    className="w-full h-48 object-cover"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-soft">
                  <img
                    src="https://images.unsplash.com/photo-1544776193-352d25ca82cd?w=300&h=250&fit=crop"
                    alt="Children playing"
                    className="w-full h-40 object-cover"
                  />
                </div>
              </div>
              <div className="pt-8 space-y-4">
                <div className="rounded-2xl overflow-hidden shadow-soft">
                  <img
                    src="https://images.unsplash.com/photo-1596464716127-f2a82984de30?w=300&h=250&fit=crop"
                    alt="Reading time"
                    className="w-full h-40 object-cover"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-soft">
                  <img
                    src="https://images.unsplash.com/photo-1560969184-10fe8719e047?w=300&h=350&fit=crop"
                    alt="Outdoor play"
                    className="w-full h-48 object-cover"
                  />
                </div>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-coral/20 rounded-full blur-xl" />
          </div>

          <div className="order-1 lg:order-2 space-y-6">
            <div className="inline-block">
              <span className="text-primary font-medium bg-primary/10 px-4 py-1.5 rounded-full text-sm">
                About Us
              </span>
            </div>
            
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              A Home Away From Home for Your Little One
            </h2>
            
            <p className="text-lg text-muted-foreground">
              At The NewGen Kids Childcare Center, we believe every child deserves a nurturing 
              environment where they feel safe, loved, and inspired to learn. Our home-based 
              setting provides the personalized attention your child needs to flourish.
            </p>
            
            <p className="text-lg text-muted-foreground">
              With over a decade of experience in early childhood education, we create 
              meaningful learning experiences through play, creativity, and exploration.
            </p>

            <div className="grid sm:grid-cols-2 gap-3 pt-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-sage-dark flex-shrink-0" />
                  <span className="text-foreground/80">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
