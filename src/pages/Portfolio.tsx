import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Award, ArrowRight, Briefcase, GraduationCap, Landmark, ShoppingBag, Factory, Cpu, Fuel, HeartPulse } from "lucide-react";

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

import { Helmet } from "react-helmet-async";
const caseStudies = [
  {
    company: "Leading BFSI Company",
    industry: "Banking & Financial Services",
    icon: Landmark,
    program: "Sales Excellence Training",
    participants: "120+ Sales Executives",
    challenge: "Sales executives struggled with objection handling and stalled deal pipelines.",
    result: "40% increase in conversions within 3 months",
    quote: "The training transformed our team's approach completely. Our sales executives now have the confidence and skills to close deals effectively.",
    author: "Sales Head",
    color: "from-blue-500 to-blue-600",
  },
  {
    company: "IT Services Firm",
    industry: "Information Technology",
    icon: Cpu,
    program: "Soft Skills Development",
    participants: "35 Team Managers",
    challenge: "First-time managers lacked communication and people-management skills.",
    result: "Improved team engagement scores by 45%",
    quote: "Grishma's program helped our managers develop strategic thinking and better team management skills.",
    author: "HR Director",
    color: "from-purple-500 to-purple-600",
  },
  {
    company: "Manufacturing Company",
    industry: "Manufacturing",
    icon: Factory,
    program: "Team Building & Communication",
    participants: "80+ Team Members",
    challenge: "Silos between departments were slowing decisions and creating conflict.",
    result: "Reduced inter-departmental conflicts by 60%",
    quote: "The cross-functional collaboration training was exactly what we needed. Our teams now work together seamlessly.",
    author: "Operations Manager",
    color: "from-orange-500 to-orange-600",
  },
  {
    company: "Educational Institute",
    industry: "Education",
    icon: GraduationCap,
    program: "Campus to Corporate",
    participants: "200+ Students",
    challenge: "Final-year students were underprepared for corporate interviews and workplace expectations.",
    result: "85% placement rate improvement",
    quote: "Students walked out more confident and job-ready after Grishma's sessions! The transformation was visible.",
    author: "Placement Head",
    color: "from-green-500 to-green-600",
  },
  {
    company: "Insurance Provider",
    industry: "Insurance",
    icon: Briefcase,
    program: "Sales Excellence Training",
    participants: "50 Sales Agents",
    challenge: "High-value policy conversions were slipping due to weak closing techniques.",
    result: "35% increase in policy closures",
    quote: "Her sales mastery workshop helped our team close deals faster than ever!",
    author: "Training Head",
    color: "from-indigo-500 to-indigo-600",
  },
  {
    company: "Retail Chain",
    industry: "Retail",
    icon: ShoppingBag,
    program: "Customer Service Excellence",
    participants: "100+ Staff",
    challenge: "Inconsistent customer experience was pulling down store-level CSAT scores.",
    result: "Customer satisfaction up by 40%",
    quote: "Grishma connects instantly with participants and delivers real results.",
    author: "Operations Head",
    color: "from-pink-500 to-pink-600",
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
  { name: "SHRM Recertification Provider", description: "SHRM-CP | SHRM-SCP", logo: shrmLogo },
];


export default function Portfolio() {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  return (
    <div className="min-h-screen">
      <Header />
        <Helmet>
          <title>Portfolio & Case Studies | GD Pro Academy Sales Training Results</title>
          <meta name="description" content="Case studies from BFSI, IT, manufacturing, retail, and education. See how GD Pro Academy has transformed sales teams across India." />
          <meta property="og:title" content="Portfolio & Case Studies | GD Pro Academy Sales Training Results" />
          <meta property="og:description" content="Case studies from BFSI, IT, manufacturing, retail, and education. See how GD Pro Academy has transformed sales teams across India." />
        </Helmet>
      <main>
        {/* Hero */}
        <section data-hero className="pt-32 pb-20 relative overflow-hidden">
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

        {/* Case studies section removed */}

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

            <div className="overflow-hidden">
              <div className="flex items-center gap-12 md:gap-16 animate-marquee">
                {[...associations, ...associations].map((company, i) => (
                  <div
                    key={`${company.name}-${i}`}
                    className="shrink-0 bg-white p-4 rounded-lg shadow-sm"
                  >
                    <img
                      src={company.logo}
                      alt={company.name}
                      className="h-12 md:h-16 w-auto object-contain"
                    />
                  </div>
                ))}
              </div>
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

        {/* Industries */}
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
                    <div className={`w-14 h-14 rounded-2xl ${industry.color} flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform`}>
                      <industry.icon className="w-7 h-7" />
                    </div>
                    <p className="font-medium text-foreground text-sm">{industry.name}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-20 md:py-28 overflow-hidden">
          <div className="absolute inset-0 hero-gradient" />
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-10 right-20 w-64 h-64 bg-secondary/10 rounded-full blur-3xl" />
            <div className="absolute bottom-10 left-20 w-80 h-80 bg-secondary/5 rounded-full blur-3xl" />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
                Ready to Transform{" "}
                <span className="text-gradient-gold">Your Team?</span>
              </h2>
              <p className="text-lg md:text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto">
                Let's discuss how we can help your organization achieve similar results.
              </p>

              <Button variant="hero" size="xl" asChild className="group">
                <Link to="/contact">
                  Get Started Today
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
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
