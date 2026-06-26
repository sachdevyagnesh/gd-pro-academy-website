import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Link } from "react-router-dom";
import { CheckCircle, Clock, Users, Award, Target, BookOpen, LucideIcon, ArrowRight } from "lucide-react";
import { useState } from "react";

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
    <>
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

          {/* Learn More Button - Opens Dialog */}
          <Button 
            variant="ghost" 
            size="sm" 
            className="w-full justify-between text-primary hover:text-primary/80 hover:bg-primary/5 mb-6"
            onClick={() => setIsOpen(true)}
          >
            <span className="flex items-center gap-2">
              <BookOpen className="w-4 h-4" />
              Learn More
            </span>
            <ArrowRight className="w-4 h-4" />
          </Button>

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
            <div className="flex items-center justify-end">
              <Button variant={ctaVariant} asChild>
                <Link to={ctaLink}>{ctaLabel}</Link>
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Course Detail Dialog */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <div className="flex items-center gap-4 mb-2">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <Icon className="w-6 h-6 text-primary" />
              </div>
              <DialogTitle className="text-2xl">{title}</DialogTitle>
            </div>
            <DialogDescription className="text-base">
              {description}
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-6 mt-4">
            {/* About This Program */}
            <div>
              <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-primary" />
                About This Program
              </h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {description} This program is designed to provide practical, hands-on learning with real-world applications. 
                Participants will gain valuable skills through interactive sessions, case studies, and expert guidance from experienced trainers.
              </p>
            </div>

            {/* Quick Info Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-muted rounded-xl p-4">
                <p className="text-xs text-muted-foreground mb-1">Duration</p>
                <p className="font-semibold text-foreground">{duration}</p>
              </div>
              <div className="bg-muted rounded-xl p-4">
                <p className="text-xs text-muted-foreground mb-1">Price</p>
                <p className="font-semibold text-foreground">{price}</p>
              </div>
              {participants && (
                <div className="bg-muted rounded-xl p-4">
                  <p className="text-xs text-muted-foreground mb-1">Participants</p>
                  <p className="font-semibold text-foreground text-sm">{participants}</p>
                </div>
              )}
              {type && (
                <div className="bg-muted rounded-xl p-4">
                  <p className="text-xs text-muted-foreground mb-1">Format</p>
                  <p className="font-semibold text-foreground text-sm">{type}</p>
                </div>
              )}
            </div>

            {/* Target Audience */}
            <div>
              <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                <Target className="w-4 h-4 text-primary" />
                Who Should Attend
              </h4>
              <p className="text-muted-foreground text-sm">
                {targetAudience || "Professionals looking to enhance their skills, teams seeking performance improvement, and individuals committed to professional growth."}
              </p>
            </div>

            {/* Key Topics / Features */}
            <div>
              <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-primary" />
                Key Topics Covered
              </h4>
              <ul className="grid sm:grid-cols-2 gap-2">
                {features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-accent shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Learning Outcomes */}
            {learningOutcomes.length > 0 && (
              <div>
                <h4 className="font-semibold text-foreground mb-3">What You'll Learn</h4>
                <ul className="space-y-2">
                  {learningOutcomes.map((outcome, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                      {outcome}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Delivery Method */}
            {deliveryMethod && (
              <div>
                <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                  <Clock className="w-4 h-4 text-primary" />
                  Delivery Format
                </h4>
                <p className="text-muted-foreground text-sm">{deliveryMethod}</p>
              </div>
            )}

            {/* Certification */}
            {certification && (
              <div>
                <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                  <Award className="w-4 h-4 text-primary" />
                  Certification
                </h4>
                <p className="text-muted-foreground text-sm">{certification}</p>
              </div>
            )}

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t">
              <Button variant="navy" size="lg" asChild className="flex-1">
                <Link to="/contact">Book Free Consultation</Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="flex-1">
                <Link to="/contact">Send Inquiry</Link>
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
