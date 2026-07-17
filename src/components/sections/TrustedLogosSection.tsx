import kotakLogo from "@/assets/kotak-logo.png";
import yesBankLogo from "@/assets/yes-bank.png";
import iciciLogo from "@/assets/icici-bank.jpeg";
import hdfcLogo from "@/assets/hdfc-bank.png";
import axisLogo from "@/assets/axis-bank.jpg";
import mahindraLogo from "@/assets/mahindra-pride.png";
import wagonsLogo from "@/assets/wagons-learning.png";
import prepworksLogo from "@/assets/prepworks-logo.png";
import kyteLogo from "@/assets/kyte-logo.jpg";
import proSpidersLogo from "@/assets/pro-spiders.png";
import veeflyLogo from "@/assets/veefly.png";

const logos = [
  { name: "Kotak Bank", src: kotakLogo },
  { name: "ICICI Bank", src: iciciLogo },
  { name: "HDFC Bank", src: hdfcLogo },
  { name: "Yes Bank", src: yesBankLogo },
  { name: "Axis Bank", src: axisLogo },
  { name: "Mahindra Pride Classroom", src: mahindraLogo },
  { name: "Wagons Learning", src: wagonsLogo },
  { name: "Prepworks", src: prepworksLogo },
  { name: "Kyte Enterprise", src: kyteLogo },
  { name: "Pro Spiders", src: proSpidersLogo },
  { name: "VeeFly", src: veeflyLogo },
];

export function TrustedLogosSection() {
  return (
    <section className="py-12 bg-background border-t border-b border-border">
      <div className="container mx-auto px-4">
        <p className="text-center text-xs uppercase tracking-widest text-muted-foreground mb-8">
          Trusted by leading organizations
        </p>
        <div className="overflow-hidden">
          <div className="flex items-center gap-10 md:gap-14 animate-marquee">
            {[...logos, ...logos].map((l, i) => (
              <div
                key={`${l.name}-${i}`}
                className="shrink-0 h-16 md:h-20 flex items-center"
              >
                <img
                  src={l.src}
                  alt={l.name}
                  loading="lazy"
                  className="max-h-full max-w-[150px] md:max-w-[180px] object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
