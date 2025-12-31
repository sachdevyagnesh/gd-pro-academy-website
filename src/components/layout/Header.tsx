import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import logo from "@/assets/logo-new.png";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  {
    name: "Services",
    href: "#",
    children: [
      { name: "Corporate Training", href: "/corporate-training" },
      { name: "Individual Training", href: "/individual-training" },
    ],
  },
  { name: "Moments", href: "/moments" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [isMounted, setIsMounted] = useState(false);
  const location = useLocation();
  const logoRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Preload logo on mount - store in ref to prevent re-renders
  useEffect(() => {
    const img = new Image();
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
    setOpenDropdown(null);
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
          ? "bg-card/95 backdrop-blur-md shadow-soft py-2"
          : "bg-transparent py-3"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo - Large, prominent, no background */}
          <Link to="/" className="flex items-center gap-4 group min-w-[280px]">
            <div className="h-20 w-20 md:h-24 md:w-24 shrink-0 drop-shadow-lg">
              <img 
                src={logo} 
                alt="GD Pro Academy Logo" 
                className="h-full w-full object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className={cn(
                "font-display font-bold text-xl md:text-2xl leading-tight transition-colors",
                isScrolled ? "text-foreground" : "text-primary-foreground"
              )}>
                GD Pro Academy
              </span>
              <span className={cn(
                "text-sm font-medium transition-colors",
                isScrolled ? "text-muted-foreground" : "text-primary-foreground/80"
              )}>
                Training Excellence
              </span>
            </div>
          </Link>

          {/* Desktop Navigation - Removed Book Call link */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">
                {link.children ? (
                  <>
                    <button
                      className={cn(
                        "flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-colors",
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
                      "px-3 py-2 rounded-lg text-sm font-medium transition-colors",
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
          <div className="hidden lg:flex items-center gap-3">
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
                  <img src={logo} alt="GD Pro Academy" className="h-16 w-16 object-contain drop-shadow-lg" />
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
                  <div key={link.name}>
                    {link.children ? (
                      <>
                        <button
                          className="w-full flex items-center justify-between px-4 py-3 rounded-lg text-foreground font-medium hover:bg-muted transition-colors"
                          onClick={() => setOpenDropdown(openDropdown === link.name ? null : link.name)}
                        >
                          {link.name}
                          <ChevronDown
                            className={cn(
                              "w-4 h-4 transition-transform",
                              openDropdown === link.name && "rotate-180",
                            )}
                          />
                        </button>
                        {openDropdown === link.name && (
                          <div className="ml-4 mt-1 space-y-1 border-l-2 border-muted pl-4">
                            {link.children.map((child) => (
                              <Link
                                key={child.name}
                                to={child.href}
                                className={cn(
                                  "block px-4 py-2.5 rounded-lg text-sm transition-colors",
                                  isActive(child.href)
                                    ? "bg-primary text-primary-foreground"
                                    : "text-muted-foreground hover:text-foreground hover:bg-muted",
                                )}
                                onClick={() => setIsMobileMenuOpen(false)}
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
                          "block px-4 py-3 rounded-lg font-medium transition-colors",
                          isActive(link.href) ? "bg-primary text-primary-foreground" : "text-foreground hover:bg-muted",
                        )}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {link.name}
                      </Link>
                    )}
                  </div>
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
