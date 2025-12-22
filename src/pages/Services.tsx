import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CTASection } from "@/components/sections/CTASection";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  TrendingUp, Users, MessageSquare, Briefcase, Target, 
  Lightbulb, Presentation, Award, CheckCircle, ArrowRight 
} from "lucide-react";

const services = [
  {
    icon: TrendingUp,
    title: "Sales Training",
    description: "Boost your team's sales performance with proven techniques and modern strategies.",
    features: [
      "Advanced sales methodologies",
      "Objection handling mastery",
      "Closing techniques that convert",
      "Pipeline & CRM optimization",
    ],
    color: "bg-primary/10",
    iconColor: "text-primary",
  },
  {
    icon: Users,
    title: "Leadership Development",
    description: "Build confident leaders who inspire teams and drive organizational success.",
    features: [
      "Strategic decision making",
      "Team motivation & engagement",
      "Effective delegation",
      "Performance management",
    ],
    color: "bg-secondary/20",
    iconColor: "text-secondary",
  },
  {
    icon: MessageSquare,
    title: "Communication Skills",
    description: "Master professional communication for better relationships and results.",
    features: [
      "Public speaking confidence",
      "Business writing excellence",
      "Active listening techniques",
      "Cross-cultural communication",
    ],
    color: "bg-accent/20",
    iconColor: "text-accent",
  },
  {
    icon: Briefcase,
    title: "Personal Branding",
    description: "Build a powerful professional presence that sets you apart.",
    features: [
      "Brand strategy development",
      "LinkedIn optimization",
      "Professional networking",
      "Online presence management",
    ],
    color: "bg-primary/10",
    iconColor: "text-primary",
  },
  {
    icon: Target,
    title: "Team Building",
    description: "Strengthen team dynamics and foster a collaborative work culture.",
    features: [
      "Trust-building exercises",
      "Conflict resolution",
      "Goal alignment workshops",
      "Cross-functional collaboration",
    ],
    color: "bg-secondary/20",
    iconColor: "text-secondary",
  },
  {
    icon: Lightbulb,
    title: "Soft Skills Development",
    description: "Develop essential interpersonal skills for professional success.",
    features: [
      "Emotional intelligence",
      "Time management",
      "Problem-solving skills",
      "Adaptability training",
    ],
    color: "bg-accent/20",
    iconColor: "text-accent",
  },
];

const approach = [
  {
    step: "01",
    title: "Discovery & Assessment",
    description: "We understand your goals, challenges, and current skill levels through detailed consultation.",
  },
  {
    step: "02",
    title: "Custom Program Design",
    description: "Training content tailored to your industry, team size, and specific objectives.",
  },
  {
    step: "03",
    title: "Interactive Delivery",
    description: "Engaging sessions with case studies, role-plays, and hands-on exercises.",
  },
  {
    step: "04",
    title: "Evaluation & Follow-up",
    description: "Post-training assessment, feedback reports, and ongoing support for sustained results.",
  },
];

export default function Services() {
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
                <Presentation className="w-4 h-4 text-secondary" />
                <span className="text-primary-foreground/90 text-sm font-medium">
                  Our Services
                </span>
              </div>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
                Training Solutions That{" "}
                <span className="text-gradient-gold">Deliver Results</span>
              </h1>
              <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed">
                Comprehensive training programs designed to elevate skills, boost performance, and drive measurable business outcomes.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="section-padding bg-background">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service) => (
                <Card key={service.title} variant="program" className="group">
                  <CardHeader>
                    <div className={`w-14 h-14 rounded-2xl ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                      <service.icon className={`w-7 h-7 ${service.iconColor}`} />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                    <CardDescription className="text-base">{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button variant="ghost" className="w-full group" asChild>
                      <Link to="/contact">
                        Learn More
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Our Approach */}
        <section className="section-padding bg-muted">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="accent-line mx-auto mb-6" />
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                Our Training Approach
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                A proven methodology that ensures effective learning and lasting impact.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {approach.map((item, index) => (
                <div key={item.step} className="relative">
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-2xl bg-primary text-primary-foreground font-display text-2xl font-bold flex items-center justify-center mx-auto mb-4">
                      {item.step}
                    </div>
                    <h3 className="font-display font-semibold text-foreground mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                  {index < approach.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-border -translate-x-1/2" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="section-padding bg-background">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
              <div>
                <div className="accent-line mb-6" />
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Why Choose GD Pro Academy?
                </h2>
                <div className="space-y-6">
                  {[
                    { title: "Industry Experience", desc: "14+ years in BFSI and corporate training" },
                    { title: "Customized Solutions", desc: "Programs tailored to your specific needs" },
                    { title: "Proven Results", desc: "98% client satisfaction rate" },
                    { title: "Pan-India Reach", desc: "Training delivered across the country" },
                  ].map((item) => (
                    <div key={item.title} className="flex gap-4">
                      <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center shrink-0">
                        <Award className="w-5 h-5 text-accent" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">{item.title}</h4>
                        <p className="text-sm text-muted-foreground">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <Card className="bg-primary text-primary-foreground p-8 shadow-elevated">
                <div className="text-center">
                  <h3 className="font-display text-2xl font-bold mb-4">Ready to Get Started?</h3>
                  <p className="text-primary-foreground/80 mb-6">
                    Let's discuss how we can help your team or career grow with the right training solution.
                  </p>
                  <div className="space-y-3">
                    <Button variant="hero" size="lg" asChild className="w-full">
                      <Link to="/contact">Book Free Consultation</Link>
                    </Button>
                    <Button variant="heroOutline" size="lg" asChild className="w-full">
                      <Link to="/corporate-training">View Corporate Programs</Link>
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
