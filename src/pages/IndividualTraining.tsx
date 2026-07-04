import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { MessageSquare, Target, User, ArrowRight, TrendingUp, Presentation, Users } from "lucide-react";
import { CourseCard } from "@/components/common/CourseCard";
import heroBg from "@/assets/about-hero.jpg";

// Updated to batch system (10-30 members) instead of 1-on-1
const livePrograms = [
  {
    icon: MessageSquare,
    title: "Communication Excellence",
    description: "Master professional communication, presentations, and confident speaking for career success.",
    features: [
      "Public speaking & presentations",
      "Professional communication",
      "Active listening techniques",
      "Conflict resolution",
    ],
    duration: "1 Day",
    price: "₹7,999",
    type: "Batch (10-30 Members)",
    targetAudience: "Professionals looking to improve their communication skills for career advancement.",
    learningOutcomes: [
      "Speak confidently in meetings and presentations",
      "Communicate clearly and professionally",
      "Handle difficult conversations with ease",
      "Listen actively and respond effectively",
    ],
    deliveryMethod: "In-person batch training or virtual live session",
    prerequisites: "None",
    certification: "Certificate of Completion",
  },
  {
    icon: TrendingUp,
    title: "Sales Skills Training",
    description: "Group coaching to enhance your sales abilities and boost your career in sales.",
    features: [
      "Objection handling mastery",
      "Building client relationships",
      "Closing techniques",
      "Confidence in sales calls",
    ],
    duration: "1-2 Days",
    price: "₹11,999",
    type: "Batch (10-30 Members)",
    targetAudience: "Sales professionals, entrepreneurs, and anyone in client-facing roles.",
    learningOutcomes: [
      "Handle objections confidently and effectively",
      "Build lasting relationships with clients",
      "Close deals with proven techniques",
      "Develop a winning sales mindset",
    ],
    deliveryMethod: "In-person batch training or virtual live session",
    prerequisites: "Basic sales experience preferred but not required",
    certification: "Certificate of Completion",
  },
  {
    icon: Target,
    title: "Career Advancement Program",
    description: "Strategic career planning and skill development for professional growth.",
    features: [
      "Career goal setting",
      "Skill gap analysis",
      "Personal brand positioning",
      "Salary negotiation",
    ],
    duration: "1 Day",
    price: "₹9,999",
    type: "Batch (10-30 Members)",
    targetAudience: "Professionals seeking career growth, job changers, and those planning their next career move.",
    learningOutcomes: [
      "Create a clear career roadmap",
      "Identify and fill skill gaps",
      "Ace interviews with confidence",
      "Negotiate better compensation packages",
    ],
    deliveryMethod: "In-person batch training or virtual session",
    prerequisites: "None",
    certification: "Certificate of Completion + Career Action Plan",
  },
  {
    icon: Presentation,
    title: "Interview Preparation Workshop",
    description: "Comprehensive interview coaching to help you land your dream job.",
    features: [
      "Mock interviews with feedback",
      "Common question preparation",
      "Body language coaching",
      "Confidence building",
    ],
    duration: "Half Day",
    price: "₹4,999",
    type: "Batch (10-30 Members)",
    targetAudience: "Job seekers, fresh graduates, and professionals preparing for interviews.",
    learningOutcomes: [
      "Answer tough interview questions confidently",
      "Present yourself professionally",
      "Make a lasting first impression",
      "Negotiate job offers effectively",
    ],
    deliveryMethod: "In-person workshop or virtual session",
    prerequisites: "Have a target job or industry in mind",
    certification: "Certificate of Completion",
  },
];

export default function IndividualTraining() {
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
                <User className="w-4 h-4 text-secondary" />
                <span className="text-primary-foreground/90 text-sm font-medium">
                  Professional Training
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
                Level Up Your{" "}
                <span className="text-gradient-gold">Sales & Communication Skills</span>
              </h1>
              <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 leading-relaxed">
                Practical training to help you sell better, speak confidently, and grow your career. Join our batch programs designed for ambitious professionals like you.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button variant="hero" size="lg" asChild className="group">
                  <Link to="/contact">
                    Enroll in Batch Training
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Live Training Sessions - Now Batch Based */}
        <section className="section-padding bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="accent-line mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Batch Training Programs
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Group training sessions with 10-30 participants for interactive learning and peer networking. For personalized 1-on-1 coaching, <Link to="/contact" className="text-primary underline">contact us</Link>.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {livePrograms.map((program) => (
                <CourseCard
                  key={program.title}
                  icon={program.icon}
                  title={program.title}
                  description={program.description}
                  features={program.features}
                  duration={program.duration}
                  price={program.price}
                  type={program.type}
                  targetAudience={program.targetAudience}
                  learningOutcomes={program.learningOutcomes}
                  deliveryMethod={program.deliveryMethod}
                  prerequisites={program.prerequisites}
                  certification={program.certification}
                  ctaLabel="Enroll"
                  ctaLink="/contact"
                  ctaVariant="accent"
                />
              ))}
            </div>

            {/* 1-on-1 Note */}
            <div className="mt-12 text-center">
              <Card className="max-w-2xl mx-auto bg-primary/5 border-primary/20">
                <CardContent className="p-6">
                  <Users className="w-10 h-10 text-primary mx-auto mb-3" />
                  <h3 className="text-lg font-bold text-foreground mb-2">
                    Need 1-on-1 Personalized Coaching?
                  </h3>
                  <p className="text-muted-foreground mb-4 text-sm">
                    For individual attention and customized coaching sessions tailored specifically to your needs, please reach out to us directly.
                  </p>
                  <Button variant="navy" asChild>
                    <Link to="/contact">Contact for 1-on-1 Coaching</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>


        {/* CTA Section - Individual focused */}
        <section className="relative py-20 md:py-28 overflow-hidden">
          <div className="absolute inset-0 hero-gradient" />
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-10 right-20 w-64 h-64 bg-secondary/10 rounded-full blur-3xl" />
            <div className="absolute bottom-10 left-20 w-80 h-80 bg-secondary/5 rounded-full blur-3xl" />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
                Ready to Accelerate Your{" "}
                <span className="text-gradient-gold">Career?</span>
              </h2>
              <p className="text-lg md:text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto">
                Contact us to discuss your goals and discover how our training programs can help you succeed.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button variant="hero" size="xl" asChild className="group">
                  <Link to="/contact">
                    Get in Touch
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
