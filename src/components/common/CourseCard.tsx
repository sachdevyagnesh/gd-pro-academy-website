import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Link } from "react-router-dom";
import { CheckCircle, Clock, Users, ChevronDown, ChevronUp, Award, Target, BookOpen, LucideIcon } from "lucide-react";

interface CourseCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  duration: string;
  price: string;
  participants?: string;
  type?: string;
  popular?: boolean;
  // Learn More content
  targetAudience?: string;
  learningOutcomes?: string[];
  deliveryMethod?: string;
  prerequisites?: string;
  certification?: string;
  // CTA
  ctaLabel?: string;
  ctaLink?: string;
  ctaVariant?: "navy" | "gold" | "accent" | "default";
}

export function CourseCard({
  icon: Icon,
  title,
  description,
  features,
  duration,
  price,
  participants,
  type,
  popular = false,
  targetAudience,
  learningOutcomes = [],
  deliveryMethod,
  prerequisites,
  certification,
  ctaLabel = "Enroll Now",
  ctaLink = "/contact",
  ctaVariant = "navy",
}: CourseCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Card variant="program" className="relative flex flex-col h-full">
      {popular && (
        <div className="absolute -top-3 left-6 bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-xs font-semibold z-10">
          Most Popular
        </div>
      )}
      <CardHeader>
        <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
          <Icon className="w-7 h-7 text-primary" />
        </div>
        <CardTitle className="text-xl md:text-2xl">{title}</CardTitle>
        <CardDescription className="text-base">{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col">
        {/* Features */}
        <ul className="space-y-3 mb-6 flex-1">
          {features.map((feature) => (
            <li key={feature} className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
              <span className="text-muted-foreground">{feature}</span>
            </li>
          ))}
        </ul>

        {/* Learn More Collapsible - Dynamic content based on title/description */}
        <Collapsible open={isOpen} onOpenChange={setIsOpen} className="mb-6">
          <CollapsibleTrigger asChild>
            <Button 
              variant="ghost" 
              size="sm" 
              className="w-full justify-between text-primary hover:text-primary/80 hover:bg-primary/5"
            >
              <span className="flex items-center gap-2">
                <BookOpen className="w-4 h-4" />
                Learn More
              </span>
              {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </Button>
          </CollapsibleTrigger>
          <CollapsibleContent className="animate-accordion-down">
            <div className="mt-4 p-4 bg-muted/50 rounded-lg space-y-4 text-sm">
              {/* Dynamic About Section */}
              <div>
                <div className="flex items-center gap-2 font-semibold text-foreground mb-2">
                  <BookOpen className="w-4 h-4 text-primary" />
                  About This Program
                </div>
                <p className="text-muted-foreground pl-6">
                  {description} This program is designed to provide practical, hands-on learning with real-world applications. 
                  Participants will gain valuable skills through interactive sessions, case studies, and expert guidance from experienced trainers.
                </p>
              </div>

              {/* Target Audience */}
              <div>
                <div className="flex items-center gap-2 font-semibold text-foreground mb-1">
                  <Target className="w-4 h-4 text-primary" />
                  Who Should Attend
                </div>
                <p className="text-muted-foreground pl-6">
                  {targetAudience || "Professionals looking to enhance their skills, teams seeking performance improvement, and individuals committed to professional growth."}
                </p>
              </div>
              
              {/* Key Takeaways - Auto-generated from features */}
              <div>
                <div className="flex items-center gap-2 font-semibold text-foreground mb-2">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  Key Takeaways
                </div>
                <ul className="pl-6 space-y-1">
                  {(learningOutcomes.length > 0 ? learningOutcomes : features.slice(0, 4)).map((item, idx) => (
                    <li key={idx} className="text-muted-foreground flex items-start gap-2">
                      <span className="text-accent">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Delivery Method */}
              <div>
                <div className="flex items-center gap-2 font-semibold text-foreground mb-1">
                  <Clock className="w-4 h-4 text-primary" />
                  Delivery Format
                </div>
                <p className="text-muted-foreground pl-6">
                  {deliveryMethod || `${duration} of intensive training with a mix of theory and practical exercises. Available in both in-person and virtual formats.`}
                </p>
              </div>

              {certification && (
                <div>
                  <div className="flex items-center gap-2 font-semibold text-foreground mb-1">
                    <Award className="w-4 h-4 text-primary" />
                    Certification
                  </div>
                  <p className="text-muted-foreground pl-6">{certification}</p>
                </div>
              )}

              {/* CTA within Learn More */}
              <div className="pt-4 border-t border-border/50">
                <p className="text-foreground font-medium mb-3">
                  Interested in this program?
                </p>
                <div className="flex flex-wrap gap-2">
                  <Button variant="navy" size="sm" asChild>
                    <Link to="/book-consultation">Schedule a Call</Link>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <Link to="/contact">Send Inquiry</Link>
                  </Button>
                </div>
              </div>
            </div>
          </CollapsibleContent>
        </Collapsible>

        {/* Footer */}
        <div className="space-y-4 pt-6 border-t">
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              {duration}
            </span>
            {participants && (
              <span className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                {participants}
              </span>
            )}
            {type && (
              <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-medium">
                {type}
              </span>
            )}
          </div>
          <div className="flex items-center justify-between">
            <div>
              <span className="text-sm text-muted-foreground">Starting at</span>
              <p className="text-2xl font-bold text-foreground">{price}</p>
            </div>
            <Button variant={ctaVariant} asChild>
              <Link to={ctaLink}>{ctaLabel}</Link>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
