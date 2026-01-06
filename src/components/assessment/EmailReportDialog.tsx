import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Mail, Loader2, CheckCircle } from "lucide-react";
import { toast } from "sonner";

interface EmailReportDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  userName: string;
  reportData: {
    testType: string;
    score: number;
    maxScore: string;
    result: string;
    recommendation: string;
    program: string;
  };
}

export function EmailReportDialog({
  open,
  onOpenChange,
  userName,
  reportData,
}: EmailReportDialogProps) {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    
    try {
      // Create mailto link with report details
      const subject = encodeURIComponent(`GD Pro Academy Assessment Report - ${userName}`);
      const body = encodeURIComponent(`
Hi ${userName},

Thank you for completing the ${reportData.testType} at GD Pro Academy!

YOUR RESULTS
============
Score: ${reportData.score} / ${reportData.maxScore}
Result: ${reportData.result}

OUR RECOMMENDATION
==================
${reportData.recommendation}

Recommended Program: ${reportData.program}

NEXT STEPS
==========
To enroll in your recommended program or schedule a free consultation:
- Email: info@gdproacademy.in
- Phone: +91 8356 837052
- Website: www.gdproacademy.in

We look forward to helping you achieve your professional goals!

Best regards,
The GD Pro Academy Team
      `.trim());

      // Open email client
      window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
      
      setIsSuccess(true);
      toast.success("Opening your email client...");
      
      setTimeout(() => {
        onOpenChange(false);
        setIsSuccess(false);
        setEmail("");
      }, 2000);
    } catch {
      toast.error("Failed to prepare email. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Mail className="w-5 h-5 text-primary" />
            Email Your Report
          </DialogTitle>
          <DialogDescription>
            Enter your email address to receive your assessment report.
          </DialogDescription>
        </DialogHeader>

        {isSuccess ? (
          <div className="py-8 text-center">
            <CheckCircle className="w-16 h-16 text-accent mx-auto mb-4" />
            <p className="text-lg font-medium text-foreground">
              Check your email client!
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              Your report is ready to send.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <DialogFooter className="sm:justify-between gap-2">
              <Button
                type="button"
                variant="outline"
                onClick={() => onOpenChange(false)}
              >
                Cancel
              </Button>
              <Button type="submit" variant="navy" disabled={isSubmitting || !email}>
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Preparing...
                  </>
                ) : (
                  <>
                    <Mail className="w-4 h-4 mr-2" />
                    Send Report
                  </>
                )}
              </Button>
            </DialogFooter>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}
