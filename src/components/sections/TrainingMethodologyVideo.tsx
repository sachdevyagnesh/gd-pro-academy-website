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
  videoUrl = "https://www.youtube.com/embed/dQw4w9WgXcQ", // Placeholder - replace with actual video
  thumbnailUrl 
}: TrainingMethodologyVideoProps) {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Video Section */}
          <div className="relative group">
            <div 
              className="relative rounded-2xl overflow-hidden shadow-elevated cursor-pointer"
              onClick={() => setIsVideoOpen(true)}
            >
              {/* Video Thumbnail / Placeholder */}
              <div className="aspect-video bg-gradient-to-br from-primary via-primary/90 to-primary/80 flex items-center justify-center relative">
                {thumbnailUrl ? (
                  <img 
                    src={thumbnailUrl} 
                    alt="Training Methodology Video" 
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="text-center px-8">
                    <h3 className="font-display text-2xl md:text-3xl font-bold text-primary-foreground mb-2">
                      Our Training Methodology
                    </h3>
                    <p className="text-primary-foreground/70 text-sm">
                      Watch how we transform professionals
                    </p>
                  </div>
                )}
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-primary/20 group-hover:bg-primary/30 transition-colors">
                  <div className="w-20 h-20 rounded-full bg-secondary flex items-center justify-center shadow-gold group-hover:scale-110 transition-transform">
                    <Play className="w-8 h-8 text-secondary-foreground fill-current ml-1" />
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-secondary/20 rounded-full blur-xl" />
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-accent/20 rounded-full blur-xl" />
            </div>

            <p className="text-center text-sm text-muted-foreground mt-6">
              Click to watch the full video
            </p>
          </div>

          {/* Content Section */}
          <div>
            <div className="accent-line mb-6" />
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              How We Train: Our Unique Methodology
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              At GD Pro Academy, we believe in learning by doing. Our training methodology combines 
              proven frameworks with practical application, ensuring participants don't just learn – 
              they transform.
            </p>

            <div className="space-y-5">
              {methodologyPoints.map((point, index) => (
                <div key={index} className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center shrink-0">
                    <CheckCircle className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">{point.title}</h4>
                    <p className="text-sm text-muted-foreground">{point.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button variant="navy" size="lg" onClick={() => setIsVideoOpen(true)}>
                <Play className="w-4 h-4 mr-2" />
                Watch Full Video
              </Button>
            </div>
          </div>
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