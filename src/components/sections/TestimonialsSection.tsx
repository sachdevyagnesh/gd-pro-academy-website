import { useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Star, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { QRCodeCanvas } from "qrcode.react";

const REVIEW_URL = "https://g.page/r/CXk-zOAC4PmyEAE/review";

const testimonials = [
  {
    name: "Neha Gupta",
    content:
      "It was a great learning experience. The sessions were informative, engaging, and helped me improve my communication and professional skills. The mentor is very supportive and provides practical guidance. Highly recommended.",
  },
  {
    name: "Dish Tanna",
    content:
      "My experience was too good and sales tips was really helpful i am using that tips and it help me to get closure from my followup leads i wish that we will get more videos and suggestions so we can improve our skills in sales and I recommend to newbees those who want to start career in sales please get in touch with grishma mam and her team so u will get proper guidance and suggestions",
  },
  {
    name: "Sampat Singh",
    content: "I feel happy with your company",
  },
  {
    name: "Raina Sukhwal",
    content:
      "Amazing experience with GD Pro academy. It was very insightful talking to Grishma Mam. I found her session very helpful.",
  },
];

function GoogleG({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-label="Google" role="img">
      <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" />
      <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" />
      <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z" />
      <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" />
    </svg>
  );
}

interface Props {
  limit?: number;
  showReadAll?: boolean;
}

export function TestimonialsSection({ limit, showReadAll }: Props = {}) {
  const list = typeof limit === "number" ? testimonials.slice(0, limit) : testimonials;
  const qrRef = useRef<HTMLDivElement>(null);

  const downloadQR = () => {
    const canvas = qrRef.current?.querySelector("canvas");
    if (!canvas) return;
    const url = canvas.toDataURL("image/png");
    const a = document.createElement("a");
    a.href = url;
    a.download = "gd-pro-academy-google-review-qr.png";
    a.click();
  };

  return (
    <section className="section-padding bg-background relative overflow-hidden">
      <div className="absolute top-20 left-10 w-64 h-64 bg-secondary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-10">
          <div className="accent-line mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            What Our Clients Say
          </h2>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border shadow-sm">
            <GoogleG className="w-5 h-5" />
            <span className="font-bold text-foreground">5.0</span>
            <span className="flex items-center gap-0.5" aria-label="5 out of 5 stars">
              {[0, 1, 2, 3, 4].map((i) => (
                <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              ))}
            </span>
            <span className="text-sm text-muted-foreground">· 6 Google Reviews</span>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 max-w-5xl mx-auto items-stretch">
          {list.map((t, index) => (
            <Card
              key={index}
              variant="elevated"
              className="group transition-all duration-300 hover:shadow-gold h-full flex flex-col"
            >
              <CardContent className="p-6 flex flex-col h-full">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-1" aria-label="5 star rating">
                    {[0, 1, 2, 3, 4].map((i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <GoogleG className="w-5 h-5" />
                </div>
                <p className="text-foreground leading-relaxed mb-4 flex-1">
                  "{t.content}"
                </p>
                <div className="flex items-center gap-3 pt-3 border-t border-border">
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                    <span className="text-primary-foreground font-semibold text-sm">
                      {t.name.split(" ").map((n) => n[0]).join("").slice(0, 2)}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">{t.name}</p>
                    <p className="text-xs text-muted-foreground">Verified Google Review</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-8 max-w-3xl mx-auto">
          <div className="flex flex-col items-center gap-3">
            <Button asChild size="lg" className="bg-white text-foreground border border-border hover:bg-muted shadow-md">
              <a href={REVIEW_URL} target="_blank" rel="noopener noreferrer">
                <GoogleG className="w-5 h-5 mr-2" />
                Leave us a review
              </a>
            </Button>
          </div>
          <div className="flex flex-col items-center gap-2" ref={qrRef}>
            <div className="p-3 bg-white rounded-lg border border-border shadow-sm">
              <QRCodeCanvas
                value={REVIEW_URL}
                size={140}
                level="M"
                includeMargin={false}
              />
            </div>
            <button
              onClick={downloadQR}
              className="text-xs text-muted-foreground hover:text-foreground underline underline-offset-2"
              type="button"
            >
              Scan to leave a Google review · Download
            </button>
          </div>
        </div>

        {showReadAll && (
          <div className="text-center mt-10">
            <Button variant="navy" asChild>
              <Link to="/testimonials">
                Read All Success Stories
                <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
