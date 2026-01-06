import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: "(555) 123-4567",
      color: "bg-coral/10 text-coral",
    },
    {
      icon: Mail,
      title: "Email",
      details: "hello@littlesunshine.com",
      color: "bg-primary/10 text-primary",
    },
    {
      icon: MapPin,
      title: "Location",
      details: "123 Sunshine Lane, Your City",
      color: "bg-sage/30 text-sage-dark",
    },
    {
      icon: Clock,
      title: "Hours",
      details: "Mon-Fri: 7:00 AM - 6:00 PM",
      color: "bg-sunshine/20 text-sunshine-foreground",
    },
  ];

  return (
    <section id="contact" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-medium bg-primary/10 px-4 py-1.5 rounded-full text-sm">
            Contact Us
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-4">
            Let's Connect
          </h2>
          <p className="text-lg text-muted-foreground">
            We'd love to meet you and your little one! Reach out to schedule 
            a tour or learn more about our programs.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-4">
              {contactInfo.map((info, index) => (
                <Card key={index} className="border-0 shadow-soft">
                  <CardContent className="flex items-center gap-4 p-4">
                    <div
                      className={`w-12 h-12 rounded-xl ${info.color} flex items-center justify-center flex-shrink-0`}
                    >
                      <info.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground">
                        {info.title}
                      </h4>
                      <p className="text-muted-foreground text-sm">
                        {info.details}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <Card className="lg:col-span-3 border-0 shadow-warm">
            <CardContent className="p-6 md:p-8">
              <h3 className="font-heading text-2xl font-bold text-foreground mb-6">
                Send Us a Message
              </h3>
              <form className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Your Name
                    </label>
                    <Input placeholder="John Smith" className="bg-background" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Email Address
                    </label>
                    <Input
                      type="email"
                      placeholder="john@example.com"
                      className="bg-background"
                    />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Phone Number
                    </label>
                    <Input
                      type="tel"
                      placeholder="(555) 123-4567"
                      className="bg-background"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Child's Age
                    </label>
                    <Input placeholder="e.g., 2 years" className="bg-background" />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Your Message
                  </label>
                  <Textarea
                    placeholder="Tell us about your child and what you're looking for..."
                    rows={4}
                    className="bg-background resize-none"
                  />
                </div>
                <Button variant="warm" size="lg" className="w-full sm:w-auto">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
