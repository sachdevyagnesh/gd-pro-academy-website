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
                A <strong className="text-foreground">Sales & Soft Skills Trainer</strong> with over <strong className="text-foreground">12 years of experience</strong> across the BFSI and training industries. My work is rooted in simplifying complex concepts and turning them into practical, real-world skills people can apply immediately.
              </p>
              <p>
                I focus deeply on <strong className="text-foreground">people's behavior</strong>, <strong className="text-foreground">communication</strong>, and day-to-day workplace realities.
              </p>
              <p>
                <strong className="text-foreground">Motherhood</strong> has taught me patience and simplicity, and I bring that same calm, structured approach into every training room to create meaningful, transformative learning experiences.
              </p>
              <p>
                I started my career in 2013 in a profession that most people avoid—especially back then as a woman. Yes, I'm talking about <strong className="text-foreground">sales</strong>.
              </p>
              <p>
                I began in the <strong className="text-foreground">BFSI (Banking, Financial Services, and Insurance)</strong> sector. It wasn't easy, but I worked hard, faced challenges, and grew from an officer-level role to a managerial position. Eventually, I landed a stable and respectable job as a functional trainer in a well-known company. Life was good—I was earning well, had earned respect, and everything felt smooth.
              </p>
              <p className="font-medium text-foreground">
                But something still felt missing.
              </p>
              <p>
                I noticed that many people still don't want to work in sales. It's seen as a tough profession. I still remember sitting in a room full of people who hesitated to admit they worked in sales.
              </p>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-8 italic border-l-4 border-secondary pl-4">
              That moment made me realize this perception had to change, and I've always believed that with the <strong className="text-foreground">right skills and mindset</strong>, anyone can thrive in sales.
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
