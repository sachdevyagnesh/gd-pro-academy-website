import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Building2, User, ArrowRight, CheckCircle, Award, Target, Users, TrendingUp } from "lucide-react";
import heroBg from "@/assets/hero-bg-2.jpg";

const serviceOptions = [
  {
    type: "corporate",
    icon: Building2,
    title: "Are you a Company or HR Team?",
    subtitle: "Corporate Training Solutions",
    description: "Transform your workforce with customized training programs. Build high-performing teams, enhance sales capabilities, and develop essential soft skills across your organization.",
    features: [
      "Customized programs for your team",
      "Pan-India delivery (onsite or virtual)",
      "Measurable ROI & post-training support",
      "Certified & accredited training",
    ],
    cta: "Get Training Needs Analysis",
    href: "/assessment/corporate",
    accent: "bg-secondary",
  },
  {
    type: "individual",
    icon: User,
    title: "Are you a Professional?",
    subtitle: "Individual Training Programs",
    description: "Accelerate your career with practical skills in sales, communication, and professional development. Join batch programs or get personalized coaching.",
    features: [
      "Batch programs (10-30 members)",
      "1-on-1 coaching available",
      "Flexible schedules",
      "Certificate of completion",
    ],
    cta: "Take Skill Assessment",
    href: "/assessment/individual",
    accent: "bg-accent",
  },
];

const whyChooseUs = [
  {
    icon: Award,
    title: "Certified Excellence",
    description: "SHRM, HRCI & CPD accredited programs recognized globally"
  },
  {
    icon: Target,
    title: "Customized Approach",
    description: "Training tailored to your specific industry and challenges"
  },
  {
    icon: Users,
    title: "Expert Trainers",
    description: "Industry veterans with 12+ years of hands-on experience"
  },
  {
    icon: TrendingUp,
    title: "Proven Results",
    description: "Measurable improvements with post-training support"
  }
];

export default function ServicesLanding() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section - Matching main site structure */}
        <section className="relative min-h-screen flex items-center overflow-hidden">
          {/* Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${heroBg})` }}
          />
          
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/85 to-primary/80" />

          {/* Background decorations */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 right-10 w-72 h-72 bg-secondary/10 rounded-full blur-3xl animate-float" />
            <div className="absolute bottom-20 left-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
          </div>

          {/* Grid pattern overlay */}
          <div className="absolute inset-0 opacity-5">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" className="text-primary-foreground" />
            </svg>
          </div>

          <div className="container mx-auto px-4 pt-32 pb-20 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm rounded-full px-4 py-2 mb-8 animate-fade-in-up">
                <Award className="w-4 h-4 text-secondary" />
                <span className="text-primary-foreground/90 text-sm font-medium">
                  Professional Training Solutions
                </span>
              </div>

              {/* Main Heading */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight animate-fade-in-up stagger-1">
                Choose Your{" "}
                <span className="text-gradient-gold">Training Path</span>
              </h1>

              {/* Subheading */}
              <p className="text-lg md:text-xl text-primary-foreground/80 mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-in-up stagger-2">
                Whether you're building team capabilities or advancing your personal career, we have the right program for you
              </p>

              {/* Service Cards */}
              <div className="grid md:grid-cols-2 gap-6 animate-fade-in-up stagger-3">
                {serviceOptions.map((option) => (
                  <div
                    key={option.type}
                    className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-8 border border-primary-foreground/20 hover:border-secondary/50 transition-all duration-300 text-left"
                  >
                    <div className={`w-16 h-16 rounded-xl ${option.accent} flex items-center justify-center mb-6`}>
                      <option.icon className="w-8 h-8 text-secondary-foreground" />
                    </div>
                    
                    <h2 className="text-xl md:text-2xl font-bold text-primary-foreground mb-2">
                      {option.title}
                    </h2>
                    
                    <p className="text-primary-foreground/60 text-sm font-medium mb-4">
                      {option.subtitle}
                    </p>
                    
                    <p className="text-primary-foreground/80 mb-6 text-sm leading-relaxed">
                      {option.description}
                    </p>

                    {/* Features */}
                    <ul className="space-y-2 mb-6">
                      {option.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-primary-foreground/80 text-sm">
                          <CheckCircle className="w-4 h-4 text-secondary shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <Button 
                      variant="hero" 
                      size="lg" 
                      asChild 
                      className="group w-full"
                    >
                      <Link to={option.href}>
                        {option.cta}
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full flex items-start justify-center p-2">
              <div className="w-1.5 h-3 bg-secondary rounded-full" />
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
              Why Choose <span className="text-primary">GD Pro Academy</span>
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {whyChooseUs.map((item) => (
                <div key={item.title} className="text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Not Sure Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Not sure which program is right for you?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              Let's discuss your goals and find the perfect training solution. Get a free consultation with our training expert.
            </p>
            <Button variant="navy" size="lg" asChild>
              <Link to="/contact">
                Get Free Consultation
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}