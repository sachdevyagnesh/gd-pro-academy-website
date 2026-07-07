import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Quote, Star, ArrowRight, TrendingUp } from "lucide-react";
import { cn } from "@/lib/utils";
import heroBg from "@/assets/hero-bg-3.jpg";

import { Helmet } from "react-helmet-async";
type Category = "Corporate" | "Individual" | "Institutes";

interface Testimonial {
  name: string;
  role: string;
  company: string;
  content: string;
  category: Category;
  featured?: boolean;
  metric?: string;
}

const testimonials: Testimonial[] = [
  {
    name: "BFSI Training Head",
    role: "Training Head",
    company: "Banking Institution",
    content: "Her sales mastery workshop helped our team close deals faster than ever! We saw a 40% increase in conversions within three months of implementing the program.",
    category: "Corporate",
    featured: true,
    metric: "40% increase in conversions",
  },
  {
    name: "Corporate L&D Manager",
    role: "L&D Manager",
    company: "Leading BFSI Company",
    content: "Her workshops are high-energy, practical, and make learning fun. Our team's engagement improved significantly.",
    category: "Corporate",
  },
  {
    name: "Manufacturing Client",
    role: "HR Head",
    company: "Manufacturing Company",
    content: "Grishma's training boosted our sales team's confidence and results. We booked her again without hesitation!",
    category: "Corporate",
  },
  {
    name: "Retail Operations Head",
    role: "Operations Head",
    company: "Retail Chain",
    content: "Grishma connects instantly with participants and delivers real results. Our customer satisfaction scores went up 40%.",
    category: "Corporate",
  },
  {
    name: "IT Company HR",
    role: "HR Director",
    company: "IT Services Firm",
    content: "Practical, engaging, and impactful – our employees loved her sessions! Communication improved across teams.",
    category: "Corporate",
  },
  {
    name: "Team Lead, Fintech Startup",
    role: "Team Lead",
    company: "Fintech Startup",
    content: "The communication training was game-changing. I'm now more confident in client presentations.",
    category: "Individual",
  },
  {
    name: "Sales Manager, Insurance Company",
    role: "Sales Manager",
    company: "Insurance Company",
    content: "Grishma's approach to sales training is unique. She makes complex concepts simple and actionable.",
    category: "Individual",
  },
  {
    name: "Edu Institute CEO",
    role: "CEO",
    company: "Educational Institute",
    content: "Students walked out more confident and job-ready after Grishma's sessions! The transformation was visible.",
    category: "Institutes",
  },
];

const filters: Array<"All" | Category> = ["All", "Corporate", "Individual", "Institutes"];

export default function Moments() {
  const [filter, setFilter] = useState<"All" | Category>("All");

  const featured = useMemo(() => testimonials.find((t) => t.featured), []);
  const rest = useMemo(
    () =>
      testimonials
        .filter((t) => !t.featured)
        .filter((t) => (filter === "All" ? true : t.category === filter)),
    [filter],
  );
  const showFeatured = featured && (filter === "All" || filter === featured.category);

  return (
    <div className="min-h-screen">
      <Header />
        <Helmet>
          <title>Client Success Stories & Testimonials | GD Pro Academy</title>
          <meta name="description" content="Read what corporate L&D leaders, HR heads, and professionals say about training with Grishma Sachdev and GD Pro Academy." />
          <meta property="og:title" content="Client Success Stories & Testimonials | GD Pro Academy" />
          <meta property="og:description" content="Read what corporate L&D leaders, HR heads, and professionals say about training with Grishma Sachdev and GD Pro Academy." />
        </Helmet>
      <main>
        <section data-hero className="pt-32 pb-20 relative overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${heroBg})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/85 to-primary/80" />

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                <Star className="w-4 h-4 text-secondary" />
                <span className="text-primary-foreground/90 text-sm font-medium">
                  Client Success Stories
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
                Real Stories. <span className="text-gradient-gold">Real Results.</span>
              </h1>
              <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed">
                Real feedback from professionals and organizations who have experienced our transformative training programs.
              </p>
            </div>
          </div>
        </section>

        <section className="section-padding bg-background">
          <div className="container mx-auto px-4">
            {/* Stats strip */}
            <div className="max-w-4xl mx-auto text-center mb-8">
              <p className="text-sm md:text-base text-muted-foreground">
                <span className="font-semibold text-foreground">4,500+ Careers Transformed</span>
                <span className="mx-2">·</span>
                <span className="font-semibold text-foreground">14+ Years Experience</span>
                <span className="mx-2">·</span>
                <span className="font-semibold text-foreground">50+ Organisations</span>
              </p>
            </div>

            {/* Filter pills */}
            <div className="flex flex-wrap justify-center gap-2 mb-10">
              {filters.map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={cn(
                    "px-4 py-1.5 rounded-full text-sm font-medium border transition-colors",
                    filter === f
                      ? "bg-primary text-primary-foreground border-primary"
                      : "bg-background text-foreground border-border hover:bg-muted",
                  )}
                >
                  {f}
                </button>
              ))}
            </div>

            {/* Featured BFSI card */}
            {showFeatured && featured && (
              <Card
                className="max-w-4xl mx-auto mb-10 border-2 shadow-elevated"
                style={{ borderColor: "#D4A017" }}
              >
                <CardContent className="p-8 md:p-10">
                  <div className="flex items-center gap-2 mb-4">
                    <span
                      className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full"
                      style={{ backgroundColor: "#D4A017", color: "#1A2A5E" }}
                    >
                      <TrendingUp className="w-3.5 h-3.5" />
                      Featured Result
                    </span>
                    {featured.metric && (
                      <span className="text-sm font-semibold text-foreground">{featured.metric}</span>
                    )}
                  </div>
                  <Quote className="w-10 h-10 text-secondary mb-4" />
                  <p className="text-lg md:text-xl text-foreground leading-relaxed mb-6 italic">
                    "{featured.content}"
                  </p>
                  <div>
                    <p className="font-semibold text-foreground">{featured.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {featured.role} · {featured.company}
                    </p>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Standard grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {rest.map((t) => (
                <Card key={t.name} className="h-full hover:shadow-elevated transition-shadow">
                  <CardContent className="p-6 flex flex-col h-full">
                    <Quote className="w-8 h-8 text-secondary mb-4" />
                    <p className="text-foreground leading-relaxed mb-6 flex-1">
                      "{t.content}"
                    </p>
                    <div>
                      <p className="font-semibold text-foreground">{t.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {t.role} · {t.company}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-14 bg-primary">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
              Ready to Join Our Success Stories?
            </h2>
            <p className="text-primary-foreground/80 mb-6 max-w-xl mx-auto">
              Join 4,500+ professionals who've transformed their sales careers.
            </p>
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">
                Start Your Sales Growth Journey
                <ArrowRight className="w-5 h-5 ml-1" />
              </Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
