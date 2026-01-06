import { Button } from "@/components/ui/button";
import { Heart, Star, Sun } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-gradient-to-br from-background via-cream to-sage/20"
    >
      {/* Decorative Elements */}
      <div className="absolute top-32 left-10 animate-float">
        <Sun className="w-12 h-12 text-sunshine/60" />
      </div>
      <div className="absolute top-40 right-20 animate-float-delayed">
        <Star className="w-8 h-8 text-coral/60" />
      </div>
      <div className="absolute bottom-32 left-1/4 animate-float">
        <Heart className="w-10 h-10 text-primary/40" />
      </div>

      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left space-y-6 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-sunshine/20 text-sunshine-foreground px-4 py-2 rounded-full text-sm font-medium">
              <span>🌈</span>
              <span>Licensed Family Child Care</span>
            </div>
            
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Where Little Ones{" "}
              <span className="text-primary">Blossom</span> & Grow
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0">
              A nurturing home environment where your child will learn, play, and thrive. 
              We provide loving care that feels like family.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="warm" size="lg" className="text-lg">
                Schedule a Visit
              </Button>
              <Button variant="outline" size="lg" className="text-lg">
                Learn More
              </Button>
            </div>

            <div className="flex items-center gap-8 justify-center lg:justify-start pt-4">
              <div className="text-center">
                <div className="font-heading text-3xl font-bold text-primary">10+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="w-px h-12 bg-border" />
              <div className="text-center">
                <div className="font-heading text-3xl font-bold text-primary">50+</div>
                <div className="text-sm text-muted-foreground">Happy Families</div>
              </div>
              <div className="w-px h-12 bg-border" />
              <div className="text-center">
                <div className="font-heading text-3xl font-bold text-primary">5★</div>
                <div className="text-sm text-muted-foreground">Rating</div>
              </div>
            </div>
          </div>

          <div className="relative animate-fade-in-up">
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-warm">
              <img
                src="https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=600&h=700&fit=crop"
                alt="Happy children playing and learning"
                className="w-full h-[400px] md:h-[500px] object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-sunshine/30 rounded-full blur-2xl" />
            <div className="absolute -top-6 -right-6 w-40 h-40 bg-sage/40 rounded-full blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
