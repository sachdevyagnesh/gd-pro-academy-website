import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

type NavLink =
  | { name: string; href: string }
  | {
      name: string;
      dropdown: true;
      href: string;
      items: { name: string; href: string }[];
    };

const navLinks: NavLink[] = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  {
    name: "Services",
    href: "/services",
    dropdown: true,
    items: [
      { name: "All Services", href: "/services" },
      { name: "For Corporates", href: "/corporate-training" },
      { name: "For Professionals", href: "/individual-training" },
    ],
  },
  { name: "Testimonials", href: "/testimonials" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Books", href: "/books" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [overHero, setOverHero] = useState(false);
  const [hasHero, setHasHero] = useState(false);
  const location = useLocation();
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  // Detect hero on current route via IntersectionObserver (no scroll listeners)
  useEffect(() => {
    // Wait a tick for the new route's DOM to render
    const timer = setTimeout(() => {
      const hero = document.querySelector<HTMLElement>("[data-hero]");
      if (observerRef.current) {
        observerRef.current.disconnect();
        observerRef.current = null;
      }
      if (!hero) {
        setHasHero(false);
        setOverHero(false);
        return;
      }
      setHasHero(true);
      setOverHero(true);
      const obs = new IntersectionObserver(
        ([entry]) => setOverHero(entry.isIntersecting),
        { rootMargin: "-64px 0px 0px 0px", threshold: 0 },
      );
      obs.observe(hero);
      observerRef.current = obs;
    }, 50);
    return () => {
      clearTimeout(timer);
      observerRef.current?.disconnect();
      observerRef.current = null;
    };
  }, [location.pathname]);

  // Prevent background scroll when the mobile menu is open
  useEffect(() => {
    if (!isMounted) return;
    const prevBodyOverflow = document.body.style.overflow;
    const prevHtmlOverflow = document.documentElement.style.overflow;
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    } else {
      document.body.style.overflow = prevBodyOverflow || "";
      document.documentElement.style.overflow = prevHtmlOverflow || "";
    }
    return () => {
      document.body.style.overflow = prevBodyOverflow || "";
      document.documentElement.style.overflow = prevHtmlOverflow || "";
    };
  }, [isMobileMenuOpen, isMounted]);

  const isActive = (href: string) => location.pathname === href;

  const transparent = hasHero && overHero;
  const headerStyle: React.CSSProperties = transparent
    ? {
        backgroundColor: "rgba(26,42,94,0.75)",
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)",
      }
    : { backgroundColor: "#1A2A5E" };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 py-3 transition-colors duration-300"
      style={headerStyle}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Wordmark */}
          <Link to="/" className="flex flex-col items-start group flex-shrink-0 leading-none">
            <span className="font-display font-bold text-white text-xl md:text-2xl lg:text-3xl tracking-tight">
              GD Pro Academy
            </span>
            <span
              className="hidden sm:block"
              style={{
                color: "#D4A017",
                fontSize: "11px",
                fontWeight: 300,
                letterSpacing: "0.5px",
                marginTop: "2px",
              }}
            >
              India's Sales Career Growth Academy
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center justify-center flex-1 gap-1 mx-8">
            {navLinks.map((link) => {
              if ("dropdown" in link) {
                const active = link.items.some((i) => isActive(i.href));
                return (
                  <DropdownMenu key={link.name}>
                    <DropdownMenuTrigger
                      className={cn(
                        "flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium transition-colors outline-none",
                        active
                          ? "bg-white/20 text-white"
                          : "text-white/90 hover:text-white hover:bg-white/10"
                      )}
                    >
                      {link.name}
                      <ChevronDown className="w-4 h-4" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="center" className="min-w-[200px]">
                      {link.items.map((item) => (
                        <DropdownMenuItem key={item.href} asChild>
                          <Link to={item.href}>{item.name}</Link>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                );
              }
              return (
                <Link
                  key={link.name}
                  to={link.href}
                  className={cn(
                    "px-4 py-2 rounded-lg text-sm font-medium transition-colors",
                    isActive(link.href)
                      ? "bg-white/20 text-white"
                      : "text-white/90 hover:text-white hover:bg-white/10"
                  )}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+918356837052"
              className="p-2 rounded-full text-white hover:bg-white/10 transition-colors"
              aria-label="Call +91 8356 837052"
            >
              <Phone className="w-5 h-5" />
            </a>
            <Button variant="hero" size="default" asChild>
              <Link to="/contact">Get in Touch</Link>
            </Button>
          </div>

          <button
            className="lg:hidden p-2 rounded-lg"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-white" />
            ) : (
              <Menu className="w-6 h-6 text-white" />
            )}
          </button>
        </div>
      </div>

      {isMounted &&
        isMobileMenuOpen &&
        createPortal(
          <>
            <div
              className="fixed inset-0 bg-black/50 z-[60] lg:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <div
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation"
              className="fixed top-0 right-0 w-full max-w-xs h-[100dvh] bg-background shadow-2xl z-[70] lg:hidden overflow-y-auto animate-fade-in"
            >
              <div className="flex items-center justify-between p-4 border-b bg-background">
                <span className="font-display font-bold text-lg" style={{ color: "#1A2A5E" }}>
                  GD Pro Academy
                </span>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 rounded-lg hover:bg-muted transition-colors"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5 text-foreground" />
                </button>
              </div>
              <nav className="p-4 space-y-1 bg-background">
                {navLinks.map((link) => {
                  if ("dropdown" in link) {
                    return (
                      <div key={link.name} className="space-y-1">
                        <div className="px-4 pt-2 pb-1 text-xs uppercase tracking-wide text-muted-foreground">
                          {link.name}
                        </div>
                        {link.items.map((item) => (
                          <Link
                            key={item.href}
                            to={item.href}
                            className={cn(
                              "block px-4 py-2 rounded-lg font-medium transition-colors",
                              isActive(item.href) ? "bg-primary text-primary-foreground" : "text-foreground hover:bg-muted",
                            )}
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    );
                  }
                  return (
                    <Link
                      key={link.name}
                      to={link.href}
                      className={cn(
                        "block px-4 py-3 rounded-lg font-medium transition-colors",
                        isActive(link.href) ? "bg-primary text-primary-foreground" : "text-foreground hover:bg-muted",
                      )}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  );
                })}
              </nav>
              <div className="p-4 border-t mt-4 space-y-3 bg-background">
                <a href="tel:+918356837052" className="flex items-center gap-2 px-4 py-2 text-foreground">
                  <Phone className="w-4 h-4" />
                  +91 8356 837052
                </a>
                <Button variant="navy" size="lg" asChild className="w-full">
                  <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                    Get in Touch
                  </Link>
                </Button>
              </div>
            </div>
          </>,
          document.body,
        )}
    </header>
  );
}
