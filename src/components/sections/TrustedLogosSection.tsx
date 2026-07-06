import kotakLogo from "@/assets/kotak-logo.png";
import yesBankLogo from "@/assets/yes-bank.png";
import iciciLogo from "@/assets/icici-bank.jpeg";
import hdfcLogo from "@/assets/hdfc-bank.png";
import axisLogo from "@/assets/axis-bank.jpg";
import mahindraLogo from "@/assets/mahindra-pride.png";

const logos = [
  { name: "Kotak Bank", src: kotakLogo },
  { name: "ICICI Bank", src: iciciLogo },
  { name: "HDFC Bank", src: hdfcLogo },
  { name: "Yes Bank", src: yesBankLogo },
  { name: "Axis Bank", src: axisLogo },
  { name: "Mahindra Pride Classroom", src: mahindraLogo },
];

export function TrustedLogosSection() {
  return (
    <section className="py-10 bg-background border-t border-b border-border">
      <div className="container mx-auto px-4">
        <p className="text-center text-xs uppercase tracking-widest text-muted-foreground mb-6">
          Trusted by leading organizations
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
          {logos.map((l) => (
            <div key={l.name} className="h-10 md:h-12 flex items-center opacity-70 hover:opacity-100 transition-opacity">
              <img
                src={l.src}
                alt={l.name}
                loading="lazy"
                className="max-h-full max-w-[110px] md:max-w-[140px] object-contain grayscale hover:grayscale-0 transition"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
