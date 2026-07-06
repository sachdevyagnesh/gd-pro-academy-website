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
        <TrainingPathsSection />
        <TrainingMethodologyVideo />
        <TestimonialsSection limit={4} showReadAll />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
