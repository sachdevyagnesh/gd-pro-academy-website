import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, ShoppingCart, Building2, Globe, Users } from "lucide-react";
import heroBg from "@/assets/about-hero.jpg";

const books = [
  {
    title: "The Art of Selling with Confidence",
    description: "A practical guide to mastering sales conversations, overcoming objections, and building lasting client relationships. Perfect for both new and experienced sales professionals.",
    price: "₹499",
  },
  {
    title: "Soft Skills That Sell",
    description: "Discover how communication, emotional intelligence, and interpersonal skills directly impact your professional success. Packed with exercises and real-world examples.",
    price: "₹399",
  },
  {
    title: "Corporate Training Playbook",
    description: "A comprehensive handbook for L&D professionals and HR leaders on designing, delivering, and measuring impactful training programs for modern organizations.",
    price: "₹599",
  },
];

const orderOptions = [
  {
    icon: Globe,
    title: "Order Online",
    description: "Available on Amazon, Flipkart, and other major online bookstores. Search for the book title or author name to find and purchase.",
  },
  {
    icon: BookOpen,
    title: "Direct from Author",
    description: "Get a signed copy directly from Grishma Sachdev. Contact us via email or WhatsApp to place your order with free shipping across India.",
  },
  {
    icon: Users,
    title: "Corporate Bulk Purchase",
    description: "Special discounts available for bulk orders of 10+ copies. Ideal for team training, workshops, and corporate gifting. Contact us for a custom quote.",
  },
];

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
                Explore published works on sales mastery, soft skills development, and corporate training — distilled from 14+ years of industry experience.
              </p>
            </div>
          </div>
        </section>

        {/* Book Grid */}
        <section className="section-padding bg-background">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {books.map((book) => (
                <Card key={book.title} variant="elevated" className="overflow-hidden card-hover">
                  {/* Placeholder Cover */}
                  <div className="aspect-[3/4] bg-gradient-to-br from-primary/10 via-muted to-secondary/10 flex flex-col items-center justify-center gap-4 p-8 border-b">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                      <BookOpen className="w-8 h-8 text-primary" />
                    </div>
                    <p className="text-xs text-muted-foreground text-center">Book Cover Placeholder</p>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold text-foreground mb-2">{book.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{book.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xl font-bold text-primary">{book.price}</span>
                      <Button variant="navy" size="sm" asChild>
                        <a href="#">
                          <ShoppingCart className="w-4 h-4 mr-2" />
                          Buy Now
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* How to Order */}
        <section className="section-padding bg-muted">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <div className="accent-line mx-auto mb-6" />
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                How to Order
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Choose the purchase option that works best for you
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {orderOptions.map((option) => (
                <Card key={option.title} className="text-center">
                  <CardContent className="p-8">
                    <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <option.icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-3">{option.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{option.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
