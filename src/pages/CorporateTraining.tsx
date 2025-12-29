import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CTASection } from "@/components/sections/CTASection";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Users, TrendingUp, MessageSquare, Award, CheckCircle, ArrowRight, Building2, Briefcase, Target } from "lucide-react";
import { CourseCard } from "@/components/common/CourseCard";
import heroBg from "@/assets/hero-bg-3.jpg";

const programs = [
  {
    icon: TrendingUp,
    title: "Sales Excellence Training",
    description: "Boost conversions and win rates with modern selling strategies. Master objection handling, closing techniques, and relationship building.",
    features: [
      "Conversation starters & rapport building",
      "Objection handling mastery",
      "Profiling and probing techniques",
      "Sales closure strategies",
      "Negotiation skills",
      "Value-based selling approach",
    ],
    duration: "2 Days",
    price: "₹17,999",
    participants: "10-30 participants",
    popular: true,
    // Learn More details
    targetAudience: "Sales teams, business development executives, account managers, and sales managers looking to improve conversion rates.",
    learningOutcomes: [
      "Master objection handling with proven frameworks",
      "Build rapport and trust with prospects quickly",
      "Close deals using value-based selling techniques",
      "Improve negotiation skills for better outcomes",
      "Develop a consistent sales process",
    ],
    deliveryMethod: "In-person workshop or virtual live training",
    prerequisites: "None - suitable for all experience levels",
    certification: "Certificate of Completion + SHRM/HRCI PDCs eligible",
  },
  {
    icon: MessageSquare,
    title: "Soft Skills Development",
    description: "Develop essential interpersonal skills for professional success including communication, time management, and customer service.",
    features: [
      "Communication & active listening",
      "Email etiquette & business writing",
      "Time management techniques",
      "Problem-solving skills",
      "Customer service excellence",
      "Story telling & presentations",
    ],
    duration: "2 Days",
    price: "₹14,999",
    participants: "10-30 participants",
    popular: false,
    targetAudience: "Professionals at all levels seeking to enhance their interpersonal and communication skills.",
    learningOutcomes: [
      "Communicate effectively in professional settings",
      "Write clear and impactful business emails",
      "Manage time efficiently using proven techniques",
      "Handle difficult conversations with confidence",
      "Deliver compelling presentations",
    ],
    deliveryMethod: "In-person workshop or virtual live training",
    prerequisites: "None",
    certification: "Certificate of Completion",
  },
  {
    icon: Users,
    title: "Campus to Corporate Training",
    description: "Prepare fresh graduates for the corporate world with essential workplace skills and professional development.",
    features: [
      "Corporate etiquette & professionalism",
      "Workplace communication",
      "Interview preparation",
      "Resume building",
      "First job readiness",
      "Industry expectations awareness",
    ],
    duration: "1-2 Days",
    price: "₹11,999",
    participants: "20-50 participants",
    popular: false,
    targetAudience: "Fresh graduates, final-year students, and young professionals entering the corporate workforce.",
    learningOutcomes: [
      "Understand corporate culture and expectations",
      "Present yourself professionally in interviews",
      "Build a compelling resume and LinkedIn profile",
      "Communicate effectively in workplace settings",
      "Transition smoothly from campus to corporate life",
    ],
    deliveryMethod: "In-person workshop (campus or corporate venue)",
    prerequisites: "None",
    certification: "Certificate of Participation",
  },
  {
    icon: Target,
    title: "Team Building & Communication",
    description: "Improve collaboration, productivity, and trust across teams with practical communication frameworks.",
    features: [
      "Cross-functional collaboration",
      "Effective team communication",
      "Conflict resolution strategies",
      "Goal alignment exercises",
      "Trust-building activities",
      "Feedback frameworks",
    ],
    duration: "1 Day",
    price: "₹11,999",
    participants: "15-40 participants",
    popular: false,
    targetAudience: "Teams seeking to improve collaboration, managers wanting to build cohesive teams.",
    learningOutcomes: [
      "Build stronger team relationships",
      "Resolve conflicts constructively",
      "Communicate effectively across functions",
      "Give and receive feedback professionally",
      "Align team goals with organizational objectives",
    ],
    deliveryMethod: "In-person workshop with interactive activities",
    prerequisites: "None",
    certification: "Team Certificate of Completion",
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
        <section className="pt-32 pb-20 relative overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${heroBg})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/85 to-primary/80" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                <Building2 className="w-4 h-4 text-secondary" />
                <span className="text-primary-foreground/90 text-sm font-medium">
                  Corporate Training Solutions
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
                Transform Your Team's{" "}
                <span className="text-gradient-gold">Performance</span>
              </h1>
              <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 leading-relaxed">
                Customized training programs designed to elevate your team's capabilities in sales, soft skills, and communication. Proven results with 14+ years of corporate experience.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button variant="hero" size="lg" asChild>
                  <Link to="/contact">
                    Request Corporate Proposal
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
                <Button variant="heroOutline" size="lg" asChild>
                  <Link to="/book-consultation">Schedule a Call</Link>
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
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Corporate Training Programs
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Comprehensive programs tailored to your organization's specific needs and goals.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {programs.map((program) => (
                <CourseCard
                  key={program.title}
                  icon={program.icon}
                  title={program.title}
                  description={program.description}
                  features={program.features}
                  duration={program.duration}
                  price={program.price}
                  participants={program.participants}
                  popular={program.popular}
                  targetAudience={program.targetAudience}
                  learningOutcomes={program.learningOutcomes}
                  deliveryMethod={program.deliveryMethod}
                  prerequisites={program.prerequisites}
                  certification={program.certification}
                  ctaLabel="Book Now"
                  ctaLink="/book-consultation"
                  ctaVariant="navy"
                />
              ))}
            </div>

            {/* Other Courses Available */}
            <div className="mt-12 text-center">
              <Card className="max-w-2xl mx-auto bg-muted/50 border-dashed">
                <CardContent className="p-8">
                  <Briefcase className="w-12 h-12 text-secondary mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    Other Courses Available on Request
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Looking for leadership training, customized module development, cross-cultural training, or corporate counseling? We can design programs tailored to your specific needs.
                  </p>
                  <Button variant="gold" asChild>
                    <Link to="/contact">Request Custom Training</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="section-padding bg-muted">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="accent-line mb-6" />
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
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
                    <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
                    <p className="text-primary-foreground/80 mb-6">
                      Contact us for a customized training proposal tailored to your organization's needs.
                    </p>
                    <Button variant="hero" size="lg" asChild className="w-full">
                      <Link to="/book-consultation">Book Free Consultation</Link>
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
