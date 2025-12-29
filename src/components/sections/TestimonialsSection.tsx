import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote, Play } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    name: "Corporate L&D Manager",
    role: "L&D Manager",
    company: "Leading BFSI Company",
    content: "Her workshops are high-energy, practical, and make learning fun. Our team's engagement improved significantly.",
    rating: 5,
  },
  {
    name: "Manufacturing Client",
    role: "HR Head",
    company: "Manufacturing Company",
    content: "Grishma's training boosted our sales team's confidence and results. We booked her again without hesitation!",
    rating: 5,
  },
  {
    name: "Retail Operations Head",
    role: "Operations Head",
    company: "Retail Chain",
    content: "Grishma connects instantly with participants and delivers real results. Our customer satisfaction scores went up 40%.",
    rating: 5,
  },
  {
    name: "Edu Institute CEO",
    role: "CEO",
    company: "Educational Institute",
    content: "Students walked out more confident and job-ready after Grishma's sessions! The transformation was visible.",
    rating: 5,
  },
  {
    name: "IT Company HR",
    role: "HR Director",
    company: "IT Services Firm",
    content: "Practical, engaging, and impactful – our employees loved her sessions! Communication improved across teams.",
    rating: 5,
  },
  {
    name: "BFSI Training Head",
    role: "Training Head",
    company: "Banking Institution",
    content: "Her sales mastery workshop helped our team close deals faster than ever! 40% increase in conversions.",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    role: "Team Lead",
    company: "Fintech Startup",
    content: "The communication training was game-changing. I'm now more confident in client presentations.",
    rating: 5,
  },
  {
    name: "Rajesh Kumar",
    role: "Sales Manager",
    company: "Insurance Company",
    content: "Grishma's approach to sales training is unique. She makes complex concepts simple and actionable.",
    rating: 5,
  },
];

const videoTestimonials = [
  {
    id: 1,
    name: "Sales Team Success Story",
    thumbnail: "/placeholder.svg",
    description: "How a BFSI team achieved 40% more conversions",
  },
  {
    id: 2,
    name: "Campus to Corporate Journey",
    thumbnail: "/placeholder.svg",
    description: "Fresh graduates share their transformation",
  },
];

export function TestimonialsSection() {
  const [isPaused, setIsPaused] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Duplicate testimonials for seamless infinite scroll
  const duplicatedTestimonials = [...testimonials, ...testimonials];

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

        {/* Auto-scrolling Testimonials */}
        <div className="relative overflow-hidden mb-16">
          <div 
            ref={scrollRef}
            className="flex gap-6 auto-scroll hover:[animation-play-state:paused]"
            style={{ width: 'max-content' }}
          >
            {duplicatedTestimonials.map((testimonial, index) => (
              <Card
                key={index}
                variant="elevated"
                className="w-[350px] shrink-0 group transition-all duration-300 hover:shadow-gold"
              >
                <CardContent className="p-6">
                  {/* Quote icon */}
                  <Quote className="w-8 h-8 text-secondary/30 mb-3" />

                  {/* Content */}
                  <p className="text-foreground leading-relaxed mb-4">
                    "{testimonial.content}"
                  </p>

                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-secondary text-secondary" />
                    ))}
                  </div>

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

        {/* Video Testimonials Section */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-foreground text-center mb-8">
            Video Testimonials
          </h3>
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {videoTestimonials.map((video) => (
              <Card key={video.id} variant="elevated" className="overflow-hidden group cursor-pointer">
                <div className="relative aspect-video bg-muted">
                  <img 
                    src={video.thumbnail} 
                    alt={video.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-primary/60 flex items-center justify-center group-hover:bg-primary/70 transition-colors">
                    <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Play className="w-7 h-7 text-secondary-foreground ml-1" />
                    </div>
                  </div>
                </div>
                <CardContent className="p-4">
                  <h4 className="font-semibold text-foreground">{video.name}</h4>
                  <p className="text-sm text-muted-foreground">{video.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <p className="text-center text-muted-foreground mt-6 text-sm">
            More video testimonials coming soon! Contact us to add your success story.
          </p>
        </div>
      </div>
    </section>
  );
}
