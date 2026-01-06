import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Baby, BookOpen, Palette, Users } from "lucide-react";

const Programs = () => {
  const programs = [
    {
      icon: Baby,
      title: "Infant Care",
      age: "6 weeks - 12 months",
      description:
        "Gentle, responsive care focused on bonding, sensory exploration, and reaching developmental milestones in a safe, nurturing environment.",
      color: "bg-coral/10 text-coral",
    },
    {
      icon: Users,
      title: "Toddler Program",
      age: "1 - 2 years",
      description:
        "Active exploration and social development through play-based learning, music, movement, and hands-on activities.",
      color: "bg-sunshine/20 text-sunshine-foreground",
    },
    {
      icon: Palette,
      title: "Preschool Prep",
      age: "3 - 4 years",
      description:
        "School readiness activities including early literacy, math concepts, science exploration, and creative arts.",
      color: "bg-sage/30 text-sage-dark",
    },
    {
      icon: BookOpen,
      title: "Before & After School",
      age: "5 - 10 years",
      description:
        "Safe transportation, homework help, creative activities, and plenty of time for outdoor play and relaxation.",
      color: "bg-primary/10 text-primary",
    },
  ];

  return (
    <section id="programs" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-medium bg-primary/10 px-4 py-1.5 rounded-full text-sm">
            Our Programs
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-4">
            Programs for Every Age
          </h2>
          <p className="text-lg text-muted-foreground">
            From infants to school-age children, we offer nurturing care and 
            age-appropriate learning experiences tailored to your child's needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((program, index) => (
            <Card
              key={index}
              className="group hover:shadow-warm transition-all duration-300 border-2 border-transparent hover:border-primary/20 bg-card"
            >
              <CardHeader className="space-y-4">
                <div
                  className={`w-14 h-14 rounded-2xl ${program.color} flex items-center justify-center group-hover:scale-110 transition-transform`}
                >
                  <program.icon className="w-7 h-7" />
                </div>
                <div>
                  <CardTitle className="font-heading text-xl mb-1">
                    {program.title}
                  </CardTitle>
                  <span className="text-sm text-primary font-medium">
                    {program.age}
                  </span>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  {program.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;
