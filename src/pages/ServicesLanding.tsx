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
    bgColor: "from-[#1e3a5f]/95 to-[#2c4a6f]/90",
    iconBg: "bg-secondary",
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
    bgColor: "from-[#0f4c75]/95 to-[#1a5a80]/90",
    iconBg: "bg-accent",
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
        {/* Full-screen Split Hero Section */}
        <section className="min-h-screen flex flex-col lg:flex-row pt-24">
          {serviceOptions.map((option, index) => (
            <div
              key={option.type}
              className={`relative flex-1 flex flex-col justify-center items-center p-8 lg:p-12 xl:p-16 min-h-[50vh] lg:min-h-screen`}
            >
              {/* Background Image with Overlay */}
              <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${heroBg})` }}
              />
              <div className={`absolute inset-0 bg-gradient-to-br ${option.bgColor}`} />
              
              {/* Content */}
              <div className="relative z-10 max-w-lg text-center lg:text-left w-full">
                {/* Icon */}
                <div className={`w-16 h-16 md:w-20 md:h-20 rounded-2xl ${option.iconBg} flex items-center justify-center mb-8 mx-auto lg:mx-0 shadow-lg`}>
                  <option.icon className="w-8 h-8 md:w-10 md:h-10 text-secondary-foreground" />
                </div>
                
                {/* Title */}
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3 leading-tight">
                  {option.title}
                </h2>
                
                {/* Subtitle */}
                <p className="text-white/70 text-sm md:text-base font-medium mb-4">
                  {option.subtitle}
                </p>
                
                {/* Description */}
                <p className="text-white/80 mb-8 text-sm md:text-base leading-relaxed">
                  {option.description}
                </p>

                {/* Features */}
                <ul className="space-y-3 mb-10">
                  {option.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-white/90 text-sm md:text-base">
                      <CheckCircle className="w-5 h-5 text-secondary shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Button 
                  variant="hero" 
                  size="lg" 
                  asChild 
                  className="group w-full sm:w-auto text-base px-8 py-4 h-auto"
                >
                  <Link to={option.href}>
                    {option.cta}
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
              
              {/* Center divider for desktop */}
              {index === 0 && (
                <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 z-20">
                  <div className="w-20 h-20 rounded-full bg-white shadow-2xl flex items-center justify-center">
                    <Award className="w-10 h-10 text-primary" />
                  </div>
                </div>
              )}
            </div>
          ))}
        </section>

        {/* Stats + Why Choose Us Combined Section */}
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4">
            {/* Stats Row */}
            <div className="flex flex-wrap justify-center items-center gap-8 text-center mb-16 pb-12 border-b border-border">
              <div>
                <p className="text-3xl md:text-4xl font-bold text-primary">10,000+</p>
                <p className="text-sm text-muted-foreground">Professionals Trained</p>
              </div>
              <div className="w-px h-12 bg-border hidden md:block" />
              <div>
                <p className="text-3xl md:text-4xl font-bold text-primary">100+</p>
                <p className="text-sm text-muted-foreground">Corporate Clients</p>
              </div>
              <div className="w-px h-12 bg-border hidden md:block" />
              <div>
                <p className="text-3xl md:text-4xl font-bold text-primary">12+</p>
                <p className="text-sm text-muted-foreground">Years Experience</p>
              </div>
              <div className="w-px h-12 bg-border hidden md:block" />
              <div>
                <p className="text-3xl md:text-4xl font-bold text-primary">4.8/5</p>
                <p className="text-sm text-muted-foreground">Client Rating</p>
              </div>
            </div>
            
            {/* Why Choose Us */}
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
