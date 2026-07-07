import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { TrustedLogosSection } from "@/components/sections/TrustedLogosSection";
import { FounderQuoteSection } from "@/components/sections/FounderQuoteSection";
import { TrainingPathsSection } from "@/components/sections/TrainingPathsSection";
import { TrainingMethodologyVideo } from "@/components/sections/TrainingMethodologyVideo";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <TrustedLogosSection />
        <FounderQuoteSection />
        <div className="bg-background pt-10 -mb-4 text-center">
          <span className="inline-block text-xs md:text-sm font-semibold tracking-widest uppercase" style={{ color: "#D4A017" }}>
            360° Sales Career Transformation
          </span>
        </div>
        <TrainingPathsSection />
        <TrainingMethodologyVideo />
        <TestimonialsSection limit={4} showReadAll />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
