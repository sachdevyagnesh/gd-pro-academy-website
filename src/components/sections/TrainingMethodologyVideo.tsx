import { Play, CheckCircle, Image, Video } from "lucide-react";
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

        {/* Photo + Video Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {/* Photo Placeholder 1 */}
          <div className="aspect-[4/3] rounded-2xl border-2 border-dashed border-border bg-muted/50 flex flex-col items-center justify-center gap-3 p-6">
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
              <Image className="w-7 h-7 text-primary" />
            </div>
            <p className="text-sm font-medium text-muted-foreground text-center">Real Training Session Photo</p>
            <span className="text-xs text-muted-foreground/60">Slot 1</span>
          </div>

          {/* Photo Placeholder 2 */}
          <div className="aspect-[4/3] rounded-2xl border-2 border-dashed border-border bg-muted/50 flex flex-col items-center justify-center gap-3 p-6">
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
              <Image className="w-7 h-7 text-primary" />
            </div>
            <p className="text-sm font-medium text-muted-foreground text-center">Real Training Session Photo</p>
            <span className="text-xs text-muted-foreground/60">Slot 2</span>
          </div>

          {/* Video Placeholder */}
          <div 
            className="aspect-[4/3] rounded-2xl border-2 border-dashed border-border bg-gradient-to-br from-primary/5 to-primary/10 flex flex-col items-center justify-center gap-3 p-6 cursor-pointer hover:border-primary/40 transition-colors md:col-span-2 lg:col-span-1"
            onClick={() => setIsVideoOpen(true)}
          >
            <div className="w-14 h-14 rounded-full bg-secondary/20 flex items-center justify-center">
              <Video className="w-7 h-7 text-secondary-foreground" />
            </div>
            <p className="text-sm font-medium text-muted-foreground text-center">Training Video Clip</p>
            <Button variant="outline" size="sm" className="mt-1 gap-2">
              <Play className="w-3 h-3" />
              Play Video
            </Button>
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