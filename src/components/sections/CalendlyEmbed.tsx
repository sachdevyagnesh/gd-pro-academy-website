import { useEffect } from "react";
import { Calendar } from "lucide-react";

interface CalendlyEmbedProps {
  url?: string;
}

export function CalendlyEmbed({ url = "https://calendly.com/gdproacademy" }: CalendlyEmbedProps) {
  useEffect(() => {
    // Load Calendly widget script
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script on unmount
      const existingScript = document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]');
      if (existingScript) {
        document.body.removeChild(existingScript);
      }
    };
  }, []);

  return (
    <section className="section-padding bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-6">
            <Calendar className="w-4 h-4 text-primary" />
            <span className="text-primary text-sm font-medium">Book a Consultation</span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Schedule a Free Discovery Call
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Let's discuss your training needs and explore how GD Pro Academy can help you achieve your goals. 
            Choose a convenient time for a 30-minute consultation.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-card rounded-2xl shadow-elevated overflow-hidden">
            {/* Calendly inline widget */}
            <div 
              className="calendly-inline-widget" 
              data-url={`${url}?hide_gdpr_banner=1&primary_color=1e3a5f`}
              style={{ minWidth: "320px", height: "700px" }}
            />
            
            {/* Fallback for when Calendly hasn't loaded */}
            <noscript>
              <div className="p-12 text-center">
                <p className="text-muted-foreground mb-4">
                  Please enable JavaScript to view our booking calendar.
                </p>
                <a 
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Or click here to book directly on Calendly
                </a>
              </div>
            </noscript>
          </div>

          <div className="mt-8 text-center">
            <p className="text-sm text-muted-foreground">
              Can't find a suitable time?{" "}
              <a href="mailto:info@gdproacademy.in" className="text-primary hover:underline">
                Email us
              </a>{" "}
              or call{" "}
              <a href="tel:+918356837052" className="text-primary hover:underline">
                +91 8356 837052
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}