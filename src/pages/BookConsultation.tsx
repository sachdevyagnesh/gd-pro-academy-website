import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CalendlyEmbed } from "@/components/sections/CalendlyEmbed";

export default function BookConsultation() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <CalendlyEmbed />
      </main>
      <Footer />
    </div>
  );
}
