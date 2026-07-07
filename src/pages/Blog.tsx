import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { PenLine, Clock, ArrowRight, Calendar } from "lucide-react";
import { blogPostsData } from "./BlogPost";
import heroBg from "@/assets/hero-bg-3.jpg";
import featuredImg from "@/assets/blog-featured-sales.jpg";

import { Helmet } from "react-helmet-async";
export default function Blog() {
  const featuredPost = blogPostsData.find(p => p.featured);
  const regularPosts = blogPostsData.filter(p => !p.featured);

  return (
    <div className="min-h-screen">
      <Header />
        <Helmet>
          <title>Sales Training Blog & Career Insights | GD Pro Academy</title>
          <meta name="description" content="Practical articles on sales skills, communication, career growth, and leadership from India's sales career growth academy." />
          <meta property="og:title" content="Sales Training Blog & Career Insights | GD Pro Academy" />
          <meta property="og:description" content="Practical articles on sales skills, communication, career growth, and leadership from India's sales career growth academy." />
        </Helmet>
      <main>
        {/* Hero */}
        <section data-hero className="pt-32 pb-20 relative overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${heroBg})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/85 via-primary/80 to-primary/75" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                <PenLine className="w-4 h-4 text-secondary" />
                <span className="text-primary-foreground/90 text-sm font-medium">
                  Insights & Articles
                </span>
              </div>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
                GD Pro Academy <span className="text-gradient-gold">Blog</span>
              </h1>
              <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed">
                Insights, tips, and strategies to help you excel in your career and business.
              </p>
            </div>
          </div>
        </section>

        {/* Featured Post */}
        {featuredPost && (
          <section className="py-12 bg-background relative -mt-10 z-10">
            <div className="container mx-auto px-4">
              <Card variant="elevated" className="max-w-4xl mx-auto overflow-hidden">
                <div className="grid md:grid-cols-2">
                  <div className="relative md:aspect-auto aspect-video overflow-hidden">
                    <img
                      src={featuredImg}
                      alt={featuredPost.title}
                      loading="lazy"
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <span className="absolute top-4 left-4 bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm font-medium">
                      Featured
                    </span>
                  </div>
                  <CardContent className="p-8 flex flex-col justify-center">
                    <span className="text-xs font-medium text-secondary mb-2">{featuredPost.category}</span>
                    <h2 className="text-2xl font-bold text-foreground mb-3">{featuredPost.title}</h2>
                    <p className="text-muted-foreground mb-4">{featuredPost.excerpt}</p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {featuredPost.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {featuredPost.readTime}
                      </span>
                    </div>
                    <Button variant="navy" className="self-start" asChild>
                      <Link to={`/blog/${featuredPost.slug}`}>
                        Read Article
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </div>
              </Card>
            </div>
          </section>
        )}

        {/* Blog Posts Grid */}
        <section className="section-padding bg-muted">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <div className="accent-line mx-auto mb-6" />
              <h2 className="font-display text-3xl font-bold text-foreground mb-4">Latest Articles</h2>
              <p className="text-muted-foreground">
                Practical insights from 14+ years of training experience
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {regularPosts.map((post) => (
                <Card key={post.slug} variant="elevated" className="overflow-hidden group hover:shadow-gold transition-shadow">
                  <div className="aspect-video bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center relative overflow-hidden">
                    <PenLine className="w-12 h-12 text-primary/30 group-hover:scale-110 transition-transform" />
                    <div className="absolute top-4 left-4">
                      <span className="bg-secondary text-secondary-foreground px-2 py-1 rounded text-xs font-medium">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{post.excerpt}</p>
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <div className="flex items-center gap-3">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {post.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {post.readTime}
                        </span>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm" className="w-full mt-4 group" asChild>
                      <Link to={`/blog/${post.slug}`}>
                        Read More
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Newsletter CTA */}
            <Card className="max-w-2xl mx-auto mt-16 bg-primary text-primary-foreground">
              <CardContent className="p-8 text-center">
                <h3 className="font-display text-2xl font-bold mb-3">Stay Updated</h3>
                <p className="text-primary-foreground/80 mb-6">
                  Get notified when we publish new articles and training tips.
                </p>
                <Button variant="hero" size="lg" asChild>
                  <Link to="/contact">
                    Subscribe to Updates
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
