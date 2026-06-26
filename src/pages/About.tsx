import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Award, BookOpen, Users, Target, Lightbulb, Heart, CheckCircle, MapPin, Eye, Crosshair } from "lucide-react";
import aboutHero from "@/assets/about-hero.jpg";
import aboutPortraitAsset from "@/assets/about-portrait-pro.jpg.asset.json";
import bookCoverAsset from "@/assets/book-cover-more-than-sales.jpg.asset.json";
import bestsellerAsset from "@/assets/amazon-bestseller-rank.jpg.asset.json";
const aboutPortrait = aboutPortraitAsset.url;

const milestones = [
  { year: "2012", title: "Career Started in BFSI", description: "Began journey in Banking, Financial Services & Insurance sector" },
  { year: "2018", title: "Training Role Started", description: "Transitioned into professional training" },
  { year: "2023", title: "Founded GD Pro Academy", description: "To help professionals thrive in sales" },
  { year: "2026", title: "Today", description: "24,000+ training hours delivered globally" },
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
            <div className="grid lg:grid-cols-[auto_1fr] gap-4 lg:gap-6 items-start max-w-5xl mx-auto">
              {/* Image with Career Journey below */}
              <div className="relative w-full max-w-xs mx-auto lg:mx-0">
                <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-elevated">
                  <img 
                    src={aboutPortrait} 
                    alt="Grishma Sachdev - Founder & Lead Trainer at GD Pro Academy"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                
                {/* Career Journey - vertical timeline below image */}
                <div className="mt-6">
                  <h3 className="font-display text-lg font-bold text-foreground mb-4">Career Journey</h3>
                  <div className="space-y-0">
                    {milestones.map((milestone, index) => (
                      <div key={milestone.year} className="flex gap-3">
                        <div className="flex flex-col items-center">
                          <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-display font-bold text-xs">
                            {milestone.year.slice(-2)}
                          </div>
                          {index < milestones.length - 1 && (
                            <div className="w-0.5 h-full bg-border min-h-[40px]" />
                          )}
                        </div>
                        <div className="pb-4">
                          <p className="text-xs text-secondary font-medium">{milestone.year}</p>
                          <h4 className="font-display font-semibold text-foreground text-sm">{milestone.title}</h4>
                          <p className="text-xs text-muted-foreground">{milestone.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">
                  Hi, I'm Grishma Sachdev
                </h2>
                <p className="text-secondary font-semibold mb-4">
                  Sales Trainer & Mentor with 14 years of serving in the industry.
                </p>
                <div className="space-y-4 text-muted-foreground leading-relaxed mb-5 text-base">
                  <p>
                    A <strong className="text-foreground">Sales Trainer & Mentor</strong> with <strong className="text-foreground">14 years of experience</strong> across the BFSI and training industries. My work is rooted in simplifying complex concepts and turning them into practical, real-world skills people can apply immediately.
                  </p>
                  <p className="italic border-l-4 border-secondary pl-4 text-foreground">
                    "I struggled in sales because I had no one to guide me, so I became the guide I always wished I had."
                  </p>
                  <p>
                    I focus deeply on <strong className="text-foreground">people's behavior</strong>, <strong className="text-foreground">communication</strong>, and day-to-day workplace realities.
                  </p>
                  <p>
                    <strong className="text-foreground">Motherhood</strong> has taught me patience and simplicity, and I bring that same calm, structured approach into every training room to create meaningful, transformative learning experiences.
                  </p>
                  <p>
                    I started my career in 2012 in a profession that most people avoid—especially back then as a woman. Yes, I'm talking about <strong className="text-foreground">sales</strong>.
                  </p>
                  <p>
                    I began in the <strong className="text-foreground">BFSI (Banking, Financial Services, and Insurance)</strong> sector. It wasn't easy, but I worked hard, faced challenges, and grew from an officer-level role to a managerial position. In 2018, I transitioned into a training role and eventually founded GD Pro Academy in 2023 to help others thrive in sales.
                  </p>
                  <p className="font-medium text-foreground">
                    But something still felt missing.
                  </p>
                  <p>
                    I noticed that many people still don't want to work in sales. It's seen as a tough profession. I still remember sitting in a room full of people who hesitated to admit they worked in sales.
                  </p>
                  <p className="italic border-l-4 border-secondary pl-4">
                    That moment made me realize this perception had to change, and I've always believed that with the <strong className="text-foreground">right skills and mindset</strong>, anyone can thrive in sales.
                  </p>
                </div>

                {/* Highlights */}
                <div className="grid grid-cols-3 gap-3">
                  <div className="text-center p-4 bg-muted rounded-xl border border-border">
                    <BookOpen className="w-6 h-6 text-secondary mx-auto mb-2" />
                    <p className="font-display font-extrabold text-foreground text-lg">14+ Years</p>
                    <p className="text-sm font-semibold text-muted-foreground">in BFSI</p>
                  </div>
                  <div className="text-center p-4 bg-muted rounded-xl border border-border">
                    <Award className="w-6 h-6 text-secondary mx-auto mb-2" />
                    <p className="font-display font-extrabold text-foreground text-lg">Certified</p>
                    <p className="text-sm font-semibold text-muted-foreground">Trainer</p>
                  </div>
                  <div className="text-center p-4 bg-muted rounded-xl border border-border">
                    <MapPin className="w-6 h-6 text-secondary mx-auto mb-2" />
                    <p className="font-display font-extrabold text-foreground text-lg">Pan-India</p>
                    <p className="text-sm font-semibold text-muted-foreground">& Global</p>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-12 bg-muted">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <Card variant="elevated" className="border-l-4 border-l-primary">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Crosshair className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-display text-2xl font-bold text-foreground">My Mission</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    To help sales professionals improve performance, build visibility, and grow their careers through practical, experience-driven learning and mentorship.
                  </p>
                </CardContent>
              </Card>
              
              <Card variant="elevated" className="border-l-4 border-l-secondary">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center">
                      <Eye className="w-6 h-6 text-secondary" />
                    </div>
                    <h3 className="font-display text-2xl font-bold text-foreground">My Vision</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    To build the most trusted platform for sales career growth.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* From Sales to Storytelling */}
        <section className="section-padding bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10">
              <div className="accent-line mx-auto mb-6" />
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                From Sales to <span className="text-gradient-gold">Storytelling</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                A 14-year journey distilled into a #1 Amazon bestseller — sharing the lessons, mindset, and craft that shaped a career in sales.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center max-w-5xl mx-auto">
              <div className="relative">
                <div className="rounded-2xl overflow-hidden shadow-elevated max-w-sm mx-auto">
                  <img
                    src={bookCoverAsset.url}
                    alt="More Than Sales — The Profession That Built Me by Grishma Sachdev"
                    className="w-full h-auto object-cover"
                    loading="lazy"
                  />
                </div>
              </div>

              <div>
                <span className="inline-block bg-secondary/15 text-secondary font-semibold text-sm px-3 py-1 rounded-full mb-4">
                  #1 Amazon Bestseller
                </span>
                <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-3">
                  More Than Sales: The Profession That Built Me
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-5">
                  My first book captures the real, untold side of a sales career — purpose, impact, and growth. It reached <strong className="text-foreground">#1 in its category on Amazon Kindle</strong>, validating a story that thousands of sales professionals quietly live every day.
                </p>
                <div className="rounded-xl overflow-hidden border border-border shadow-soft">
                  <img
                    src={bestsellerAsset.url}
                    alt="Amazon Kindle #1 Bestseller ranking screenshot for More Than Sales"
                    className="w-full h-auto object-cover"
                    loading="lazy"
                  />
                </div>
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

        {/* Specializations */}
        <section className="section-padding bg-muted">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <div className="accent-line mx-auto mb-6" />
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-8">
                Areas of Specialization
              </h2>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                {specializations.map((spec) => (
                  <div key={spec} className="flex items-center justify-center gap-3 p-4 bg-background rounded-xl border border-border">
                    <CheckCircle className="w-5 h-5 text-accent shrink-0" />
                    <span className="text-foreground font-medium">{spec}</span>
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
              <Link to="/contact">Book Free Consultation</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
