import { CheckCircle } from "lucide-react";

const methodologyPoints = [
  {
    title: "30% Learning, 70% Doing",
    description: "Our signature ratio — participants spend most of the session practising, not just listening.",
  },
  {
    title: "Experiential Learning",
    description: "Role-plays, simulations, and real-world scenarios for hands-on practice.",
  },
  {
    title: "Industry-Specific Content",
    description: "Customized examples and case studies drawn from BFSI and corporate sectors.",
  },
  {
    title: "Interactive Sessions",
    description: "Group activities, discussions, and peer learning opportunities.",
  },
  {
    title: "Practical Takeaways",
    description: "Actionable tools, templates, and frameworks to apply immediately.",
  },
];

function MethodCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="flex items-start gap-4 p-6 bg-card border border-border rounded-2xl shadow-soft">
      <div className="w-10 h-10 shrink-0 rounded-lg bg-accent/15 flex items-center justify-center">
        <CheckCircle className="w-5 h-5 text-accent" />
      </div>
      <div>
        <h4 className="font-semibold text-foreground mb-1">{title}</h4>
        <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

export function TrainingMethodologyVideo() {
  const topRow = methodologyPoints.slice(0, 3);
  const bottomRow = methodologyPoints.slice(3);

  return (
    <section className="py-12 md:py-16 bg-background">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-10">
          <div className="accent-line mx-auto mb-6" />
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            How We Train: Our Unique Methodology
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            At GD Pro Academy, we believe in learning by doing. Our methodology combines
            proven frameworks with practical application.
          </p>
        </div>

        {/* 3-2 layout: 3 cards top row, 2 centered below */}
        <div className="grid md:grid-cols-3 gap-5 mb-5">
          {topRow.map((p) => <MethodCard key={p.title} {...p} />)}
        </div>
        <div className="grid md:grid-cols-2 gap-5 md:max-w-3xl md:mx-auto">
          {bottomRow.map((p) => <MethodCard key={p.title} {...p} />)}
        </div>
      </div>
    </section>
  );
}
