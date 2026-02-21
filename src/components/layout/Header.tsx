import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import logo from "@/assets/logo.png";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Testimonials", href: "/moments" },
  { name: "Gallery", href: "/gallery" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Books", href: "/books" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const location = useLocation();
  const logoRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Preload logo on mount
  useEffect(() => {
    const img = new window.Image();
    img.src = logo;
    logoRef.current = img;
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

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

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-soft py-2"
          : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center group flex-shrink-0">
            <img 
              src={logo} 
              alt="GD Pro Academy Logo" 
              loading="eager"
              decoding="sync"
              fetchPriority="high"
              className={cn(
                "w-auto object-contain transition-all duration-300",
                isScrolled ? "h-12 md:h-14 lg:h-16" : "h-14 md:h-16 lg:h-20"
              )}
            />
          </Link>

          {/* Desktop Navigation - Centered */}
          <nav className="hidden lg:flex items-center justify-center flex-1 gap-1 mx-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={cn(
                  "px-4 py-2 rounded-lg text-sm font-medium transition-colors",
                  isActive(link.href)
                    ? isScrolled 
                      ? "bg-primary text-primary-foreground"
                      : "bg-white/20 text-white"
                    : isScrolled
                      ? "text-foreground hover:bg-muted hover:text-primary"
                      : "text-white/90 hover:text-white hover:bg-white/10"
                )}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* CTA & Phone Icon */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+918356837052"
              className={cn(
                "p-2 rounded-full transition-colors",
                isScrolled 
                  ? "text-foreground hover:bg-muted" 
                  : "text-white hover:bg-white/10"
              )}
              aria-label="Call +91 8356 837052"
            >
              <Phone className="w-5 h-5" />
            </a>
            <Button variant={isScrolled ? "navy" : "hero"} size="default" asChild>
              <Link to="/contact">Get in Touch</Link>
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2 rounded-lg"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className={cn("w-6 h-6", isScrolled ? "text-foreground" : "text-white")} />
            ) : (
              <Menu className={cn("w-6 h-6", isScrolled ? "text-foreground" : "text-white")} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu - rendered in a portal to avoid stacking/scroll issues on mobile */}
      {isMounted &&
        isMobileMenuOpen &&
        createPortal(
          <>
            {/* Backdrop */}
            <div
              className="fixed inset-0 bg-black/50 z-[60] lg:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Menu Panel */}
            <div
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation"
              className="fixed top-0 right-0 w-full max-w-xs h-[100dvh] bg-background shadow-2xl z-[70] lg:hidden overflow-y-auto animate-fade-in"
            >
              {/* Menu Header */}
              <div className="flex items-center justify-between p-4 border-b bg-background">
                <div className="flex items-center gap-3">
                  <img src={logo} alt="GD Pro Academy Logo" className="h-10 w-auto object-contain" />
                  <span className="font-display font-bold text-lg text-foreground">Menu</span>
                </div>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 rounded-lg hover:bg-muted transition-colors"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5 text-foreground" />
                </button>
              </div>

              {/* Menu Links */}
              <nav className="p-4 space-y-1 bg-background">
                {navLinks.map((link) => (
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
                ))}
              </nav>

              {/* Menu Footer */}
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
