import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CTASection } from "@/components/sections/CTASection";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { MessageSquare, Briefcase, Target, Clock, User, CheckCircle, ArrowRight, Video, Gift, Sparkles } from "lucide-react";

const livePrograms = [
  {
    icon: MessageSquare,
    title: "Communication Excellence",
    description: "Master professional communication, presentations, and confident speaking.",
    features: [
      "Public speaking & presentations",
      "Professional communication",
      "Active listening techniques",
      "Conflict resolution",
    ],
    duration: "4 Hours",
    price: "₹8,000",
    type: "1-on-1",
  },
  {
    icon: Briefcase,
    title: "Personal Branding Workshop",
    description: "Build a powerful personal brand that sets you apart in your industry.",
    features: [
      "Personal brand strategy",
      "LinkedIn profile optimization",
      "Professional networking",
      "Online presence management",
    ],
    duration: "6 Hours",
    price: "₹12,000",
    type: "1-on-1",
  },
  {
    icon: Target,
    title: "Career Advancement Coaching",
    description: "Strategic career planning and skill development for professional growth.",
    features: [
      "Career goal setting",
      "Skill gap analysis",
      "Interview preparation",
      "Salary negotiation",
    ],
    duration: "8 Hours",
    price: "₹15,000",
    type: "1-on-1",
  },
];

const eCourses = [
  {
    title: "Communication Mastery Course",
    description: "Complete digital course covering all aspects of professional communication.",
    features: [
      "25 Video Lessons (4+ hours)",
      "Downloadable Templates",
      "Practice Exercises",
      "Certificate of Completion",
      "Lifetime Access",
    ],
    videos: "25 Videos",
    price: "₹2,999",
  },
  {
    title: "Personal Branding Blueprint",
    description: "Step-by-step guide to building your personal brand and online presence.",
    features: [
      "20 Video Lessons (3+ hours)",
      "Personal Brand Workbook",
      "LinkedIn Profile Templates",
      "Content Calendar Template",
      "90-day Action Plan",
    ],
    videos: "20 Videos",
    price: "₹3,499",
  },
  {
    title: "Career Growth Accelerator",
    description: "Comprehensive career development course covering goal setting and advancement strategies.",
    features: [
      "30 Video Lessons (5+ hours)",
      "Career Assessment Tools",
      "Goal Setting Framework",
      "Resume & Interview Kit",
      "Salary Negotiation Scripts",
    ],
    videos: "30 Videos",
    price: "₹4,999",
  },
];

export default function IndividualTraining() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-20 hero-gradient relative overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 right-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-float" />
            <div className="absolute bottom-20 left-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                <User className="w-4 h-4 text-secondary" />
                <span className="text-primary-foreground/90 text-sm font-medium">
                  Individual Training Solutions
                </span>
              </div>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
                Accelerate Your{" "}
                <span className="text-gradient-gold">Career Growth</span>
              </h1>
              <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 leading-relaxed">
                Personalized coaching and self-paced courses designed to help you master essential professional skills and achieve your career goals.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button variant="hero" size="lg" asChild>
                  <Link to="/contact">
                    Book Training Session
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
                <Button variant="heroOutline" size="lg" asChild>
                  <a href="#courses">Browse E-Courses</a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Live Training Sessions */}
        <section className="section-padding bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="accent-line mx-auto mb-6" />
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                Live Training Sessions
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Personalized 1-on-1 coaching sessions tailored to your specific needs and goals.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {livePrograms.map((program) => (
                <Card key={program.title} variant="program" className="flex flex-col">
                  <CardHeader>
                    <div className="w-14 h-14 rounded-2xl bg-accent/20 flex items-center justify-center mb-4">
                      <program.icon className="w-7 h-7 text-accent" />
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
                        <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-medium">
                          {program.type}
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <p className="font-display text-2xl font-bold text-foreground">{program.price}</p>
                        <Button variant="accent" asChild>
                          <Link to="/contact">Book Session</Link>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* E-Courses */}
        <section id="courses" className="section-padding bg-muted">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="accent-line mx-auto mb-6" />
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                Online E-Courses
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Learn at your own pace with comprehensive digital courses.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8 mb-12">
              {eCourses.map((course) => (
                <Card key={course.title} variant="elevated" className="flex flex-col">
                  <CardHeader>
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
                      <Video className="w-7 h-7 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{course.title}</CardTitle>
                    <CardDescription>{course.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col">
                    <ul className="space-y-2 mb-6 flex-1">
                      {course.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <CheckCircle className="w-4 h-4 text-accent shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="space-y-4 pt-6 border-t">
                      <div className="flex items-center justify-between text-sm text-muted-foreground">
                        <span className="flex items-center gap-2">
                          <Video className="w-4 h-4" />
                          {course.videos}
                        </span>
                        <span>Self-paced</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <p className="font-display text-2xl font-bold text-foreground">{course.price}</p>
                        <Button variant="navy" asChild>
                          <Link to="/contact">Buy Course</Link>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Bundle Offer */}
            <Card variant="gold" className="max-w-3xl mx-auto overflow-hidden">
              <div className="p-8 md:p-10">
                <div className="flex items-center gap-2 mb-4">
                  <Gift className="w-6 h-6 text-secondary" />
                  <span className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                    BEST VALUE
                  </span>
                </div>
                <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                  Complete Professional Bundle
                </h3>
                <p className="text-muted-foreground mb-6">
                  Get all three courses at a special bundled price. Perfect for comprehensive development.
                </p>
                <div className="grid sm:grid-cols-2 gap-4 mb-8">
                  {[
                    "All 3 Complete Courses",
                    "75+ Video Lessons (12+ hours)",
                    "All Templates & Resources",
                    "Bonus: 1-hour Live Q&A Session",
                  ].map((feature) => (
                    <div key={feature} className="flex items-center gap-2">
                      <Sparkles className="w-5 h-5 text-secondary shrink-0" />
                      <span className="text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-baseline gap-3">
                    <span className="text-muted-foreground line-through text-xl">₹11,497</span>
                    <span className="font-display text-4xl font-bold text-foreground">₹7,999</span>
                    <span className="bg-accent text-accent-foreground px-2 py-1 rounded text-sm font-semibold">
                      SAVE 30%
                    </span>
                  </div>
                  <Button variant="gold" size="lg" asChild>
                    <Link to="/contact">Get Bundle</Link>
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
