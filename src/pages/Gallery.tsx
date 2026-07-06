import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Camera } from "lucide-react";
import heroBg from "@/assets/hero-bg-2.jpg";

export default function Gallery() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section data-hero className="pt-32 pb-20 relative overflow-hidden">
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
                Photos from our online and offline training sessions will be published here shortly.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
