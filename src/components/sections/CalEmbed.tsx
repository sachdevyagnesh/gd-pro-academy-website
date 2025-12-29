import { useEffect, useRef } from "react";
import { Calendar } from "lucide-react";

interface CalEmbedProps {
  calLink?: string;
}

export function CalEmbed({ calLink = "gdproacademy/consultation" }: CalEmbedProps) {
  const calInitialized = useRef(false);
  
  useEffect(() => {
    // Prevent double initialization
    if (calInitialized.current) return;
    
    // Clean up any existing Cal instances
    if ((window as any).Cal) {
      try {
        (window as any).Cal("destroy");
      } catch (e) {
        // Ignore destroy errors
      }
    }

    // Load Cal.com embed script
    const existingScript = document.querySelector('script[src="https://app.cal.com/embed/embed.js"]');
    
    if (existingScript) {
      // Script already exists, just initialize
      if ((window as any).Cal) {
        (window as any).Cal("init", { origin: "https://cal.com" });
        (window as any).Cal.ns = {};
        (window as any).Cal("inline", {
          elementOrSelector: "#cal-embed-container",
          calLink: calLink,
          layout: "month_view",
        });
        calInitialized.current = true;
      }
      return;
    }

    const script = document.createElement("script");
    script.src = "https://app.cal.com/embed/embed.js";
    script.async = true;
    document.head.appendChild(script);

    script.onload = () => {
      if ((window as any).Cal && !calInitialized.current) {
        (window as any).Cal("init", { origin: "https://cal.com" });
        (window as any).Cal("inline", {
          elementOrSelector: "#cal-embed-container",
          calLink: calLink,
          layout: "month_view",
        });
        calInitialized.current = true;
      }
    };

    return () => {
      calInitialized.current = false;
    };
  }, [calLink]);

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
            {/* Cal.com inline embed container */}
            <div 
              id="cal-embed-container"
              style={{ minWidth: "320px", height: "700px", overflow: "auto" }}
            />
            
            {/* Fallback */}
            <noscript>
              <div className="p-12 text-center">
                <p className="text-muted-foreground mb-4">
                  Please enable JavaScript to view our booking calendar.
                </p>
                <a 
                  href={`https://cal.com/${calLink}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Or click here to book directly on Cal.com
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
