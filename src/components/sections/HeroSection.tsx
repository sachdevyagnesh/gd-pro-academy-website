import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Award } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import heroBg from "@/assets/hero-bg-1.jpg";

const metrics = [
  { value: 14, suffix: "+", label: "Years Experience" },
  { value: 24000, suffix: "+", label: "Training Hours" },
  { value: 4500, suffix: "+", label: "Careers Transformed" },
  { value: 192, suffix: "+", label: "Sessions Delivered" },
];

function AnimatedNumber({ value, suffix, run }: { value: number; suffix: string; run: boolean }) {
  // Default to final value so correct number shows even if animation is delayed/fails
  const [count, setCount] = useState(value);

  useEffect(() => {
    if (!run) return;
    const duration = 2000;
    const start = performance.now();
    let raf = 0;
    setCount(0);
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      setCount(Math.floor(eased * value));
      if (t < 1) raf = requestAnimationFrame(tick);
      else setCount(value);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [run, value]);

  return (
    <span className="shimmer-text">
      {count.toLocaleString()}{suffix}
    </span>
  );
}

export function HeroSection() {
  const statsRef = useRef<HTMLDivElement>(null);
  const [runCount, setRunCount] = useState(false);

  useEffect(() => {
    const el = statsRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRunCount(true);
          obs.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section data-hero className="relative min-h-screen flex items-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/85 to-primary/80" />

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-72 h-72 bg-secondary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
      </div>

      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" className="text-primary-foreground" />
        </svg>
      </div>

      <div className="container mx-auto px-4 pt-32 pb-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm rounded-full px-4 py-2 mb-8 animate-fade-in-up">
            <Award className="w-4 h-4 text-secondary" />
            <span className="text-primary-foreground/90 text-sm font-medium">
              Professional Training Solutions
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight animate-fade-in-up stagger-1">
            <span className="block text-primary-foreground">From Sales Professional To</span>
            <span className="block text-gradient-gold">Sales Leader.</span>
          </h1>

          <p className="text-lg md:text-xl text-primary-foreground/85 mb-10 max-w-3xl mx-auto leading-relaxed animate-fade-in-up stagger-2">
            Practical training that builds confident sales professionals and high-performing teams.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-in-up stagger-3">
            <Button variant="hero" size="xl" asChild className="group">
              <Link to="/contact">
                Start Your Sales Growth Journey
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <a
              href="https://wa.me/918356837052?text=Hi!%20I%20would%20like%20to%20book%20a%20free%20Sales%20Career%20Audit%20with%20Grishma."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 h-12 px-6 rounded-lg text-base font-semibold border-[1.5px] border-white text-white bg-transparent transition-colors hover:bg-white hover:text-[#1A2A5E]"
            >
              Book Free Sales CareerAudit
            </a>
          </div>

          <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 animate-fade-in-up stagger-4">
            {metrics.map((metric) => (
              <div
                key={metric.label}
                className="bg-primary-foreground/5 backdrop-blur-sm rounded-2xl p-6 border border-primary-foreground/10"
              >
                <div className="text-3xl md:text-4xl font-bold mb-2">
                  <AnimatedNumber value={metric.value} suffix={metric.suffix} run={runCount} />
                </div>
                <p className="text-primary-foreground/70 text-sm">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-secondary rounded-full" />
        </div>
      </div>
    </section>
  );
}
