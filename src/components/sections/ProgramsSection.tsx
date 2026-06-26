import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ArrowRight, Clock, Award, Users, TrendingUp, MessageSquare, Target, Briefcase } from "lucide-react";

const corporatePrograms = [
  {
    icon: TrendingUp,
    title: "Sales Excellence Training",
    description: "Boost conversions with modern selling strategies and objection handling.",
    features: ["Rapport building", "Closing techniques", "Negotiation", "Pipeline"],
    duration: "2 Days",
    price: "₹18,000",
    popular: true,
  },
  {
    icon: MessageSquare,
    title: "Soft Skills Development",
    description: "Communication, time management, and customer service excellence.",
    features: ["Communication", "Email etiquette", "Problem-solving", "Teamwork"],
    duration: "2 Days",
    price: "₹15,000",
    popular: false,
  },
  {
    icon: Users,
    title: "Campus to Corporate",
    description: "Prepare fresh graduates for the corporate world.",
    features: ["Professional etiquette", "Interview prep", "Workplace skills", "Resume"],
    duration: "1-2 Days",
    price: "₹12,000",
    popular: false,
  },
];

const individualPrograms = [
  {
    icon: MessageSquare,
    title: "Communication Excellence",
    description: "Master professional communication and confident speaking.",
    duration: "4 Hours",
    price: "₹8,000",
    type: "1-on-1",
  },
  {
    icon: TrendingUp,
    title: "Sales Skills Coaching",
    description: "Personal coaching to enhance your sales abilities.",
    duration: "6 Hours",
    price: "₹12,000",
    type: "1-on-1",
  },
  {
    icon: Target,
    title: "Career Advancement",
    description: "Strategic career planning and skill development.",
    duration: "8 Hours",
    price: "₹15,000",
    type: "1-on-1",
  },
];

export function ProgramsSection() {
  return (
    <section className="section-padding bg-muted relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 opacity-50">
        <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-background to-transparent" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="accent-line mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Our Training Programs
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive programs designed to deliver measurable results for teams and individuals.
          </p>
        </div>

        {/* Corporate Programs */}
        <div className="mb-20">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-bold text-foreground">Corporate Training</h3>
            <Button variant="ghost" asChild className="group">
              <Link to="/corporate-training">
                View All
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {corporatePrograms.map((program) => (
              <Card key={program.title} variant="program" className="relative">
                {program.popular && (
                  <div className="absolute -top-3 left-6 bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-xs font-semibold">
                    Most Popular
                  </div>
                )}
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <program.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{program.title}</CardTitle>
                  <CardDescription className="text-base">{program.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {program.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {program.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <Award className="w-4 h-4" />
                      Certificate
                    </span>
                  </div>
                  <div className="flex items-center justify-end">
                    <Button variant="navy" size="sm" asChild>
                      <Link to="/contact">Enquire</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Individual Programs */}
        <div>
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-bold text-foreground">Individual Training</h3>
            <Button variant="ghost" asChild className="group">
              <Link to="/individual-training">
                View All
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {individualPrograms.map((program) => (
              <Card key={program.title} variant="program">
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center mb-4">
                    <program.icon className="w-6 h-6 text-accent" />
                  </div>
                  <CardTitle className="text-xl">{program.title}</CardTitle>
                  <CardDescription className="text-base">{program.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {program.duration}
                    </span>
                    <span className="bg-accent/10 text-accent px-2 py-0.5 rounded-full text-xs font-medium">
                      {program.type}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-foreground">{program.price}</span>
                    <Button variant="accent" size="sm" asChild>
                      <Link to="/contact">Book Session</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
