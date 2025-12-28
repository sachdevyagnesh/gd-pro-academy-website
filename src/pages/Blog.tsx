import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { PenLine, Clock, ArrowRight } from "lucide-react";

const blogPosts = [
  {
    title: "5 Essential Sales Skills Every Professional Needs",
    excerpt: "Discover the key skills that separate top performers from the rest in today's competitive market.",
    date: "Coming Soon",
    category: "Sales Training",
  },
  {
    title: "How to Transition from Campus to Corporate",
    excerpt: "A comprehensive guide for fresh graduates entering the corporate world.",
    date: "Coming Soon",
    category: "Career Development",
  },
  {
    title: "The Power of Effective Communication in the Workplace",
    excerpt: "Learn how improving your communication skills can accelerate your career growth.",
    date: "Coming Soon",
    category: "Soft Skills",
  },
];

export default function Blog() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-20 hero-gradient">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                <PenLine className="w-4 h-4 text-secondary" />
                <span className="text-primary-foreground/90 text-sm font-medium">
                  Insights & Articles
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
                GD Pro Academy <span className="text-gradient-gold">Blog</span>
              </h1>
              <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed">
                Insights, tips, and strategies to help you excel in your career and business.
              </p>
            </div>
          </div>
        </section>

        {/* Blog Posts */}
        <section className="section-padding bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <div className="accent-line mx-auto mb-6" />
              <h2 className="text-3xl font-bold text-foreground mb-4">Latest Articles</h2>
              <p className="text-muted-foreground">
                Our blog is launching soon! Stay tuned for valuable insights.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {blogPosts.map((post, index) => (
                <Card key={index} variant="elevated" className="overflow-hidden">
                  <div className="aspect-video bg-muted flex items-center justify-center">
                    <PenLine className="w-12 h-12 text-muted-foreground/30" />
                  </div>
                  <CardContent className="p-6">
                    <span className="text-xs font-medium text-secondary">{post.category}</span>
                    <h3 className="text-lg font-bold text-foreground mt-2 mb-3">{post.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {post.date}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <p className="text-muted-foreground mb-4">
                Want to be notified when we publish new articles?
              </p>
              <Button variant="navy" asChild>
                <Link to="/contact">
                  Subscribe to Updates
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
