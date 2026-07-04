import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ShoppingCart, MessageCircle } from "lucide-react";
import heroBg from "@/assets/about-hero.jpg";
import bookCover from "@/assets/book-cover-more-than-sales.jpg.asset.json";

const AMAZON_URL = "https://www.amazon.in/dp/B0DXXXXXXX";

export default function Books() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-28 pb-16 relative overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${heroBg})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/85 to-primary/80" />

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
                Books by <span className="text-gradient-gold">Grishma Sachdev</span>
              </h1>
              <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed">
                A candid, practical read distilled from 12+ years of building a career in sales, training, and self-belief.
              </p>
            </div>
          </div>
        </section>

        {/* Featured Book */}
        <section className="section-padding bg-background">
          <div className="container mx-auto px-4">
            <Card variant="elevated" className="overflow-hidden max-w-5xl mx-auto">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="bg-muted flex items-center justify-center p-8">
                  <img
                    src={bookCover.url}
                    alt="More Than Sales: The Profession That Built Me — book cover"
                    className="w-full max-w-sm h-auto object-contain rounded-lg shadow-elevated"
                    loading="eager"
                  />
                </div>
                <CardContent className="p-8 md:p-10 flex flex-col justify-center">
                  <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-3">
                    More Than Sales: The Profession That Built Me
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    A personal, honest look at what a career in sales really teaches you — resilience,
                    communication, and the confidence to grow. Written for professionals stepping into
                    sales, and for anyone who wants to build a career they're proud of.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button variant="navy" size="lg" asChild>
                      <a href={AMAZON_URL} target="_blank" rel="noopener noreferrer">
                        <ShoppingCart className="w-4 h-4 mr-2" />
                        Buy on Amazon Kindle
                      </a>
                    </Button>
                    <Button variant="outline" size="lg" asChild>
                      <a
                        href="https://wa.me/918356837052?text=Hi%2C%20I%27d%20like%20to%20order%20a%20signed%20copy%20of%20More%20Than%20Sales."
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <MessageCircle className="w-4 h-4 mr-2" />
                        Get a signed copy — contact us directly
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </div>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
