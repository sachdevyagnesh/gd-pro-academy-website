import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Linkedin, Instagram, Youtube, ArrowRight } from "lucide-react";
import logo from "@/assets/logo.jpg";

const footerLinks = {
  training: [
    { name: "Corporate Training", href: "/corporate-training" },
    { name: "Individual Training", href: "/individual-training" },
    { name: "Sales Training", href: "/services" },
    { name: "Soft Skills Training", href: "/services" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Our Services", href: "/services" },
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
      {/* CTA Section */}
      <div className="border-b border-primary-foreground/10">
        <div className="container mx-auto px-4 py-12 md:py-16">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="font-display text-2xl md:text-3xl font-semibold mb-2">
                Ready to Transform Your Team?
              </h2>
              <p className="text-primary-foreground/70">
                Let's discuss the right training solution for your organization.
              </p>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-8 py-4 rounded-xl font-semibold hover:bg-secondary/90 transition-all shadow-gold group"
            >
              Get in Touch
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <img 
                src={logo} 
                alt="GD Pro Academy Logo" 
                className="h-14 w-auto object-contain rounded-lg"
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
                href="https://linkedin.com/in/grishma-sachdev"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-secondary hover:text-secondary-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com/gdproacademy"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-secondary hover:text-secondary-foreground transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://youtube.com/@gdproacademy"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-secondary hover:text-secondary-foreground transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Training Links */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Training</h4>
            <ul className="space-y-3">
              {footerLinks.training.map((link) => (
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
                <span>Thane, Maharashtra, India</span>
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
