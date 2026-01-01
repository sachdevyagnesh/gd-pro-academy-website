import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Camera, Monitor, Users } from "lucide-react";
import heroBg from "@/assets/hero-bg-2.jpg";

const onlinePlaceholders = Array.from({ length: 10 }, (_, i) => ({
  id: `online-${i + 1}`,
  title: `Online Session ${i + 1}`,
}));

const offlinePlaceholders = Array.from({ length: 10 }, (_, i) => ({
  id: `offline-${i + 1}`,
  title: `Offline Session ${i + 1}`,
}));

export default function Gallery() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 relative overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${heroBg})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/85 to-primary/80" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                <Camera className="w-4 h-4 text-secondary" />
                <span className="text-primary-foreground/90 text-sm font-medium">
                  Session Gallery
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
                Our <span className="text-gradient-gold">Training Gallery</span>
              </h1>
              <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed">
                Explore moments from our impactful training sessions conducted online and offline across India
              </p>
            </div>
          </div>
        </section>

        {/* Online Sessions */}
        <section className="section-padding bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-4">
                <Monitor className="w-4 h-4 text-primary" />
                <span className="text-primary font-medium text-sm">Virtual Training</span>
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                Online Sessions
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Screenshots and moments from our virtual training sessions delivered globally
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-6xl mx-auto">
              {onlinePlaceholders.map((item) => (
                <Card 
                  key={item.id} 
                  className="group overflow-hidden hover:shadow-elevated transition-all cursor-pointer"
                >
                  <div className="aspect-square bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center relative">
                    <Monitor className="w-10 h-10 text-primary/30 group-hover:scale-110 transition-transform" />
                    <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors" />
                    <span className="absolute bottom-2 right-2 text-xs text-muted-foreground bg-background/80 px-2 py-1 rounded">
                      Placeholder
                    </span>
                  </div>
                  <CardContent className="p-3">
                    <p className="text-sm font-medium text-foreground text-center">{item.title}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Offline Sessions */}
        <section className="section-padding bg-muted">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-secondary/10 rounded-full px-4 py-2 mb-4">
                <Users className="w-4 h-4 text-secondary" />
                <span className="text-secondary font-medium text-sm">In-Person Training</span>
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                Offline Sessions
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Photos from our in-person training sessions conducted across India
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-6xl mx-auto">
              {offlinePlaceholders.map((item) => (
                <Card 
                  key={item.id} 
                  className="group overflow-hidden hover:shadow-elevated transition-all cursor-pointer"
                >
                  <div className="aspect-square bg-gradient-to-br from-secondary/10 to-accent/10 flex items-center justify-center relative">
                    <Users className="w-10 h-10 text-secondary/30 group-hover:scale-110 transition-transform" />
                    <div className="absolute inset-0 bg-secondary/0 group-hover:bg-secondary/10 transition-colors" />
                    <span className="absolute bottom-2 right-2 text-xs text-muted-foreground bg-background/80 px-2 py-1 rounded">
                      Placeholder
                    </span>
                  </div>
                  <CardContent className="p-3">
                    <p className="text-sm font-medium text-foreground text-center">{item.title}</p>
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
              Want to Experience Our Training?
            </h2>
            <p className="text-primary-foreground/80 mb-6 max-w-xl mx-auto">
              Join our next training session and be part of these transformative experiences.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
