import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Linkedin, Instagram } from "lucide-react";
import logo from "@/assets/logo-new.png";

const footerLinks = {
  services: [
    { name: "For Corporate's", href: "/corporate-training" },
    { name: "For Professional's", href: "/individual-training" },
    { name: "Sales Training", href: "/corporate-training" },
    { name: "Soft Skills Training", href: "/individual-training" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Testimonials", href: "/moments" },
    { name: "Gallery", href: "/gallery" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ],
  resources: [
    { name: "E-Courses", href: "/individual-training#courses" },
    { name: "FAQs", href: "/contact#faq" },
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms & Conditions", href: "/terms" },
    { name: "Refund Policy", href: "/refund" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <img 
                src={logo} 
                alt="GD Pro Academy Logo" 
                className="h-20 w-20 object-contain drop-shadow-lg"
              />
              <div className="flex flex-col">
                <span className="font-display font-bold text-xl leading-tight">
                  GD Pro Academy
                </span>
                <span className="text-sm text-primary-foreground/60">
                  Training Excellence
                </span>
              </div>
            </Link>
            <p className="text-primary-foreground/70 mb-6 max-w-sm leading-relaxed">
              Empowering professionals and organizations with practical, result-driven training in sales, communication, and soft skills.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/in/grishma-sachdev-051a8486?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-secondary hover:text-secondary-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/gdproacademy?utm_source=qr&igsh=a3hjZmN4NzN6c28x"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-secondary hover:text-secondary-foreground transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/70 hover:text-secondary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/70 hover:text-secondary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Contact</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+918356837052"
                  className="flex items-start gap-3 text-primary-foreground/70 hover:text-secondary transition-colors"
                >
                  <Phone className="w-5 h-5 mt-0.5 shrink-0" />
                  <span>+91 8356 837052</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@gdproacademy.in"
                  className="flex items-start gap-3 text-primary-foreground/70 hover:text-secondary transition-colors"
                >
                  <Mail className="w-5 h-5 mt-0.5 shrink-0" />
                  <span>info@gdproacademy.in</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-primary-foreground/70">
                <MapPin className="w-5 h-5 mt-0.5 shrink-0" />
                <span>Mumbai, Maharashtra, India</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-primary-foreground/60">
            <p>© {new Date().getFullYear()} GD Pro Academy. All rights reserved.</p>
            <div className="flex flex-wrap gap-6">
              <Link to="/privacy" className="hover:text-primary-foreground transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-primary-foreground transition-colors">
                Terms & Conditions
              </Link>
              <Link to="/refund" className="hover:text-primary-foreground transition-colors">
                Refund Policy
              </Link>
              <Link to="/shipping" className="hover:text-primary-foreground transition-colors">
                Shipping Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}