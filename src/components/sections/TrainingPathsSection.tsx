import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Building2, User, ArrowRight, Users, TrendingUp, MessageSquare, Target } from "lucide-react";

const trainingPaths = [
  {
    type: "corporate",
    icon: Building2,
    title: "Corporate Training",
    subtitle: "For Teams & Organizations",
    description: "Transform your team's performance with customized training programs designed for organizational success.",
    features: [
      { icon: TrendingUp, text: "Sales Excellence Training" },
      { icon: MessageSquare, text: "Soft Skills Development" },
      { icon: Users, text: "Campus to Corporate Training" },
    ],
    cta: "Explore Corporate Programs",
    href: "/corporate-training",
    accent: "bg-primary",
  },
  {
    type: "individual",
    icon: User,
    title: "Programs for Professionals",
    subtitle: "For Professionals",
    description: "Accelerate your career with practical, structured training programs designed around your goals.",
    features: [
      { icon: MessageSquare, text: "Communication Excellence" },
      { icon: TrendingUp, text: "Sales Skills Training" },
      { icon: Target, text: "Career Advancement Program" },
    ],
    cta: "Explore Professional Programs",
    href: "/individual-training",
    accent: "bg-accent",
  },
];

export function TrainingPathsSection() {
  return (
    <section className="section-padding bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-secondary/10 to-transparent" />
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-accent/5 to-transparent" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="accent-line mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Choose Your Training Path
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Whether you're looking to elevate your team or accelerate your personal growth, we have the right program for you.
          </p>
        </div>

        {/* Training Path Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {trainingPaths.map((path) => (
            <Card
              key={path.type}
              variant="program"
              className="group relative overflow-hidden"
            >
              {/* Accent bar */}
              <div className={`absolute top-0 left-0 right-0 h-1 ${path.accent}`} />

              <CardContent className="p-8">
                {/* Icon */}
                <div className={`w-16 h-16 rounded-2xl ${path.accent} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <path.icon className="w-8 h-8 text-primary-foreground" />
                </div>

                {/* Content */}
                <div className="space-y-4 mb-8">
                  <div>
                    <span className="text-sm font-medium text-secondary">{path.subtitle}</span>
                    <h3 className="text-2xl font-bold text-foreground mt-1">
                      {path.title}
                    </h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {path.description}
                  </p>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {path.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center shrink-0">
                        <feature.icon className="w-4 h-4 text-foreground" />
                      </div>
                      <span className="text-foreground font-medium">{feature.text}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Button variant={path.type === "corporate" ? "navy" : "accent"} size="lg" className="w-full group" asChild>
                  <Link to={path.href}>
                    {path.cta}
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust badge */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground text-sm">
            Trusted by <span className="text-foreground font-semibold">leading organizations</span> across India
          </p>
        </div>
      </div>
    </section>
  );
}
