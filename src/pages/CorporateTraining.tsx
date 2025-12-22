import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CTASection } from "@/components/sections/CTASection";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Users, TrendingUp, MessageSquare, Clock, Award, CheckCircle, ArrowRight, Building2 } from "lucide-react";

const programs = [
  {
    icon: Users,
    title: "Leadership Excellence Program",
    description: "Develop confident leaders who inspire teams and deliver results through strategic thinking and effective delegation.",
    features: [
      "Strategic decision-making frameworks",
      "Team motivation techniques",
      "Effective delegation skills",
      "Performance coaching methods",
      "Conflict resolution strategies",
      "Goal setting and alignment",
    ],
    duration: "3 Days",
    price: "₹25,000",
    participants: "10-25 participants",
    popular: true,
  },
  {
    icon: TrendingUp,
    title: "Sales Excellence Training",
    description: "Boost conversions and win rates with modern selling strategies designed for today's competitive market.",
    features: [
      "Advanced sales techniques",
      "Building lasting client relationships",
      "Closing strategies that work",
      "Pipeline management",
      "Objection handling",
      "Value-based selling",
    ],
    duration: "2 Days",
    price: "₹18,000",
    participants: "10-30 participants",
    popular: false,
  },
  {
    icon: MessageSquare,
    title: "Team Building & Communication",
    description: "Improve collaboration, productivity, and trust across teams with practical communication frameworks.",
    features: [
      "Cross-functional collaboration",
      "Effective communication techniques",
      "Conflict resolution",
      "Goal alignment exercises",
      "Trust-building activities",
      "Feedback frameworks",
    ],
    duration: "1 Day",
    price: "₹12,000",
    participants: "15-40 participants",
    popular: false,
  },
];

const benefits = [
  "Customized content for your industry",
  "Pre-training assessment and goal setting",
  "Interactive, hands-on learning approach",
  "Post-training support and follow-up",
  "Detailed training reports for HR/L&D",
  "Certificates for all participants",
];

export default function CorporateTraining() {
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
              <div className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                <Building2 className="w-4 h-4 text-secondary" />
                <span className="text-primary-foreground/90 text-sm font-medium">
                  Corporate Training Solutions
                </span>
              </div>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
                Transform Your Team's{" "}
                <span className="text-gradient-gold">Performance</span>
              </h1>
              <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 leading-relaxed">
                Customized training programs designed to elevate your team's capabilities in leadership, sales, and communication. Proven results with 500+ organizations.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button variant="hero" size="lg" asChild>
                  <Link to="/contact">
                    Request Corporate Proposal
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
                <Button variant="heroOutline" size="lg" asChild>
                  <a href="tel:+919876543210">Schedule a Call</a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Programs */}
        <section className="section-padding bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="accent-line mx-auto mb-6" />
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                Corporate Training Programs
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Comprehensive programs tailored to your organization's specific needs and goals.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {programs.map((program) => (
                <Card key={program.title} variant="program" className="relative flex flex-col">
                  {program.popular && (
                    <div className="absolute -top-3 left-6 bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-xs font-semibold">
                      Most Popular
                    </div>
                  )}
                  <CardHeader>
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
                      <program.icon className="w-7 h-7 text-primary" />
                    </div>
                    <CardTitle className="text-2xl">{program.title}</CardTitle>
                    <CardDescription className="text-base">{program.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col">
                    <ul className="space-y-3 mb-6 flex-1">
                      {program.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="space-y-4 pt-6 border-t">
                      <div className="flex items-center justify-between text-sm text-muted-foreground">
                        <span className="flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          {program.duration}
                        </span>
                        <span className="flex items-center gap-2">
                          <Users className="w-4 h-4" />
                          {program.participants}
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="text-sm text-muted-foreground">Starting at</span>
                          <p className="font-display text-2xl font-bold text-foreground">{program.price}</p>
                        </div>
                        <Button variant="navy" asChild>
                          <Link to="/contact">Book Now</Link>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="section-padding bg-muted">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="accent-line mb-6" />
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Why Choose Our Corporate Training?
                </h2>
                <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                  With 14+ years of experience in BFSI and corporate training, we understand what it takes to transform team performance. Our programs are designed for real-world impact.
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {benefits.map((benefit) => (
                    <div key={benefit} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                      <span className="text-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <Card className="bg-primary text-primary-foreground p-8 shadow-elevated">
                  <div className="text-center">
                    <Award className="w-16 h-16 mx-auto mb-6 text-secondary" />
                    <h3 className="font-display text-2xl font-bold mb-4">Ready to Get Started?</h3>
                    <p className="text-primary-foreground/80 mb-6">
                      Contact us for a customized training proposal tailored to your organization's needs.
                    </p>
                    <Button variant="hero" size="lg" asChild className="w-full">
                      <Link to="/contact">Request Proposal</Link>
                    </Button>
                  </div>
                </Card>
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
