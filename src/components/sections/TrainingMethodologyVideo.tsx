import { Play, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const methodologyPoints = [
  {
    title: "Experiential Learning",
    description: "Role-plays, simulations, and real-world scenarios for hands-on practice"
  },
  {
    title: "Industry-Specific Content",
    description: "Customized examples and case studies from BFSI and corporate sectors"
  },
  {
    title: "Interactive Sessions",
    description: "Group activities, discussions, and peer learning opportunities"
  },
  {
    title: "Practical Takeaways",
    description: "Actionable tools, templates, and frameworks to apply immediately"
  }
];

interface TrainingMethodologyVideoProps {
  videoUrl?: string;
  thumbnailUrl?: string;
}

export function TrainingMethodologyVideo({ 
  videoUrl = "https://www.youtube.com/embed/dQw4w9WgXcQ",
  thumbnailUrl 
}: TrainingMethodologyVideoProps) {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-10">
          <div className="accent-line mx-auto mb-6" />
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            How We Train: Our Unique Methodology
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            At GD Pro Academy, we believe in learning by doing. Our training methodology combines 
            proven frameworks with practical application.
          </p>
        </div>

        {/* Video Thumbnail */}
        <div className="mb-12">
          <div
            className="relative aspect-video rounded-2xl overflow-hidden cursor-pointer group border shadow-soft bg-muted"
            onClick={() => setIsVideoOpen(true)}
          >
            {thumbnailUrl ? (
              <img
                src={thumbnailUrl}
                alt="Training methodology video"
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
                <p className="text-muted-foreground">Video thumbnail placeholder</p>
              </div>
            )}
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors flex items-center justify-center">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-secondary/90 flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                <Play className="w-8 h-8 md:w-10 md:h-10 text-secondary-foreground ml-1" />
              </div>
            </div>
          </div>
        </div>

        {/* Methodology Points */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {methodologyPoints.map((point, index) => (
            <div key={index} className="bg-card rounded-xl border shadow-soft p-6">
              <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center mb-4">
                <CheckCircle className="w-5 h-5 text-accent" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">{point.title}</h4>
              <p className="text-sm text-muted-foreground">{point.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Video Modal */}
      <Dialog open={isVideoOpen} onOpenChange={setIsVideoOpen}>
        <DialogContent className="max-w-4xl p-0 overflow-hidden">
          <DialogHeader className="p-4 pb-0">
            <DialogTitle>Our Training Methodology</DialogTitle>
          </DialogHeader>
          <div className="aspect-video">
            <iframe
              width="100%"
              height="100%"
              src={isVideoOpen ? videoUrl : ""}
              title="Training Methodology Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}
