export function FounderQuoteSection() {
  return (
    <section style={{ backgroundColor: "#1A2A5E" }} className="py-[60px]">
      <div className="container mx-auto px-4">
        <div className="max-w-[700px] mx-auto text-center relative">
          <div
            aria-hidden
            className="font-display leading-none select-none"
            style={{ color: "#D4A017", fontSize: "5rem", lineHeight: 1 }}
          >
            &ldquo;
          </div>
          <p
            className="italic text-white"
            style={{ fontSize: "clamp(20px, 2.2vw, 22px)", lineHeight: 1.5 }}
          >
            I didn't have a mentor. So I became one.
            className="mt-6 text-right"
            style={{ color: "#D4A017", fontSize: "14px" }}
          >
            — Grishma Sachdev, Founder &amp; Lead Trainer, GD Pro Academy
          </p>
        </div>
      </div>
    </section>
  );
}
