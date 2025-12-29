import { Card, CardContent } from "@/components/ui/card";
import { Users, Presentation, Award, Sparkles } from "lucide-react";

const moments = [
  {
    icon: Presentation,
    title: "Live Training Sessions",
    description: "Interactive workshops with real-world role-plays and practical exercises",
  },
  {
    icon: Users,
    title: "Team Engagement",
    description: "Building collaboration and trust through experiential learning activities",
  },
  {
    icon: Award,
    title: "Recognition & Growth",
    description: "Celebrating achievements and milestones in professional development",
  },
  {
    icon: Sparkles,
    title: "Transformative Impact",
    description: "Witnessing confidence bloom as participants master new skills",
  },
];

export function MomentsSection() {
  return (
    <section className="section-padding bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="accent-line mx-auto mb-6" />
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Moments from GD Pro Sessions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A glimpse into how we create transformative learning experiences
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {moments.map((moment, index) => (
            <Card 
              key={moment.title} 
              variant="elevated" 
              className="text-center group hover:shadow-elevated transition-all duration-300"
            >
              <CardContent className="p-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <moment.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-foreground mb-2">
                  {moment.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {moment.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Mission Quote */}
        <div className="mt-16 max-w-3xl mx-auto">
          <Card className="bg-gradient-to-br from-primary to-primary/90 text-primary-foreground overflow-hidden relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl" />
            <CardContent className="p-8 md:p-10 relative z-10">
              <blockquote className="text-center">
                <p className="text-lg md:text-xl italic leading-relaxed mb-4">
                  "My mission is simple: to help people feel confident about working in sales and prepare them to be market-ready. Where connection fuels conversion."
                </p>
                <footer className="text-primary-foreground/80 font-medium">
                  — Grishma Sachdev, Founder
                </footer>
              </blockquote>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
