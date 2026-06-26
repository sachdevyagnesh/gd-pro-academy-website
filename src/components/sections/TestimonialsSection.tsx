import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";
import { useRef } from "react";
const testimonials = [
  {
    name: "Corporate L&D Manager",
    role: "L&D Manager",
    company: "Leading BFSI Company",
    content: "Her workshops are high-energy, practical, and make learning fun. Our team's engagement improved significantly.",
  },
  {
    name: "Manufacturing Client",
    role: "HR Head",
    company: "Manufacturing Company",
    content: "Grishma's training boosted our sales team's confidence and results. We booked her again without hesitation!",
  },
  {
    name: "Retail Operations Head",
    role: "Operations Head",
    company: "Retail Chain",
    content: "Grishma connects instantly with participants and delivers real results. Our customer satisfaction scores went up 40%.",
  },
  {
    name: "Edu Institute CEO",
    role: "CEO",
    company: "Educational Institute",
    content: "Students walked out more confident and job-ready after Grishma's sessions! The transformation was visible.",
  },
  {
    name: "IT Company HR",
    role: "HR Director",
    company: "IT Services Firm",
    content: "Practical, engaging, and impactful – our employees loved her sessions! Communication improved across teams.",
  },
  {
    name: "BFSI Training Head",
    role: "Training Head",
    company: "Banking Institution",
    content: "Her sales mastery workshop helped our team close deals faster than ever! 40% increase in conversions.",
  },
  {
    name: "Priya Sharma",
    role: "Team Lead",
    company: "Fintech Startup",
    content: "The communication training was game-changing. I'm now more confident in client presentations.",
  },
  {
    name: "Rajesh Kumar",
    role: "Sales Manager",
    company: "Insurance Company",
    content: "Grishma's approach to sales training is unique. She makes complex concepts simple and actionable.",
  },
];


export function TestimonialsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section className="section-padding bg-background relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-secondary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="accent-line mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real results from real professionals and organizations we've partnered with.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              variant="elevated"
              className="group transition-all duration-300 hover:shadow-gold"
            >
              <CardContent className="p-6">
                {/* Quote icon */}
                <Quote className="w-8 h-8 text-secondary/30 mb-3" />

                {/* Content */}
                <p className="text-foreground leading-relaxed mb-4">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                    <span className="text-primary-foreground font-semibold text-sm">
                      {testimonial.name.split(" ").map(n => n[0]).join("").slice(0, 2)}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">{testimonial.name}</p>
                    <p className="text-xs text-muted-foreground">
                      {testimonial.role}, {testimonial.company}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
