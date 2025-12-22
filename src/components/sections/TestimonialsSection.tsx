import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import { useState, useEffect } from "react";

const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "Sales Head",
    company: "Leading BFSI Company",
    content: "The sales training program transformed our team's approach completely. We saw a 40% increase in conversions within the first quarter.",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    role: "HR Director",
    company: "IT Services Firm",
    content: "Grishma's leadership program helped our managers develop confidence and strategic thinking. Highly recommended for any organization.",
    rating: 5,
  },
  {
    name: "Amit Patel",
    role: "Business Development Manager",
    company: "Manufacturing Company",
    content: "The personal branding workshop was eye-opening. It helped me build a stronger professional presence and opened new career opportunities.",
    rating: 5,
  },
  {
    name: "Sneha Reddy",
    role: "Team Lead",
    company: "Fintech Startup",
    content: "The communication training was practical and immediately applicable. Our team collaboration has improved significantly.",
    rating: 5,
  },
];

export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="section-padding bg-background relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-secondary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="accent-line mx-auto mb-6" />
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real results from real professionals and organizations we've partnered with.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              variant="elevated"
              className={`group transition-all duration-500 ${
                index === activeIndex ? "ring-2 ring-secondary shadow-gold" : ""
              }`}
            >
              <CardContent className="p-8">
                {/* Quote icon */}
                <Quote className="w-10 h-10 text-secondary/30 mb-4" />

                {/* Content */}
                <p className="text-foreground leading-relaxed mb-6 text-lg">
                  "{testimonial.content}"
                </p>

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-secondary text-secondary" />
                  ))}
                </div>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                    <span className="text-primary-foreground font-semibold">
                      {testimonial.name.split(" ").map(n => n[0]).join("")}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}, {testimonial.company}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Dots indicator */}
        <div className="flex justify-center gap-2 mt-10">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === activeIndex
                  ? "bg-secondary w-8"
                  : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
