import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import logo from "@/assets/logo.jpg";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { 
    name: "Training", 
    href: "#",
    children: [
      { name: "Corporate Training", href: "/corporate-training" },
      { name: "Individual Training", href: "/individual-training" },
    ]
  },
  { name: "Services", href: "/services" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [imageLoaded, setImageLoaded] = useState(false);
  const location = useLocation();

  // Preload logo
  useEffect(() => {
    const img = new Image();
    img.src = logo;
    img.onload = () => setImageLoaded(true);
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
    setOpenDropdown(null);
  }, [location]);

  const isActive = (href: string) => location.pathname === href;

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-card/95 backdrop-blur-md shadow-soft py-2"
          : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo - fixed width to prevent layout shift */}
          <Link to="/" className="flex items-center gap-3 group min-w-[200px]">
            <div className="h-12 w-12 rounded-lg overflow-hidden bg-white/10 flex items-center justify-center shrink-0">
              {imageLoaded ? (
                <img 
                  src={logo} 
                  alt="GD Pro Academy Logo" 
                  className="h-full w-full object-cover"
                />
              ) : (
                <span className={cn(
                  "font-display font-bold text-lg",
                  isScrolled ? "text-primary" : "text-primary-foreground"
                )}>GD</span>
              )}
            </div>
            <div className="flex flex-col">
              <span className={cn(
                "font-display font-bold text-lg leading-tight transition-colors",
                isScrolled ? "text-foreground" : "text-primary-foreground"
              )}>
                GD Pro Academy
              </span>
              <span className={cn(
                "text-xs font-medium transition-colors",
                isScrolled ? "text-muted-foreground" : "text-primary-foreground/70"
              )}>
                Training Excellence
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">
                {link.children ? (
                  <>
                    <button
                      className={cn(
                        "flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium transition-colors",
                        isScrolled
                          ? "text-foreground hover:bg-muted"
                          : "text-primary-foreground/90 hover:text-primary-foreground hover:bg-primary-foreground/10"
                      )}
                      onMouseEnter={() => setOpenDropdown(link.name)}
                      onMouseLeave={() => setOpenDropdown(null)}
                    >
                      {link.name}
                      <ChevronDown className="w-4 h-4" />
                    </button>
                    <div
                      className={cn(
                        "absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200"
                      )}
                      onMouseEnter={() => setOpenDropdown(link.name)}
                      onMouseLeave={() => setOpenDropdown(null)}
                    >
                      <div className="bg-card rounded-xl shadow-elevated border p-2 min-w-[200px]">
                        {link.children.map((child) => (
                          <Link
                            key={child.name}
                            to={child.href}
                            className={cn(
                              "block px-4 py-2.5 rounded-lg text-sm font-medium transition-colors",
                              isActive(child.href)
                                ? "bg-primary text-primary-foreground"
                                : "text-foreground hover:bg-muted"
                            )}
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <Link
                    to={link.href}
                    className={cn(
                      "px-4 py-2 rounded-lg text-sm font-medium transition-colors",
                      isActive(link.href)
                        ? isScrolled
                          ? "bg-primary text-primary-foreground"
                          : "bg-primary-foreground/20 text-primary-foreground"
                        : isScrolled
                        ? "text-foreground hover:bg-muted"
                        : "text-primary-foreground/90 hover:text-primary-foreground hover:bg-primary-foreground/10"
                    )}
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* CTA & Contact */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+918356837052"
              className={cn(
                "flex items-center gap-2 text-sm font-medium transition-colors",
                isScrolled ? "text-foreground" : "text-primary-foreground"
              )}
            >
              <Phone className="w-4 h-4" />
              <span className="hidden xl:inline">+91 8356 837052</span>
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
              <X className={cn("w-6 h-6", isScrolled ? "text-foreground" : "text-primary-foreground")} />
            ) : (
              <Menu className={cn("w-6 h-6", isScrolled ? "text-foreground" : "text-primary-foreground")} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-border/20 pt-4 animate-fade-in">
            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <div key={link.name}>
                  {link.children ? (
                    <>
                      <button
                        className={cn(
                          "w-full flex items-center justify-between px-4 py-3 rounded-lg text-sm font-medium",
                          isScrolled ? "text-foreground" : "text-primary-foreground"
                        )}
                        onClick={() => setOpenDropdown(openDropdown === link.name ? null : link.name)}
                      >
                        {link.name}
                        <ChevronDown className={cn(
                          "w-4 h-4 transition-transform",
                          openDropdown === link.name && "rotate-180"
                        )} />
                      </button>
                      {openDropdown === link.name && (
                        <div className="pl-4 animate-fade-in">
                          {link.children.map((child) => (
                            <Link
                              key={child.name}
                              to={child.href}
                              className={cn(
                                "block px-4 py-2.5 rounded-lg text-sm",
                                isScrolled ? "text-muted-foreground hover:text-foreground" : "text-primary-foreground/80 hover:text-primary-foreground"
                              )}
                            >
                              {child.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      to={link.href}
                      className={cn(
                        "block px-4 py-3 rounded-lg text-sm font-medium",
                        isActive(link.href)
                          ? "bg-secondary text-secondary-foreground"
                          : isScrolled
                          ? "text-foreground hover:bg-muted"
                          : "text-primary-foreground hover:bg-primary-foreground/10"
                      )}
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
            </nav>
            <div className="mt-4 pt-4 border-t border-border/20 flex flex-col gap-3">
              <a
                href="tel:+918356837052"
                className={cn(
                  "flex items-center gap-2 px-4 py-2 text-sm",
                  isScrolled ? "text-foreground" : "text-primary-foreground"
                )}
              >
                <Phone className="w-4 h-4" />
                +91 8356 837052
              </a>
              <Button variant="hero" size="lg" asChild className="mx-4">
                <Link to="/contact">Get in Touch</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
