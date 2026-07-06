import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Building2, User, ArrowRight, CheckCircle, Award, Target, Users, TrendingUp, GraduationCap } from "lucide-react";
import corporateHeroBg from "@/assets/corporate-training-hero.jpg";
import individualHeroBg from "@/assets/individual-training-hero.jpg";


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
    cta: "Start Training Needs Discovery",
    href: "/assessment/corporate",
    bgImage: corporateHeroBg,
    bgColor: "from-primary/90 to-primary/80",
    iconBg: "bg-secondary",
    iconColor: "text-secondary-foreground",
  },
  {
    type: "individual",
    icon: User,
    title: "Are you a Professional?",
    subtitle: "Programs for Professionals",
    description: "Accelerate your career with practical skills in sales, communication, and professional development. Join batch programs or get personalized coaching.",
    features: [
      "Batch programs (10-30 members)",
      "1-on-1 coaching available",
      "Flexible schedules",
      "Certificate of completion",
    ],
    cta: "Take Skill Assessment",
    href: "/assessment/individual",
    bgImage: individualHeroBg,
    bgColor: "from-accent/90 to-accent/80",
    iconBg: "bg-primary",
    iconColor: "text-primary-foreground",
  },
  {
    type: "institute",
    icon: GraduationCap,
    title: "For Educational Institutes",
    subtitle: "Campus to Corporate Programs",
    description: "Prepare your students for corporate life with our Campus to Corporate programs. Improve placement rates and graduate confidence.",
    features: [
      "Corporate etiquette & workplace readiness",
      "Interview preparation and mock rounds",
      "Communication and presentation skills",
      "TPO-friendly delivery on campus",
    ],
    cta: "Explore Campus Programs",
    href: "/corporate-training#campus-to-corporate",
    bgImage: corporateHeroBg,
    bgColor: "from-primary/90 to-primary/70",
    iconBg: "bg-secondary",
    iconColor: "text-secondary-foreground",
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
    description: "Industry veterans with 14+ years of hands-on experience"
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
        <section className="min-h-screen flex flex-col lg:flex-row">
          {serviceOptions.map((option, index) => (
            <div
              key={option.type}
              className="relative flex-1 flex flex-col justify-end p-6 sm:p-8 lg:p-10 xl:p-14 min-h-[70vh] lg:min-h-screen pb-12 lg:pb-16 pt-28 sm:pt-32 lg:pt-24"
            >
              {/* Background Image with Overlay */}
              <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${option.bgImage})` }}
              />
              <div className={`absolute inset-0 bg-gradient-to-br ${option.bgColor}`} />
              
              {/* Content Card */}
              <div className="relative z-10 w-full max-w-xl mx-auto lg:mx-0">
                {/* Title with inline icon */}
                <div className="flex items-center gap-4 mb-3">
                  <div className={`w-12 h-12 md:w-14 md:h-14 rounded-xl ${option.iconBg} flex items-center justify-center shadow-lg shrink-0`}>
                    <option.icon className={`w-6 h-6 md:w-7 md:h-7 ${option.iconColor}`} />
                  </div>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.5rem] xl:text-5xl font-bold text-white leading-tight">
                    {option.title}
                  </h2>
                </div>
                
                {/* Subtitle */}
                <p className="text-white/80 text-sm md:text-base lg:text-lg font-medium mb-4">
                  {option.subtitle}
                </p>
                
                {/* Description */}
                <p className="text-white/75 mb-6 text-sm md:text-base lg:text-lg leading-relaxed">
                  {option.description}
                </p>

                {/* Features */}
                <ul className="space-y-2.5 md:space-y-3 mb-8">
                  {option.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-white/90 text-sm md:text-base">
                      <CheckCircle className="w-5 h-5 text-secondary shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Button 
                  variant="hero" 
                  size="lg" 
                  asChild 
                  className="group w-full sm:w-auto text-base md:text-lg px-6 md:px-8 py-4 md:py-5 h-auto shadow-lg hover:shadow-xl transition-all"
                >
                  <Link to={option.href}>
                    {option.cta}
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
              
              {/* Center divider badge for desktop */}
              {index === 0 && (
                <div className="hidden lg:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-20">
                  <div className="w-16 h-16 xl:w-20 xl:h-20 rounded-full bg-white shadow-2xl flex items-center justify-center border-4 border-secondary">
                    <User className="w-8 h-8 xl:w-10 xl:h-10 text-primary" />
                  </div>
                </div>
              )}
            </div>
          ))}
        </section>

        {/* Why Choose Us Section */}
        <section className="py-16 md:py-20 bg-muted">
          <div className="container mx-auto px-4">
            {/* Why Choose Us */}
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-foreground mb-10">
              Why Choose <span className="text-primary">GD Pro Academy</span>
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {whyChooseUs.map((item) => (
                <div key={item.title} className="text-center p-4">
                  <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-7 h-7 md:w-8 md:h-8 text-primary" />
                  </div>
                  <h3 className="text-base md:text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Not Sure Section */}
        <section className="py-14 md:py-16 bg-background">
          <div className="container mx-auto px-4 text-center">
            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-foreground mb-4">
              Not sure which program is right for you?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto text-sm md:text-base">
              Let's discuss your goals and find the perfect training solution. Get a free consultation with our training expert.
            </p>
            <Button variant="navy" size="lg" asChild>
              <Link to="/contact">
                Get Free Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
