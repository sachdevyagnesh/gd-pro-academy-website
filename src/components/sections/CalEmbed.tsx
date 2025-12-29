import { useEffect, useRef } from "react";
import { Calendar } from "lucide-react";

interface CalEmbedProps {
  calLink?: string;
}

export function CalEmbed({ calLink = "gdproacademy/30min" }: CalEmbedProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const initialized = useRef(false);
  
  useEffect(() => {
    if (initialized.current) return;
    
    const loadCal = () => {
      // Load Cal.com embed script
      const script = document.createElement("script");
      script.src = "https://app.cal.com/embed/embed.js";
      script.async = true;
      document.head.appendChild(script);
      
      script.onload = () => {
        if ((window as any).Cal && containerRef.current) {
          (window as any).Cal("init", { origin: "https://cal.com" });
          (window as any).Cal("inline", {
            elementOrSelector: containerRef.current,
            calLink: calLink,
            layout: "month_view",
            config: {
              theme: "light"
            }
          });
          
          // Apply custom styling
          (window as any).Cal("ui", {
            theme: "light",
            styles: {
              branding: {
                brandColor: "#1e3a5f"
              }
            }
          });
          
          initialized.current = true;
        }
      };
    };

    // Check if Cal is already loaded
    if ((window as any).Cal) {
      (window as any).Cal("init", { origin: "https://cal.com" });
      if (containerRef.current) {
        (window as any).Cal("inline", {
          elementOrSelector: containerRef.current,
          calLink: calLink,
          layout: "month_view",
          config: {
            theme: "light"
          }
        });
        initialized.current = true;
      }
    } else {
      loadCal();
    }

    return () => {
      initialized.current = false;
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
              ref={containerRef}
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
