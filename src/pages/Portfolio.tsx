import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Building2, Users, TrendingUp, Award, Quote, ArrowRight, ArrowLeft, Briefcase, GraduationCap, Landmark, ShoppingBag, Factory, Cpu, Fuel, HeartPulse } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import heroBg from "@/assets/about-portrait1.jpg";

// Import association logos
import kotakLogo from "@/assets/kotak-logo.png";
import prepworksLogo from "@/assets/prepworks-logo.png";
import kyteLogo from "@/assets/kyte-logo.jpg";
import mahindraLogo from "@/assets/mahindra-pride.png";
import proSpidersLogo from "@/assets/pro-spiders.png";
import yesBankLogo from "@/assets/yes-bank.png";
import wagonsLogo from "@/assets/wagons-learning.png";
import veeflyLogo from "@/assets/veefly.png";
import iciciLogo from "@/assets/icici-bank.jpeg";
import hdfcLogo from "@/assets/hdfc-bank.png";
import axisLogo from "@/assets/axis-bank.jpg";

// Import certification logos
import cpdLogo from "@/assets/cpd-accredited.png";
import hrciLogo from "@/assets/hrci-approved.png";
import proTouchLogo from "@/assets/pro-touch.png";
import shrmLogo from "@/assets/shrm-provider.png";

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
    program: "Soft Skills Development",
    participants: "35 Team Managers",
    result: "Improved team engagement scores by 45%",
    quote: "Grishma's program helped our managers develop strategic thinking and better team management skills.",
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
    company: "Educational Institute",
    industry: "Education",
    program: "Campus to Corporate",
    participants: "200+ Students",
    result: "85% placement rate improvement",
    quote: "Students walked out more confident and job-ready after Grishma's sessions! The transformation was visible.",
    author: "Placement Head",
  },
  {
    company: "Insurance Provider",
    industry: "Insurance",
    program: "Sales Excellence Training",
    participants: "50 Sales Agents",
    result: "35% increase in policy closures",
    quote: "Her sales mastery workshop helped our team close deals faster than ever!",
    author: "Training Head",
  },
  {
    company: "Retail Chain",
    industry: "Retail",
    program: "Customer Service Excellence",
    participants: "100+ Staff",
    result: "Customer satisfaction up by 40%",
    quote: "Grishma connects instantly with participants and delivers real results.",
    author: "Operations Head",
  },
];

const industries = [
  { name: "BFSI & Insurance", icon: Landmark, color: "bg-blue-500/10 text-blue-600" },
  { name: "Information Technology", icon: Cpu, color: "bg-purple-500/10 text-purple-600" },
  { name: "Manufacturing", icon: Factory, color: "bg-orange-500/10 text-orange-600" },
  { name: "Education & EdTech", icon: GraduationCap, color: "bg-green-500/10 text-green-600" },
  { name: "Retail", icon: ShoppingBag, color: "bg-pink-500/10 text-pink-600" },
  { name: "Oil & Gas", icon: Fuel, color: "bg-amber-500/10 text-amber-600" },
  { name: "Healthcare", icon: HeartPulse, color: "bg-red-500/10 text-red-600" },
  { name: "Corporate & Startups", icon: Briefcase, color: "bg-indigo-500/10 text-indigo-600" },
];

// Key associations with actual logos - displayed in color by default
const associations = [
  { name: "Kotak Bank", logo: kotakLogo },
  { name: "Yes Bank", logo: yesBankLogo },
  { name: "Prepworks", logo: prepworksLogo },
  { name: "Kyte Enterprise", logo: kyteLogo },
  { name: "Pro Spiders", logo: proSpidersLogo },
  { name: "Mahindra Pride Classroom", logo: mahindraLogo },
  { name: "Wagons Learning", logo: wagonsLogo },
  { name: "VeeFly", logo: veeflyLogo },
  { name: "ICICI Bank", logo: iciciLogo },
  { name: "HDFC Bank", logo: hdfcLogo },
  { name: "Axis Bank", logo: axisLogo },
];

const certifications = [
  { name: "CPD Accredited", description: "Continuing Professional Development", logo: cpdLogo },
  { name: "HRCI Approved Provider", description: "2024 Provider", logo: hrciLogo },
  { name: "Pro Touch Certified", description: "Training Excellence", logo: proTouchLogo },
  { name: "SHRM Recertification Provider", description: "SHRM-CP | SHRM-SCP", logo: shrmLogo },
];


export default function Portfolio() {
  const [isPaused, setIsPaused] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const autoScrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Handle manual navigation
  const scrollToIndex = (index: number) => {
    const container = scrollContainerRef.current;
    if (!container) return;
    
    const cardWidth = 424; // 400px card + 24px gap
    const newIndex = Math.max(0, Math.min(index, caseStudies.length - 1));
    setCurrentIndex(newIndex);
    container.scrollTo({ left: newIndex * cardWidth, behavior: 'smooth' });
  };

  const handlePrev = () => {
    scrollToIndex(currentIndex - 1);
    resetAutoScrollDelay();
  };

  const handleNext = () => {
    scrollToIndex(currentIndex + 1);
    resetAutoScrollDelay();
  };

  // Reset auto-scroll with delay after user interaction
  const resetAutoScrollDelay = () => {
    setIsPaused(true);
    if (autoScrollTimeoutRef.current) {
      clearTimeout(autoScrollTimeoutRef.current);
    }
    autoScrollTimeoutRef.current = setTimeout(() => {
      setIsPaused(false);
    }, 3000);
  };

  // Auto-scroll effect
  useEffect(() => {
    if (isPaused) return;
    
    const interval = setInterval(() => {
      setCurrentIndex(prev => {
        const next = prev + 1;
        if (next >= caseStudies.length) {
          return 0;
        }
        return next;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused]);

  // Scroll to current index when it changes
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container || isPaused) return;
    
    const cardWidth = 424;
    container.scrollTo({ left: currentIndex * cardWidth, behavior: 'smooth' });
  }, [currentIndex, isPaused]);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (autoScrollTimeoutRef.current) {
        clearTimeout(autoScrollTimeoutRef.current);
      }
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-20 relative overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${heroBg})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/85 to-primary/80" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                <Award className="w-4 h-4 text-secondary" />
                <span className="text-primary-foreground/90 text-sm font-medium">
                  Our Portfolio
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
                Proven <span className="text-gradient-gold">Success Stories</span>
              </h1>
              <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed">
                Explore how we've helped organizations across industries transform their teams and achieve measurable results.
              </p>
            </div>
          </div>
        </section>

        {/* Case Studies Carousel - Fixed dots to match case studies count */}
        <section className="section-padding bg-muted overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <div className="accent-line mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Case Studies
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Real results from real organizations we've partnered with.
              </p>
            </div>
          </div>

          {/* Carousel with controls */}
          <div className="relative px-4">
            {/* Navigation Buttons */}
            <div className="absolute left-4 top-1/2 -translate-y-1/2 z-10">
              <Button
                variant="outline"
                size="icon"
                onClick={handlePrev}
                disabled={currentIndex === 0}
                className="rounded-full bg-card shadow-lg hover:bg-muted disabled:opacity-50"
              >
                <ArrowLeft className="w-5 h-5" />
              </Button>
            </div>
            <div className="absolute right-4 top-1/2 -translate-y-1/2 z-10">
              <Button
                variant="outline"
                size="icon"
                onClick={handleNext}
                disabled={currentIndex === caseStudies.length - 1}
                className="rounded-full bg-card shadow-lg hover:bg-muted disabled:opacity-50"
              >
                <ArrowRight className="w-5 h-5" />
              </Button>
            </div>

            <div 
              ref={scrollContainerRef}
              className="flex gap-6 overflow-x-auto scrollbar-thin pb-4 scroll-smooth px-4 lg:px-8"
              onMouseEnter={() => {
                setIsPaused(true);
                if (autoScrollTimeoutRef.current) {
                  clearTimeout(autoScrollTimeoutRef.current);
                }
              }}
              onMouseLeave={() => {
                autoScrollTimeoutRef.current = setTimeout(() => {
                  setIsPaused(false);
                }, 2500);
              }}
              style={{ scrollSnapType: 'x mandatory' }}
            >
              {caseStudies.map((study, index) => (
                <Card 
                  key={index} 
                  variant="elevated" 
                  className="w-[400px] shrink-0 overflow-hidden hover:shadow-xl transition-all cursor-pointer"
                  style={{ scrollSnapAlign: 'start' }}
                >
                  <div className="h-2 bg-gradient-to-r from-primary to-secondary" />
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <p className="text-sm text-secondary font-medium">{study.industry}</p>
                        <h3 className="text-lg font-bold text-foreground">{study.company}</h3>
                      </div>
                      <div className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs font-medium">
                        {study.program}
                      </div>
                    </div>

                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                      <span className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        {study.participants}
                      </span>
                    </div>

                    <div className="bg-accent/10 border border-accent/20 rounded-xl p-3 mb-4">
                      <p className="text-accent font-semibold flex items-center gap-2 text-sm">
                        <TrendingUp className="w-4 h-4" />
                        {study.result}
                      </p>
                    </div>

                    <div className="relative">
                      <Quote className="w-6 h-6 text-muted-foreground/20 absolute -top-1 -left-1" />
                      <blockquote className="text-muted-foreground italic pl-5 text-sm">
                        "{study.quote}"
                      </blockquote>
                      <p className="text-sm font-medium text-foreground mt-2 pl-5">
                        — {study.author}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Pagination dots - Now matches exactly the number of case studies */}
            <div className="flex justify-center gap-2 mt-6">
              {caseStudies.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    scrollToIndex(index);
                    resetAutoScrollDelay();
                  }}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex 
                      ? 'bg-primary w-6' 
                      : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                  }`}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Key Associations */}
        <section className="section-padding bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <div className="accent-line mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Key Associations
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Proud to have partnered with leading organizations across India
              </p>
            </div>

            {/* Logo associations - displayed in full color */}
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
              {associations.map((company) => (
                <div
                  key={company.name}
                  className="bg-white p-4 rounded-lg shadow-sm hover:shadow-lg transition-all hover:scale-105"
                >
                  <img
                    src={company.logo}
                    alt={company.name}
                    className="h-12 md:h-16 w-auto object-contain"
                  />
                </div>
              ))}
            </div>
            <p className="text-center text-muted-foreground mt-6">and more...</p>
          </div>
        </section>

        {/* Certifications */}
        <section className="section-padding bg-muted">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <div className="accent-line mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Certifications & Credentials
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Recognized by leading professional bodies worldwide
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {certifications.map((cert) => (
                <Card 
                  key={cert.name} 
                  variant="elevated" 
                  className="text-center hover:shadow-lg transition-shadow"
                >
                  <CardContent className="p-6">
                    <div className="w-20 h-20 rounded-2xl bg-white flex items-center justify-center mx-auto mb-4 p-2 shadow-sm">
                      <img src={cert.logo} alt={cert.name} className="w-full h-full object-contain" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-1">{cert.name}</h3>
                    <p className="text-xs text-muted-foreground">{cert.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Industries - Redesigned with icons and colors */}
        <section className="section-padding bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <div className="accent-line mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Industries We Serve
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Delivering impactful training across diverse sectors
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto">
              {industries.map((industry) => (
                <Card 
                  key={industry.name} 
                  variant="elevated" 
                  className="text-center hover:shadow-lg transition-all hover:-translate-y-1 cursor-pointer group"
                >
                  <CardContent className="p-6">
                    <div className={`w-14 h-14 rounded-2xl ${industry.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                      <industry.icon className="w-7 h-7" />
                    </div>
                    <p className="text-sm font-semibold text-foreground">{industry.name}</p>
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
      </main>
      <Footer />
    </div>
  );
}
