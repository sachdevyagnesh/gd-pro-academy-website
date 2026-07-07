export function FounderQuoteSection() {
  return (
    <section style={{ backgroundColor: "#1A2A5E" }} className="py-[60px]">
      <div className="container mx-auto px-4">
        <div className="max-w-[700px] mx-auto">
          <div
            className="pl-6 border-l-4"
            style={{ borderColor: "#D4A017" }}
          >
            <p
              className="italic text-white"
              style={{ fontSize: "clamp(20px, 2.2vw, 22px)", lineHeight: 1.5 }}
            >
              &ldquo;My mission is simple. Help you sell with confidence, speak with impact, and grow without limits.&rdquo;
            </p>
            <p
              className="mt-6"
              style={{ color: "#D4A017", fontSize: "14px" }}
            >
              — Grishma Sachdev, Founder &amp; Lead Trainer, GD Pro Academy
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
