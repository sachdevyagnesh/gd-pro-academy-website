import { Award, Building2, GraduationCap } from "lucide-react";
import { useState } from "react";

// Key associations - using publicly available logos
const associations = [
  { name: "ICICI Bank", logo: "https://upload.wikimedia.org/wikipedia/commons/1/12/ICICI_Bank_Logo.svg" },
  { name: "HDFC Bank", logo: "https://upload.wikimedia.org/wikipedia/commons/2/28/HDFC_Bank_Logo.svg" },
  { name: "Kotak Bank", logo: "https://upload.wikimedia.org/wikipedia/commons/8/8b/Kotak_Mahindra_Bank_logo.svg" },
  { name: "Yes Bank", logo: "https://upload.wikimedia.org/wikipedia/commons/4/4f/Yes_Bank_logo.svg" },
  { name: "Axis Bank", logo: "https://upload.wikimedia.org/wikipedia/commons/1/1a/Axis_Bank_logo.svg" },
  { name: "Udemy", logo: "https://upload.wikimedia.org/wikipedia/commons/e/e3/Udemy_logo.svg" },
];

const certifications = [
  "SHRM Recertification Provider",
  "CPD Accredited Programs",
  "HRCI Approved Provider",
  "Certified Corporate Trainer",
];

export function CertificationsSection() {
  const [failedImages, setFailedImages] = useState<Set<string>>(new Set());

  const handleImageError = (companyName: string) => {
    setFailedImages(prev => new Set(prev).add(companyName));
  };

  // Double the logos for seamless infinite scroll
  const marqueeLogos = [...associations, ...associations];

  return (
    <section className="section-padding bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="accent-line mx-auto mb-6" />
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Trusted By Industry Leaders
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We're proud to have trained teams at some of India's leading organizations
          </p>
        </div>

        {/* Key Associations — Infinite Marquee */}
        <div className="mb-16">
          <div className="flex items-center justify-center gap-3 mb-8">
            <Building2 className="w-5 h-5 text-primary" />
            <h3 className="font-semibold text-foreground">Key Associations</h3>
          </div>
          <div className="overflow-hidden">
            <div className="flex items-center gap-12 md:gap-16 animate-marquee">
              {marqueeLogos.map((company, i) => (
                <div
                  key={`${company.name}-${i}`}
                  className="shrink-0 grayscale hover:grayscale-0 transition-all opacity-70 hover:opacity-100"
                >
                  {failedImages.has(company.name) ? (
                    <span className="text-lg font-semibold text-muted-foreground whitespace-nowrap">
                      {company.name}
                    </span>
                  ) : (
                    <img
                      src={company.logo}
                      alt={company.name}
                      className="h-8 md:h-10 w-auto object-contain"
                      onError={() => handleImageError(company.name)}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div>
          <div className="flex items-center justify-center gap-3 mb-8">
            <GraduationCap className="w-5 h-5 text-secondary" />
            <h3 className="font-semibold text-foreground">Certifications & Credentials</h3>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {certifications.map((cert) => (
              <div
                key={cert}
                className="bg-card rounded-xl p-4 border shadow-soft text-center hover:shadow-md transition-shadow"
              >
                <Award className="w-8 h-8 text-accent mx-auto mb-3" />
                <p className="text-sm font-medium text-foreground">{cert}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
