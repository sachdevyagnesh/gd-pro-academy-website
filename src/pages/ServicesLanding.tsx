import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Building2, User, ArrowRight, CheckCircle } from "lucide-react";
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
    cta: "Take Assessment",
    href: "/assessment/corporate",
    bgColor: "from-primary/90 to-primary/80",
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
    cta: "Take Assessment",
    href: "/assessment/individual",
    bgColor: "from-primary/80 to-primary/90",
    accent: "bg-accent",
  },
];

export default function ServicesLanding() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Split Hero Section */}
        <section className="pt-24 min-h-screen relative">
          <div className="grid md:grid-cols-2 min-h-[calc(100vh-6rem)]">
            {serviceOptions.map((option) => (
              <div
                key={option.type}
                className={`relative overflow-hidden flex flex-col items-center justify-center p-8 md:p-12 lg:p-16`}
              >
                {/* Background */}
                <div 
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: `url(${heroBg})` }}
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${option.bgColor}`} />

                {/* Content */}
                <div className="relative z-10 max-w-md text-center">
                  <div className={`w-20 h-20 rounded-2xl ${option.accent} flex items-center justify-center mx-auto mb-6`}>
                    <option.icon className="w-10 h-10 text-secondary-foreground" />
                  </div>
                  
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary-foreground mb-3">
                    {option.title}
                  </h2>
                  
                  <p className="text-primary-foreground/60 text-sm font-medium mb-4">
                    {option.subtitle}
                  </p>
                  
                  <p className="text-primary-foreground/80 mb-6 leading-relaxed">
                    {option.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2 mb-8 text-left">
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
                    className="group w-full md:w-auto"
                  >
                    <Link to={option.href}>
                      {option.cta}
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* Center Logo/Divider */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 hidden md:block">
            <div className="w-16 h-16 rounded-full bg-background shadow-xl flex items-center justify-center border-4 border-secondary">
              <span className="text-primary font-bold text-lg">or</span>
            </div>
          </div>
        </section>

        {/* Trust Indicators */}
        <section className="py-12 bg-muted">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center items-center gap-8 text-center">
              <div>
                <p className="text-3xl font-bold text-foreground">10,000+</p>
                <p className="text-sm text-muted-foreground">Professionals Trained</p>
              </div>
              <div className="w-px h-12 bg-border hidden md:block" />
              <div>
                <p className="text-3xl font-bold text-foreground">100+</p>
                <p className="text-sm text-muted-foreground">Corporate Clients</p>
              </div>
              <div className="w-px h-12 bg-border hidden md:block" />
              <div>
                <p className="text-3xl font-bold text-foreground">12+</p>
                <p className="text-sm text-muted-foreground">Years Experience</p>
              </div>
              <div className="w-px h-12 bg-border hidden md:block" />
              <div>
                <p className="text-3xl font-bold text-foreground">4.8/5</p>
                <p className="text-sm text-muted-foreground">Client Rating</p>
              </div>
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
