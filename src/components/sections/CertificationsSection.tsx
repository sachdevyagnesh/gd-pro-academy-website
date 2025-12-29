import { Award, Building2, GraduationCap } from "lucide-react";

// Key associations - using public CDN logos
const associations = [
  {
    name: "Axis Bank",
    logo: "https://upload.wikimedia.org/wikipedia/commons/1/1a/Axis_Bank_logo.svg",
  },
  {
    name: "Udemy",
    logo: "https://upload.wikimedia.org/wikipedia/commons/e/e3/Udemy_logo.svg",
  },
  {
    name: "ICICI Bank",
    logo: "https://upload.wikimedia.org/wikipedia/commons/1/12/ICICI_Bank_Logo.svg",
  },
  {
    name: "HDFC Bank",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/28/HDFC_Bank_Logo.svg",
  },
];

const certifications = [
  "Certified Corporate Trainer",
  "L&D Professional Certification",
  "Sales Training Specialist",
  "Soft Skills Development Expert",
];

export function CertificationsSection() {
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

        {/* Key Associations */}
        <div className="mb-16">
          <div className="flex items-center justify-center gap-3 mb-8">
            <Building2 className="w-5 h-5 text-primary" />
            <h3 className="font-semibold text-foreground">Key Associations</h3>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {associations.map((company) => (
              <div
                key={company.name}
                className="grayscale hover:grayscale-0 transition-all opacity-70 hover:opacity-100"
              >
                <img
                  src={company.logo}
                  alt={company.name}
                  className="h-8 md:h-10 w-auto object-contain"
                  onError={(e) => {
                    // Fallback to text if image fails
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.parentElement!.innerHTML = `<span class="text-lg font-semibold text-muted-foreground">${company.name}</span>`;
                  }}
                />
              </div>
            ))}
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

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {[
            { value: "14+", label: "Years Experience" },
            { value: "10,000+", label: "Professionals Trained" },
            { value: "98%", label: "Client Satisfaction" },
            { value: "Pan-India", label: "Reach" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-primary">{stat.value}</p>
              <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
