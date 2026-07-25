import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Sparkles, ShieldCheck, Clock, ArrowRight, CheckCircle2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Helmet } from "react-helmet-async";

export default function CareerAudit() {
  const { toast } = useToast();
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    currentRole: "",
    challenge: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const message = `Current role: ${formData.currentRole}\nBiggest sales challenge: ${formData.challenge}`;
      const response = await fetch(
        `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/submit-lead`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            trainingType: "myself",
            enquiringFor: "myself",
            service: "Free Sales Career Audit",
            message,
          }),
        },
      );
      let result: { success?: boolean; error?: string } = {};
      try { result = await response.json(); } catch { /* ignore */ }
      if (!response.ok || !result.success) {
        throw new Error(result.error || `Request failed (${response.status})`);
      }
      setSubmitted(true);
      toast({
        title: "Request Received!",
        description: "We'll be in touch within 24 hours with your personalized report.",
      });
    } catch (error) {
      toast({
        title: "Couldn't submit your request",
        description:
          error instanceof Error && error.message
            ? `${error.message}. Please try again or WhatsApp us at +91 8356 837052.`
            : "Something went wrong. Please try again or WhatsApp us at +91 8356 837052.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen">
      <Header />
      <Helmet>
        <title>Book Free Sales Career Audit | GD Pro Academy</title>
        <meta name="description" content="Get a free personalized Sales Career Audit report from GD Pro Academy. Takes 2 minutes to request." />
      </Helmet>
      <main>
        <section data-hero className="pt-28 pb-12 relative overflow-hidden hero-gradient">
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
              <div className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm rounded-full px-4 py-2 mb-5">
                <Sparkles className="w-4 h-4 text-secondary" />
                <span className="text-primary-foreground/90 text-sm font-medium">Free · Personalized · No obligation</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-4">
                Book Your <span className="text-gradient-gold">Free Sales Career Audit</span>
              </h1>
              <p className="text-lg md:text-xl text-primary-foreground/85 leading-relaxed">
                Share a few details and we'll send you a tailored report highlighting where to focus next in your sales career.
              </p>
            </div>
          </div>
        </section>

        <section className="section-padding bg-muted">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              {submitted ? (
                <Card variant="elevated" className="animate-fade-in-up">
                  <CardContent className="p-10 text-center">
                    <div className="w-16 h-16 rounded-full bg-accent/15 flex items-center justify-center mx-auto mb-5">
                      <CheckCircle2 className="w-8 h-8 text-accent" />
                    </div>
                    <h2 className="text-2xl font-bold text-foreground mb-3">You're all set!</h2>
                    <p className="text-muted-foreground mb-6">
                      Thanks for booking your Free Sales Career Audit. We'll review your details and email your personalized report within 24 hours.
                    </p>
                    <Button variant="navy" size="lg" asChild>
                      <a href="/">Back to Home</a>
                    </Button>
                  </CardContent>
                </Card>
              ) : (
                <Card variant="elevated" className="animate-fade-in-up">
                  <CardContent className="p-6 md:p-10">
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-foreground mb-2">Full Name *</label>
                          <Input
                            required
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            placeholder="Your name"
                            maxLength={100}
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-foreground mb-2">Email *</label>
                          <Input
                            required
                            type="email"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            placeholder="your@email.com"
                            maxLength={255}
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">Phone *</label>
                        <Input
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+91 XXXXX XXXXX"
                          maxLength={20}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">Current Role *</label>
                        <Input
                          required
                          value={formData.currentRole}
                          onChange={(e) => setFormData({ ...formData, currentRole: e.target.value })}
                          placeholder="e.g. Sales Executive, Relationship Manager, Founder"
                          maxLength={150}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Biggest sales challenge right now *
                        </label>
                        <Textarea
                          required
                          value={formData.challenge}
                          onChange={(e) => setFormData({ ...formData, challenge: e.target.value })}
                          placeholder="e.g. Closing deals, handling objections, prospecting..."
                          className="min-h-[110px]"
                          maxLength={1000}
                        />
                      </div>

                      <div className="flex items-center justify-center gap-4 text-xs text-muted-foreground pt-2">
                        <span className="inline-flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" /> Takes 2 minutes</span>
                        <span className="w-px h-3 bg-border" />
                        <span className="inline-flex items-center gap-1.5"><ShieldCheck className="w-3.5 h-3.5" /> Free personalized report</span>
                      </div>

                      <Button type="submit" variant="navy" size="lg" disabled={isSubmitting} className="w-full group">
                        {isSubmitting ? "Sending..." : (
                          <>
                            Book My Free Career Audit
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                          </>
                        )}
                      </Button>
                      <p className="text-xs text-muted-foreground text-center">
                        We respect your privacy. Your details are only used to prepare your report.
                      </p>
                    </form>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
