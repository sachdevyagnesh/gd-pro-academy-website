import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CTASection } from "@/components/sections/CTASection";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Building2, Users, TrendingUp, Award, Star, Quote, ArrowRight } from "lucide-react";

const caseStudies = [
  {
    company: "Leading BFSI Company",
    industry: "Banking & Financial Services",
    program: "Sales Excellence Training",
    participants: "120+ Sales Executives",
    result: "40% increase in conversions within 3 months",
    quote: "The training transformed our team's approach completely. Our sales executives now have the confidence and skills to close deals effectively.",
    author: "Sales Head",
  },
  {
    company: "IT Services Firm",
    industry: "Information Technology",
    program: "Leadership Development",
    participants: "35 Team Managers",
    result: "Improved team engagement scores by 45%",
    quote: "Grishma's leadership program helped our managers develop strategic thinking and better team management skills.",
    author: "HR Director",
  },
  {
    company: "Manufacturing Company",
    industry: "Manufacturing",
    program: "Team Building & Communication",
    participants: "80+ Team Members",
    result: "Reduced inter-departmental conflicts by 60%",
    quote: "The cross-functional collaboration training was exactly what we needed. Our teams now work together seamlessly.",
    author: "Operations Manager",
  },
  {
    company: "Fintech Startup",
    industry: "Financial Technology",
    program: "Communication Skills",
    participants: "50 Employees",
    result: "Enhanced client communication and retention",
    quote: "The communication training was practical and immediately applicable. Our team collaboration has improved significantly.",
    author: "CEO",
  },
];

const industries = [
  { name: "Banking & Finance", icon: Building2 },
  { name: "Information Technology", icon: TrendingUp },
  { name: "Manufacturing", icon: Users },
  { name: "Healthcare", icon: Award },
  { name: "Retail", icon: Star },
  { name: "Startups", icon: TrendingUp },
];

const stats = [
  { value: "500+", label: "Organizations Trained" },
  { value: "46,000+", label: "Professionals Developed" },
  { value: "98%", label: "Satisfaction Rate" },
  { value: "15+", label: "Industries Served" },
];

export default function Portfolio() {
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
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                <Award className="w-4 h-4 text-secondary" />
                <span className="text-primary-foreground/90 text-sm font-medium">
                  Our Portfolio
                </span>
              </div>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
                Proven <span className="text-gradient-gold">Success Stories</span>
              </h1>
              <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed">
                Explore how we've helped organizations across industries transform their teams and achieve measurable results.
              </p>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-12 bg-background relative -mt-10 z-10">
          <div className="container mx-auto px-4">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {stats.map((stat) => (
                <Card key={stat.label} variant="elevated" className="text-center">
                  <CardContent className="p-6">
                    <p className="font-display text-3xl font-bold text-foreground mb-1">{stat.value}</p>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies */}
        <section className="section-padding bg-muted">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="accent-line mx-auto mb-6" />
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                Case Studies
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Real results from real organizations we've partnered with.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {caseStudies.map((study, index) => (
                <Card key={index} variant="elevated" className="overflow-hidden">
                  <div className="h-2 bg-gradient-to-r from-primary to-secondary" />
                  <CardContent className="p-8">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <p className="text-sm text-secondary font-medium">{study.industry}</p>
                        <h3 className="font-display text-xl font-bold text-foreground">{study.company}</h3>
                      </div>
                      <div className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium">
                        {study.program}
                      </div>
                    </div>

                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                      <span className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        {study.participants}
                      </span>
                    </div>

                    <div className="bg-accent/10 border border-accent/20 rounded-xl p-4 mb-6">
                      <p className="text-accent font-semibold flex items-center gap-2">
                        <TrendingUp className="w-5 h-5" />
                        {study.result}
                      </p>
                    </div>

                    <div className="relative">
                      <Quote className="w-8 h-8 text-muted-foreground/20 absolute -top-2 -left-1" />
                      <blockquote className="text-muted-foreground italic pl-6">
                        "{study.quote}"
                      </blockquote>
                      <p className="text-sm font-medium text-foreground mt-3 pl-6">
                        — {study.author}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Industries */}
        <section className="section-padding bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="accent-line mx-auto mb-6" />
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                Industries We Serve
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Our training expertise spans across multiple sectors and domains.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-4xl mx-auto">
              {industries.map((industry) => (
                <Card key={industry.name} variant="outline" className="text-center hover:border-secondary transition-colors">
                  <CardContent className="p-6">
                    <industry.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                    <p className="text-sm font-medium text-foreground">{industry.name}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button variant="navy" size="lg" asChild>
                <Link to="/contact">
                  Discuss Your Requirements
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
