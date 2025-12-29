import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Award, BookOpen, Users, Target, Lightbulb, Heart, CheckCircle, MapPin } from "lucide-react";
import aboutHero from "@/assets/about-hero.jpg";
import aboutPortrait from "@/assets/about-portrait.jpg";

const milestones = [
  { year: "2019", title: "Training Role Started", description: "Transitioned into professional training" },
  { year: "2023", title: "Founded GD Pro Academy", description: "To help professionals thrive in sales" },
  { year: "2026", title: "Today", description: "75,000+ training hours delivered globally" },
];

const specializations = [
  "Sales Excellence & Negotiation",
  "Soft Skills Development",
  "Communication Skills",
  "Team Building & Collaboration",
  "Campus to Corporate",
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
        <section className="pt-28 pb-16 relative overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${aboutHero})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/85 to-primary/80" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <div className="accent-line mx-auto mb-6" style={{ background: "hsl(40 60% 55%)" }} />
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
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
              {/* Image - optimized size */}
              <div className="relative">
                <div className="relative z-10 max-w-md mx-auto lg:mx-0">
                  <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-elevated">
                    <img 
                      src={aboutPortrait} 
                      alt="Grishma Sachdev - Founder & Lead Trainer at GD Pro Academy"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                </div>
                {/* Floating stats */}
                <Card className="absolute -bottom-4 right-0 lg:-right-8 z-20 shadow-elevated">
                  <CardContent className="p-4">
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div>
                        <p className="font-display text-2xl font-bold text-foreground">14+</p>
                        <p className="text-xs text-muted-foreground">Years Experience</p>
                      </div>
                      <div>
                        <p className="font-display text-2xl font-bold text-foreground">4.8/5</p>
                        <p className="text-xs text-muted-foreground">Client Rating</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <div className="absolute -top-4 -left-4 w-full h-full bg-secondary/20 rounded-2xl -z-10" />
              </div>

              {/* Content - Updated bio */}
              <div>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Hi, I'm Grishma Sachdev
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed mb-8">
                  <p>
                    I'm a passionate Sales & Soft Skills Trainer with over 14 years of experience in the BFSI and training industries. I understand the challenges professionals face in sales-driven environments.
                  </p>
                  <p>
                    I simplify complex concepts, focusing on practical learning, people's behavior, and real-world applications. Motherhood has taught me patience and simplicity, which I integrate into my training approach to create meaningful and transformative experiences for learners.
                  </p>
                  <p>
                    I started my career in 2013 in a profession that most people avoid, especially back then as a woman. Yes, I'm talking about sales—a job that many people shy away from even today. I began in the BFSI (Banking, Financial Services, and Insurance) sector. It wasn't easy, but I worked hard, faced challenges, and grew from an officer level role to a managerial position.
                  </p>
                  <p>
                    Eventually, I landed a stable and respectable job as a functional trainer in a well-known company. Life was good—I was earning well, earned respect, and everything seemed smooth. But something felt missing. I noticed that many people still don't want to work in sales. It's seen as a tough profession.
                  </p>
                  <p>
                    I still remember sitting in a room full of people who hesitated to admit they worked in sales. That moment made me realize that this perception had to change. But I've always believed that with the right skills and mindset, anyone can thrive in it.
                  </p>
                </div>

                {/* Highlights - BOLD text */}
                <div className="grid grid-cols-3 gap-4 mb-8">
                  <div className="text-center p-4 bg-muted rounded-xl">
                    <BookOpen className="w-6 h-6 text-secondary mx-auto mb-2" />
                    <p className="font-display font-bold text-foreground">14+ years</p>
                    <p className="text-xs text-muted-foreground"><strong>in BFSI</strong></p>
                  </div>
                  <div className="text-center p-4 bg-muted rounded-xl">
                    <Award className="w-6 h-6 text-secondary mx-auto mb-2" />
                    <p className="font-display font-bold text-foreground"><strong>Certified</strong></p>
                    <p className="text-xs text-muted-foreground"><strong>Trainer</strong></p>
                  </div>
                  <div className="text-center p-4 bg-muted rounded-xl">
                    <MapPin className="w-6 h-6 text-secondary mx-auto mb-2" />
                    <p className="font-display font-bold text-foreground"><strong>Pan-India</strong></p>
                    <p className="text-xs text-muted-foreground"><strong>& Global</strong></p>
                  </div>
                </div>

                <Button variant="navy" size="lg" asChild>
                  <Link to="/book-consultation">Book a Consultation</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Training Philosophy */}
        <section className="section-padding bg-muted">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <div className="accent-line mx-auto mb-6" />
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                My Training Philosophy
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                I follow the "30% Learning, 70% Doing" approach—because real skills are built through practice, not just theory.
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

        {/* Specializations & Timeline */}
        <section className="section-padding bg-background">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-start max-w-5xl mx-auto">
              <div>
                <div className="accent-line mb-6" />
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Areas of Specialization
                </h2>
                <p className="text-muted-foreground mb-8">
                  With deep expertise across key professional development areas, I deliver training that makes a real impact on careers and organizations.
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

              {/* Timeline - Updated */}
              <div className="space-y-6">
                <h3 className="font-display text-xl font-bold text-foreground mb-4">Career Journey</h3>
                {milestones.map((milestone, index) => (
                  <div key={milestone.year} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-display font-bold text-sm">
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

        {/* Simple CTA */}
        <section className="py-12 bg-primary">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
              Ready to Transform Your Career?
            </h2>
            <p className="text-primary-foreground/80 mb-6 max-w-xl mx-auto">
              Let's discuss how GD Pro Academy can help you achieve your professional goals.
            </p>
            <Button variant="hero" size="lg" asChild>
              <Link to="/book-consultation">Book Free Consultation</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}