import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Phone } from "lucide-react";
import { CalPopup } from "@/components/common/CalPopup";

export function CTASection() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 hero-gradient" />
      
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 right-20 w-64 h-64 bg-secondary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-20 w-80 h-80 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="cta-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#cta-grid)" className="text-primary-foreground" />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
            Ready to Take Your Team to the{" "}
            <span className="text-gradient-gold">Next Level?</span>
          </h2>
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto">
            Book a free consultation call to discuss your training needs and discover how we can help your organization thrive.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <CalPopup variant="hero" size="xl" className="group">
              <Calendar className="w-5 h-5" />
              Book Free Consultation
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </CalPopup>
            <Button variant="heroOutline" size="xl" asChild>
              <a href="tel:+918356837052">
                <Phone className="w-5 h-5" />
                Call Now
              </a>
            </Button>
          </div>

          <p className="text-primary-foreground/60 text-sm mt-8">
            Free 30-minute consultation • No obligation • Get personalized recommendations
          </p>
        </div>
      </div>
    </section>
  );
}
