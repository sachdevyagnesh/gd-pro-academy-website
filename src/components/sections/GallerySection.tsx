import { Card, CardContent } from "@/components/ui/card";
import { Camera, Users, Presentation, Award, Sparkles, Heart } from "lucide-react";

const galleryPlaceholders = [
  { id: 1, title: "Team Training Session", icon: Users },
  { id: 2, title: "Corporate Workshop", icon: Presentation },
  { id: 3, title: "Award Ceremony", icon: Award },
  { id: 4, title: "Interactive Learning", icon: Sparkles },
  { id: 5, title: "Group Activity", icon: Heart },
  { id: 6, title: "Training Moment", icon: Camera },
  { id: 7, title: "Skill Building", icon: Users },
  { id: 8, title: "Success Celebration", icon: Award },
];

export function GallerySection() {
  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto px-4">
        {/* Gallery Grid - Placeholder images */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {galleryPlaceholders.map((item) => (
            <Card 
              key={item.id} 
              className="group overflow-hidden hover:shadow-elevated transition-all cursor-pointer"
            >
              <div className="aspect-square bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center relative">
                <item.icon className="w-12 h-12 text-primary/40 group-hover:scale-110 transition-transform" />
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors" />
              </div>
              <CardContent className="p-3">
                <p className="text-sm font-medium text-foreground text-center">{item.title}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-muted-foreground">
            Replace placeholder images in <code className="bg-muted px-2 py-1 rounded">/assets/gallery/moments/</code> folder with actual training session photos.
          </p>
        </div>
      </div>
    </section>
  );
}
