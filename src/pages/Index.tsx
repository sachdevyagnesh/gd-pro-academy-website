import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { TrainingPathsSection } from "@/components/sections/TrainingPathsSection";
import { TrainingMethodologyVideo } from "@/components/sections/TrainingMethodologyVideo";
import { CertificationsSection } from "@/components/sections/CertificationsSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <TrainingPathsSection />
        <TrainingMethodologyVideo />
        <CertificationsSection />
        <TestimonialsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
