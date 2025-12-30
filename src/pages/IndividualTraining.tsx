import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { MessageSquare, Target, Clock, User, CheckCircle, ArrowRight, Video, Gift, Sparkles, TrendingUp, Presentation, Users } from "lucide-react";
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
      "Interview preparation",
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
    price: "₹2,997",
  },
  {
    title: "Sales Skills Blueprint",
    description: "Step-by-step guide to mastering sales techniques and building confidence.",
    features: [
      "30 Video Lessons (5+ hours)",
      "Sales Scripts & Templates",
      "Objection Handling Guide",
      "Role-play Exercises",
      "90-day Action Plan",
    ],
    videos: "30 Videos",
    price: "₹3,497",
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
    price: "₹4,997",
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
                  Individual Training Solutions
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
                Accelerate Your{" "}
                <span className="text-gradient-gold">Career Growth</span>
              </h1>
              <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 leading-relaxed">
                Batch training programs (10-30 members) and self-paced courses designed to help you master essential professional skills. For 1-on-1 coaching, please contact us directly.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button variant="hero" size="lg" asChild className="group">
                  <Link to="/contact">
                    Enroll in Batch Training
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button variant="heroOutline" size="lg" asChild>
                  <a href="#courses">Browse E-Courses</a>
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

        {/* E-Courses */}
        <section id="courses" className="section-padding bg-muted">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="accent-line mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
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
                        <p className="text-2xl font-bold text-foreground">{course.price}</p>
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
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                  Complete Professional Bundle
                </h3>
                <p className="text-muted-foreground mb-6">
                  Get all three courses at a special bundled price. Perfect for comprehensive development.
                </p>
                <div className="grid sm:grid-cols-2 gap-4 mb-8">
                  {[
                    "All 3 Complete Courses",
                    "85+ Video Lessons (14+ hours)",
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
                    <span className="text-muted-foreground line-through text-xl">₹11,491</span>
                    <span className="text-4xl font-bold text-foreground">₹7,997</span>
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
