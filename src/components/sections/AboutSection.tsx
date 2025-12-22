import { Card, CardContent } from "@/components/ui/card";
import { Award, BookOpen, Users, Target, Lightbulb, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const highlights = [
  { icon: BookOpen, value: "14+", label: "Years BFSI & Corporate" },
  { icon: Award, value: "Certified", label: "Corporate Trainer" },
  { icon: Target, value: "Pan-India", label: "& Global Reach" },
];

const philosophy = [
  {
    icon: Lightbulb,
    title: "Practical Learning",
    description: "Real-world case studies for instant applicability",
  },
  {
    icon: Users,
    title: "Interactive Approach",
    description: "Engaging sessions with hands-on exercises",
  },
  {
    icon: Heart,
    title: "Outcome-Driven",
    description: "Focus on measurable results and growth",
  },
];

export function AboutSection() {
  return (
    <section className="section-padding bg-muted relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Column */}
          <div className="relative">
            <div className="relative z-10">
              {/* Main image placeholder */}
              <div className="aspect-[4/5] rounded-3xl bg-gradient-to-br from-primary to-primary/80 overflow-hidden shadow-elevated">
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-32 h-32 rounded-full bg-secondary/20 mx-auto mb-6 flex items-center justify-center">
                      <span className="font-display text-4xl font-bold text-primary-foreground">GS</span>
                    </div>
                    <p className="text-primary-foreground/80 font-medium">Grishma Sachdev</p>
                    <p className="text-primary-foreground/60 text-sm">Certified Corporate Trainer</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating card */}
            <Card className="absolute -bottom-6 -right-6 lg:-right-12 z-20 shadow-elevated max-w-xs">
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center shrink-0">
                    <Award className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <div>
                    <p className="font-display font-bold text-foreground">98% Satisfaction</p>
                    <p className="text-sm text-muted-foreground">Client Retention Rate</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Background decoration */}
            <div className="absolute -top-4 -left-4 w-full h-full bg-secondary/20 rounded-3xl -z-10" />
          </div>

          {/* Content Column */}
          <div>
            <div className="accent-line mb-6" />
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              Meet Your Trainer
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              With over 14 years of experience in the BFSI and training industries, Grishma Sachdev understands the challenges professionals face in sales-driven environments.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Her journey from banking to corporate training has given her unique insights into what teams need to thrive. She simplifies complex concepts, focusing on practical learning and real-world applications.
            </p>

            {/* Highlights */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              {highlights.map((item) => (
                <div key={item.label} className="text-center p-4 bg-card rounded-xl shadow-soft">
                  <item.icon className="w-6 h-6 text-secondary mx-auto mb-2" />
                  <p className="font-display font-bold text-foreground">{item.value}</p>
                  <p className="text-xs text-muted-foreground">{item.label}</p>
                </div>
              ))}
            </div>

            {/* Philosophy */}
            <div className="space-y-4 mb-8">
              <h4 className="font-display font-semibold text-foreground">Training Philosophy</h4>
              <div className="grid gap-3">
                {philosophy.map((item) => (
                  <div key={item.title} className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{item.title}</p>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <Button variant="navy" size="lg" asChild>
              <Link to="/about">Learn More About Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
