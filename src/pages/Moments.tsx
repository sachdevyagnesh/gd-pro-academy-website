import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Quote, Star } from "lucide-react";
import heroBg from "@/assets/hero-bg-3.jpg";


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
    name: "Team Lead, Fintech Startup",
    role: "Team Lead",
    company: "Fintech Startup",
    content: "The communication training was game-changing. I'm now more confident in client presentations.",
  },
  {
    name: "Sales Manager, Insurance Company",
    role: "Sales Manager",
    company: "Insurance Company",
    content: "Grishma's approach to sales training is unique. She makes complex concepts simple and actionable.",
  },
];




export default function Moments() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section data-hero className="pt-32 pb-20 relative overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${heroBg})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/85 to-primary/80" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                <Star className="w-4 h-4 text-secondary" />
                <span className="text-primary-foreground/90 text-sm font-medium">
                  Client Success Stories
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
                What Our <span className="text-gradient-gold">Clients Say</span>
              </h1>
              <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed">
                Real feedback from professionals and organizations who have experienced our transformative training programs
              </p>
            </div>
          </div>
        </section>

        {/* Testimonials Grid */}
        <section className="section-padding bg-background">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {testimonials.map((t) => (
                <Card key={t.name} className="h-full hover:shadow-elevated transition-shadow">
                  <CardContent className="p-6 flex flex-col h-full">
                    <Quote className="w-8 h-8 text-secondary mb-4" />
                    <p className="text-foreground leading-relaxed mb-6 flex-1">
                      "{t.content}"
                    </p>
                    <div>
                      <p className="font-semibold text-foreground">{t.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {t.role} · {t.company}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>


        {/* CTA */}
        <section className="py-12 bg-primary">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
              Ready to Join Our Success Stories?
            </h2>
            <p className="text-primary-foreground/80 mb-6 max-w-xl mx-auto">
              Experience the training that has transformed thousands of professionals across India.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
