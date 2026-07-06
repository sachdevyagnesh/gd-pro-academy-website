import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { 
  CheckCircle, 
  Download, 
  Mail, 
  ArrowRight, 
  Trophy, 
  Target, 
  TrendingUp,
  Gift,
  Phone
} from "lucide-react";
import { ScoreRange, discountConfig } from "@/config/questionnaire";
import { cn } from "@/lib/utils";

interface AssessmentResultProps {
  score: number;
  percentage: number;
  range: ScoreRange;
  userName?: string;
  testType: "corporate" | "individual" | "sales-confidence";
  onDownloadPDF?: () => void;
  onEmailPDF?: () => void;
  onTakeSalesTest?: () => void;
  showSalesTestOffer?: boolean;
  programOverride?: string;
}


export function AssessmentResult({
  score,
  percentage,
  range,
  userName,
  testType,
  onDownloadPDF,
  onEmailPDF,
  onTakeSalesTest,
  showSalesTestOffer = false,
  programOverride,
}: AssessmentResultProps) {

  const isSalesConfidenceTest = testType === "sales-confidence";
  const showDiscount = isSalesConfidenceTest && discountConfig.enabled;

  const getLevelIcon = () => {
    switch (range.level) {
      case "high":
        return <Trophy className="w-8 h-8 text-accent" />;
      case "medium":
        return <TrendingUp className="w-8 h-8 text-secondary" />;
      default:
        return <Target className="w-8 h-8 text-primary" />;
    }
  };

  const getLevelColor = () => {
    switch (range.level) {
      case "high":
        return "from-accent to-accent/80";
      case "medium":
        return "from-secondary to-secondary/80";
      default:
        return "from-primary to-primary/80";
    }
  };

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      {/* Score Card */}
      <Card className="overflow-hidden">
        <div className={`h-2 bg-gradient-to-r ${getLevelColor()}`} />
        <CardContent className="p-6 md:p-8">
          <div className="text-center mb-6">
            <div className="w-20 h-20 rounded-full bg-muted flex items-center justify-center mx-auto mb-4">
              {getLevelIcon()}
            </div>
            <p className="text-sm text-muted-foreground mb-2">Your Score</p>
            <div className="flex items-baseline justify-center gap-2">
              <span className="text-5xl font-bold text-foreground">
                {score}
              </span>
              <span className="text-xl text-muted-foreground">
                / {isSalesConfidenceTest ? "100%" : "10"}
              </span>
            </div>
          </div>

          <div className={cn(
            "text-center p-4 rounded-xl mb-6",
            range.level === "high" ? "bg-accent/10" : 
            range.level === "medium" ? "bg-secondary/10" : "bg-primary/10"
          )}>
            <h3 className="text-lg font-bold text-foreground mb-2">
              {range.title}
            </h3>
            <p className="text-sm text-muted-foreground">
              {range.description}
            </p>
          </div>

          {/* Recommendation */}
          <div className="bg-muted rounded-xl p-4 mb-6">
            <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-accent" />
              Our Recommendation
            </h4>
            <p className="text-sm text-muted-foreground mb-3">
              {range.recommendation}
            </p>
            <div className="flex items-center gap-2 text-sm">
              <span className="font-medium text-primary">Recommended Program:</span>
              <span className="text-foreground">{range.program}</span>
            </div>
          </div>

          {/* Discount Offer (for Sales Confidence Test) */}
          {showDiscount && (
            <Card className="bg-gradient-to-r from-accent to-secondary text-white mb-6">
              <CardContent className="p-4">
                <div className="flex items-center gap-3 mb-2">
                  <Gift className="w-6 h-6" />
                  <span className="font-bold">{discountConfig.message}</span>
                </div>
                <p className="text-sm text-white/90 mb-3">
                  Use code <span className="font-mono font-bold bg-white/20 px-2 py-1 rounded">{discountConfig.couponCode}</span> for {discountConfig.discountPercentage}% off your first program!
                </p>
                <p className="text-xs text-white/70">
                  Valid for {discountConfig.validDays} days
                </p>
              </CardContent>
            </Card>
          )}

          {/* PDF Actions */}
          <div className="grid sm:grid-cols-2 gap-3 mb-6">
            <Button variant="outline" onClick={onDownloadPDF} className="gap-2">
              <Download className="w-4 h-4" />
              Download PDF Report
            </Button>
            <Button variant="outline" onClick={onEmailPDF} className="gap-2">
              <Mail className="w-4 h-4" />
              Email PDF Report
            </Button>
          </div>

          {/* CTA Buttons */}
          <div className="space-y-3">
            <Button variant="navy" size="lg" asChild className="w-full gap-2">
              <Link to="/contact">
                Book Consultation
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>


            {/* Free Roleplay Session for very low scorers on sales confidence */}
            {isSalesConfidenceTest && percentage < discountConfig.threshold && (
              <Card className="bg-primary/5 border-primary/20">
                <CardContent className="p-4 text-center">
                  <h4 className="font-bold text-foreground mb-2">
                    Free Practical Analysis Session
                  </h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    Book a complimentary roleplay session with our lead trainer to experience our training approach firsthand.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-2 justify-center">
                    <Button variant="navy" size="sm" asChild>
                      <a href="https://wa.me/918356837052?text=Hi, I'd like to book a free roleplay session">
                        <Phone className="w-4 h-4 mr-2" />
                        Book via WhatsApp
                      </a>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                      <Link to="/contact">Book via Form</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
