import { useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";

interface CalPopupProps {
  children: React.ReactNode;
  calLink?: string;
  className?: string;
  variant?: "default" | "navy" | "gold" | "hero" | "heroOutline" | "accent" | "outline" | "ghost";
  size?: "default" | "sm" | "lg" | "xl" | "icon";
}

export function CalPopup({ 
  children, 
  calLink = "gdproacademy/30min",
  className,
  variant = "navy",
  size = "lg"
}: CalPopupProps) {
  
  useEffect(() => {
    // Load Cal.com embed script if not already loaded
    if (!(window as any).Cal) {
      const script = document.createElement("script");
      script.src = "https://app.cal.com/embed/embed.js";
      script.async = true;
      document.head.appendChild(script);
      
      script.onload = () => {
        if ((window as any).Cal) {
          (window as any).Cal("init", { origin: "https://cal.com" });
          
          // Apply custom styling to match GD Pro branding
          (window as any).Cal("ui", {
            theme: "light",
            styles: {
              branding: {
                brandColor: "#1e3a5f" // Navy blue
              }
            }
          });
        }
      };
    }
  }, []);

  const handleClick = useCallback(() => {
    if ((window as any).Cal) {
      (window as any).Cal("modal", {
        calLink: calLink,
        config: {
          layout: "month_view",
          theme: "light"
        }
      });
    } else {
      // Fallback: open in new tab
      window.open(`https://cal.com/${calLink}`, "_blank");
    }
  }, [calLink]);

  return (
    <Button 
      variant={variant} 
      size={size} 
      className={className}
      onClick={handleClick}
    >
      {children}
    </Button>
  );
}
