import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CalEmbed } from "@/components/sections/CalEmbed";

export default function BookConsultation() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <CalEmbed />
      </main>
      <Footer />
    </div>
  );
}
