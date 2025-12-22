import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CTASection } from "@/components/sections/CTASection";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Award, BookOpen, Users, Target, Lightbulb, Heart, CheckCircle, ArrowRight, Clock, MapPin, Briefcase } from "lucide-react";

const milestones = [
  { year: "2013", title: "Career Start", description: "Began career in BFSI sector as a banking professional" },
  { year: "2016", title: "First Training Role", description: "Transitioned to functional trainer at a well-known company" },
  { year: "2019", title: "GD Pro Academy", description: "Founded GD Pro Academy to help professionals thrive" },
  { year: "2024", title: "Today", description: "75,000+ training hours delivered across India" },
];

const specializations = [
  "Sales Excellence & Negotiation",
  "Leadership Development",
  "Communication Skills",
  "Team Building & Collaboration",
  "Personal Branding",
  "Career Development",
];

const philosophy = [
  {
    icon: Lightbulb,
    title: "Practical Learning",
    description: "Real-world case studies for instant applicability in your daily work.",
  },
  {
    icon: Users,
    title: "Interactive Approach",
    description: "Engaging sessions with role-plays, discussions, and hands-on exercises.",
  },
  {
    icon: Heart,
    title: "Patience & Simplicity",
    description: "Complex concepts simplified for meaningful and lasting learning.",
  },
  {
    icon: Target,
    title: "Outcome-Driven",
    description: "Focus on measurable results and actionable takeaways.",
  },
];

export default function About() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-20 hero-gradient relative overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 right-10 w-72 h-72 bg-secondary/10 rounded-full blur-3xl animate-float" />
            <div className="absolute bottom-20 left-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl">
              <div className="accent-line mb-6" style={{ background: "hsl(40 60% 55%)" }} />
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
                About <span className="text-gradient-gold">GD Pro Academy</span>
              </h1>
              <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed">
                Empowering professionals and organizations with practical, result-driven training in sales, leadership, and soft skills for over 14 years.
              </p>
            </div>
          </div>
        </section>

        {/* Trainer Profile */}
        <section className="section-padding bg-background">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Image */}
              <div className="relative">
                <div className="relative z-10">
                  <div className="aspect-[4/5] rounded-3xl bg-gradient-to-br from-primary to-primary/80 overflow-hidden shadow-elevated">
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="text-center p-8">
                        <div className="w-40 h-40 rounded-full bg-secondary/20 mx-auto mb-6 flex items-center justify-center">
                          <span className="font-display text-5xl font-bold text-primary-foreground">GS</span>
                        </div>
                        <h3 className="text-2xl font-display font-bold text-primary-foreground mb-2">
                          Grishma Sachdev
                        </h3>
                        <p className="text-primary-foreground/80">Founder & Lead Trainer</p>
                        <p className="text-primary-foreground/60 text-sm mt-2">
                          Certified Corporate Trainer
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Floating stats */}
                <Card className="absolute -bottom-6 -right-6 lg:-right-12 z-20 shadow-elevated">
                  <CardContent className="p-4">
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div>
                        <p className="font-display text-2xl font-bold text-foreground">14+</p>
                        <p className="text-xs text-muted-foreground">Years Experience</p>
                      </div>
                      <div>
                        <p className="font-display text-2xl font-bold text-foreground">98%</p>
                        <p className="text-xs text-muted-foreground">Satisfaction</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <div className="absolute -top-4 -left-4 w-full h-full bg-secondary/20 rounded-3xl -z-10" />
              </div>

              {/* Content */}
              <div>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Meet Your Trainer
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed mb-8">
                  <p>
                    With over 14 years of experience in the BFSI and training industries, Grishma Sachdev understands the challenges professionals face in sales-driven environments. Her journey began in banking, where she discovered her passion for helping teams overcome their fear of targets and embrace confidence in their sales careers.
                  </p>
                  <p>
                    She simplifies complex concepts, focusing on practical learning, people's behavior, and real-world applications. Motherhood has taught her patience and simplicity, which she integrates into her training approach to create meaningful and transformative experiences for learners.
                  </p>
                  <p>
                    Starting her career in 2013 in a profession that most people avoided, especially as a woman back then, she grew from an officer-level role to a managerial position, and eventually into a corporate functional trainer. She believes that with the right skills and mindset, anyone can thrive.
                  </p>
                </div>

                {/* Highlights */}
                <div className="grid grid-cols-3 gap-4 mb-8">
                  <div className="text-center p-4 bg-muted rounded-xl">
                    <BookOpen className="w-6 h-6 text-secondary mx-auto mb-2" />
                    <p className="font-display font-bold text-foreground">14+</p>
                    <p className="text-xs text-muted-foreground">Years BFSI</p>
                  </div>
                  <div className="text-center p-4 bg-muted rounded-xl">
                    <Award className="w-6 h-6 text-secondary mx-auto mb-2" />
                    <p className="font-display font-bold text-foreground">Certified</p>
                    <p className="text-xs text-muted-foreground">Trainer</p>
                  </div>
                  <div className="text-center p-4 bg-muted rounded-xl">
                    <MapPin className="w-6 h-6 text-secondary mx-auto mb-2" />
                    <p className="font-display font-bold text-foreground">Pan-India</p>
                    <p className="text-xs text-muted-foreground">& Global</p>
                  </div>
                </div>

                <Button variant="navy" size="lg" asChild>
                  <Link to="/contact">Connect with Grishma</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Training Philosophy */}
        <section className="section-padding bg-muted">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="accent-line mx-auto mb-6" />
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                Training Philosophy
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Our approach is built on practical, immersive, and outcome-driven learning experiences.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {philosophy.map((item) => (
                <Card key={item.title} variant="elevated" className="text-center">
                  <CardContent className="p-6">
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <item.icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="font-display font-semibold text-foreground mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Specializations */}
        <section className="section-padding bg-background">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
              <div>
                <div className="accent-line mb-6" />
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Areas of Specialization
                </h2>
                <p className="text-muted-foreground mb-8">
                  With deep expertise across key professional development areas, we deliver training that makes a real impact.
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {specializations.map((spec) => (
                    <div key={spec} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-accent shrink-0" />
                      <span className="text-foreground font-medium">{spec}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Timeline */}
              <div className="space-y-6">
                {milestones.map((milestone, index) => (
                  <div key={milestone.year} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-display font-bold">
                        {milestone.year.slice(-2)}
                      </div>
                      {index < milestones.length - 1 && (
                        <div className="w-0.5 h-full bg-border mt-2" />
                      )}
                    </div>
                    <div className="pb-6">
                      <p className="text-sm text-secondary font-medium">{milestone.year}</p>
                      <h4 className="font-display font-semibold text-foreground">{milestone.title}</h4>
                      <p className="text-sm text-muted-foreground">{milestone.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
