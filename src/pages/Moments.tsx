import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { GallerySection } from "@/components/sections/GallerySection";
import { TrainingMethodologyVideo } from "@/components/sections/TrainingMethodologyVideo";

export default function Moments() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <GallerySection />
        <TrainingMethodologyVideo />
      </main>
      <Footer />
    </div>
  );
}