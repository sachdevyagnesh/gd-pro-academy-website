import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CTASection } from "@/components/sections/CTASection";
import { TrainingMethodologyVideo } from "@/components/sections/TrainingMethodologyVideo";
import { CalendlyEmbed } from "@/components/sections/CalendlyEmbed";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  TrendingUp, Users, MessageSquare, Briefcase, Target, 
  Lightbulb, Presentation, Award, CheckCircle, ArrowRight, X
} from "lucide-react";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import heroBg from "@/assets/hero-bg-2.jpg";

const services = [
  {
    icon: TrendingUp,
    title: "Sales Excellence Training",
    description: "Transform your sales team with proven techniques that drive revenue growth.",
    features: [
      "Consultative selling approach",
      "Objection handling mastery",
      "Closing techniques that convert",
      "Customer relationship building",
    ],
    fullDescription: "Our Sales Excellence Training program is designed for sales professionals, team leads, and managers who want to elevate their selling game. Through role-plays, real-world scenarios, and proven methodologies, participants learn to understand customer psychology, handle objections confidently, and close deals effectively. The program covers the entire sales cycle from prospecting to after-sales relationship management.",
    duration: "2-5 Days",
    ideal: "Sales executives, Sales managers, Business development teams",
    color: "bg-primary/10",
    iconColor: "text-primary",
  },
  {
    icon: Users,
    title: "Team Building & Communication",
    description: "Foster collaboration and strengthen interpersonal bonds within your organization.",
    features: [
      "Trust-building activities",
      "Conflict resolution",
      "Cross-functional collaboration",
      "Effective team dynamics",
    ],
    fullDescription: "Effective teams are the backbone of successful organizations. Our Team Building & Communication program uses experiential learning, group activities, and structured exercises to build trust, improve communication, and create lasting bonds between team members. Participants learn to appreciate diverse perspectives, communicate openly, and work together towards common goals.",
    duration: "1-3 Days",
    ideal: "Corporate teams, Project groups, Cross-functional teams",
    color: "bg-secondary/20",
    iconColor: "text-secondary",
  },
  {
    icon: MessageSquare,
    title: "Communication Skills",
    description: "Master professional communication for impactful presentations and relationships.",
    features: [
      "Public speaking confidence",
      "Business writing excellence",
      "Active listening techniques",
      "Professional presentation skills",
    ],
    fullDescription: "Communication is the foundation of professional success. This comprehensive program covers verbal and non-verbal communication, presentation skills, email etiquette, and interpersonal communication. Participants practice through mock presentations, role-plays, and feedback sessions to build confidence and clarity in all forms of professional communication.",
    duration: "2-4 Days",
    ideal: "Professionals at all levels, Managers, Client-facing roles",
    color: "bg-accent/20",
    iconColor: "text-accent",
  },
  {
    icon: Briefcase,
    title: "Campus to Corporate",
    description: "Prepare fresh graduates for a successful transition into the corporate world.",
    features: [
      "Professional etiquette",
      "Workplace communication",
      "Time management skills",
      "Interview preparation",
    ],
    fullDescription: "The transition from academic life to corporate environment can be challenging. Our Campus to Corporate program bridges this gap by preparing students and fresh graduates with essential workplace skills, professional etiquette, and the mindset needed to thrive in their careers. The program covers everything from resume building to first 90 days success strategies.",
    duration: "3-5 Days",
    ideal: "Final year students, Fresh graduates, Campus placement batches",
    color: "bg-primary/10",
    iconColor: "text-primary",
  },
  {
    icon: Target,
    title: "Soft Skills Development",
    description: "Build essential interpersonal skills that set you apart in the workplace.",
    features: [
      "Emotional intelligence",
      "Problem-solving skills",
      "Adaptability & resilience",
      "Critical thinking",
    ],
    fullDescription: "In today's competitive environment, technical skills alone aren't enough. Our Soft Skills Development program focuses on building the interpersonal competencies that employers value most. From emotional intelligence to adaptability, participants learn to navigate workplace dynamics, manage stress, and build positive professional relationships.",
    duration: "2-4 Days",
    ideal: "All professionals, Emerging leaders, Customer service teams",
    color: "bg-secondary/20",
    iconColor: "text-secondary",
  },
  {
    icon: Lightbulb,
    title: "Customer Service Excellence",
    description: "Delight customers and build loyalty through exceptional service delivery.",
    features: [
      "Customer empathy building",
      "Complaint handling mastery",
      "Service recovery techniques",
      "Building customer loyalty",
    ],
    fullDescription: "Exceptional customer service creates loyal customers and brand advocates. This program trains participants on understanding customer expectations, handling difficult situations with grace, and turning complaints into opportunities. Through case studies and simulations, teams learn to deliver consistent, memorable service experiences.",
    duration: "2-3 Days",
    ideal: "Customer service teams, Front-line staff, Support executives",
    color: "bg-accent/20",
    iconColor: "text-accent",
  },
];

const approach = [
  {
    step: "01",
    title: "Discovery & Assessment",
    description: "Understanding your goals, challenges, and current skill levels.",
  },
  {
    step: "02",
    title: "Custom Program Design",
    description: "Tailoring content to your industry, team size, and objectives.",
  },
  {
    step: "03",
    title: "Interactive Delivery",
    description: "Role-plays, case studies, and hands-on experiential exercises.",
  },
  {
    step: "04",
    title: "Evaluation & Follow-up",
    description: "Post-training assessment and ongoing support for results.",
  },
];

export default function Services() {
  const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero with image */}
        <section className="pt-32 pb-20 relative overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${heroBg})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/85 via-primary/80 to-primary/75" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                <Presentation className="w-4 h-4 text-secondary" />
                <span className="text-primary-foreground/90 text-sm font-medium">
                  Our Services
                </span>
              </div>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
                Training Solutions That{" "}
                <span className="text-gradient-gold">Deliver Results</span>
              </h1>
              <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed">
                Comprehensive training programs designed to elevate skills, boost performance, and drive measurable business outcomes.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="section-padding bg-background">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service) => (
                <Card key={service.title} variant="program" className="group">
                  <CardHeader>
                    <div className={`w-14 h-14 rounded-2xl ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                      <service.icon className={`w-7 h-7 ${service.iconColor}`} />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                    <CardDescription className="text-base">{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button 
                      variant="ghost" 
                      className="w-full group" 
                      onClick={() => setSelectedService(service)}
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Our Approach */}
        <section className="section-padding bg-muted">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="accent-line mx-auto mb-6" />
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                Our Training Approach
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                A proven methodology that ensures effective learning and lasting impact.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {approach.map((item, index) => (
                <div key={item.step} className="relative">
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-2xl bg-primary text-primary-foreground font-display text-2xl font-bold flex items-center justify-center mx-auto mb-6">
                      {item.step}
                    </div>
                    <h3 className="font-display font-semibold text-foreground mb-3">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                  {index < approach.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-[calc(100%_-_8px)] w-[calc(100%_-_32px)] h-0.5 bg-border" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="section-padding bg-background">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
              <div>
                <div className="accent-line mb-6" />
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Why Choose GD Pro Academy?
                </h2>
                <div className="space-y-6">
                  {[
                    { title: "Industry Experience", desc: "14+ years in BFSI and corporate training" },
                    { title: "Customized Solutions", desc: "Programs tailored to your specific needs" },
                    { title: "Proven Results", desc: "98% client satisfaction rate" },
                    { title: "Pan-India Reach", desc: "Training delivered across the country" },
                  ].map((item) => (
                    <div key={item.title} className="flex gap-4">
                      <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center shrink-0">
                        <Award className="w-5 h-5 text-accent" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">{item.title}</h4>
                        <p className="text-sm text-muted-foreground">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <Card className="bg-primary text-primary-foreground p-8 shadow-elevated">
                <div className="text-center">
                  <h3 className="font-display text-2xl font-bold mb-4">Ready to Get Started?</h3>
                  <p className="text-primary-foreground/80 mb-6">
                    Let's discuss how we can help your team or career grow with the right training solution.
                  </p>
                  <div className="space-y-3">
                    <Button variant="hero" size="lg" asChild className="w-full">
                      <Link to="/contact">Get a Custom Quote</Link>
                    </Button>
                    <Button variant="heroOutline" size="lg" asChild className="w-full">
                      <Link to="/corporate-training">View Corporate Programs</Link>
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Training Methodology Video Section */}
        <TrainingMethodologyVideo />

        {/* Calendly Booking Section */}
        <CalendlyEmbed />

        <CTASection />
      </main>
      <Footer />

      {/* Service Detail Modal */}
      <Dialog open={!!selectedService} onOpenChange={() => setSelectedService(null)}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <div className="flex items-center gap-4 mb-2">
              {selectedService && (
                <div className={`w-12 h-12 rounded-xl ${selectedService.color} flex items-center justify-center`}>
                  <selectedService.icon className={`w-6 h-6 ${selectedService.iconColor}`} />
                </div>
              )}
              <DialogTitle className="text-2xl">{selectedService?.title}</DialogTitle>
            </div>
            <DialogDescription className="text-base">
              {selectedService?.description}
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-6 mt-4">
            <div>
              <h4 className="font-semibold text-foreground mb-2">About This Program</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {selectedService?.fullDescription}
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-muted rounded-xl p-4">
                <p className="text-xs text-muted-foreground mb-1">Duration</p>
                <p className="font-semibold text-foreground">{selectedService?.duration}</p>
              </div>
              <div className="bg-muted rounded-xl p-4">
                <p className="text-xs text-muted-foreground mb-1">Ideal For</p>
                <p className="font-semibold text-foreground text-sm">{selectedService?.ideal}</p>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-3">Key Topics Covered</h4>
              <ul className="grid sm:grid-cols-2 gap-2">
                {selectedService?.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-accent shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t">
              <Button variant="navy" size="lg" asChild className="flex-1">
                <Link to="/contact">Request This Training</Link>
              </Button>
              <Button variant="outline" size="lg" onClick={() => setSelectedService(null)}>
                Close
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
