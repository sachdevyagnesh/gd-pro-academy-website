import { Card, CardContent } from "@/components/ui/card";
import { Award, BookOpen, Target, Lightbulb, Users, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import aboutPortrait from "@/assets/about-portrait.jpg";

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
              {/* Main image */}
              <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-elevated">
                <img 
                  src={aboutPortrait} 
                  alt="Grishma Sachdev - Corporate Trainer" 
                  className="w-full h-full object-cover"
                />
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
                    <p className="font-bold text-foreground">4.8/5 Rating</p>
                    <p className="text-sm text-muted-foreground">Client Satisfaction</p>
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
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Meet Your Trainer
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed mb-6">
              <p>
                I'm Grishma, a passionate Sales & Soft Skills Trainer with over 14 years of experience in the BFSI and training industries. I simplify complex concepts, focusing on practical learning, people's behavior, and real-world applications. Motherhood has taught me patience and simplicity, which I integrate into my training approach to create meaningful and transformative experiences for learners.
              </p>
              <p>
                I started my career in 2013 in a profession that most people avoid, especially back then as a woman. Yes, I'm talking about sales — a job that many people shy away from even today. I began in the BFSI (Banking, Financial Services, and Insurance) sector. It wasn't easy, but I worked hard, faced challenges, and grew from an officer level role to a managerial position.
              </p>
              <p>
                Eventually, I landed a stable and respectable job as a functional trainer in a well-known company. Life was good — I was earning well, earned respect, and everything seemed smooth. But something felt missing.
              </p>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-8 italic border-l-4 border-secondary pl-4">
              I noticed that many people still don't want to work in sales. It's seen as a tough profession. I still remember sitting in a room full of people who hesitated to admit they worked in sales. That moment made me realize that this perception had to change — but I've always believed that with the right skills and mindset, anyone can thrive in it.
            </p>

            {/* Highlights */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              {highlights.map((item) => (
                <div key={item.label} className="text-center p-4 bg-card rounded-xl shadow-soft">
                  <item.icon className="w-6 h-6 text-secondary mx-auto mb-2" />
                  <p className="font-bold text-foreground">{item.value}</p>
                  <p className="text-xs text-muted-foreground">{item.label}</p>
                </div>
              ))}
            </div>

            {/* Philosophy */}
            <div className="space-y-4 mb-8">
              <h4 className="font-semibold text-foreground">Training Philosophy</h4>
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
              <Link to="/about">Learn More About Me</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
