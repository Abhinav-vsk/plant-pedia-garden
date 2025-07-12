import { Plant } from '@/data/plantsData';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Droplets, Sun, Mountain, Heart, Clock, Lightbulb } from 'lucide-react';

interface PlantDetailModalProps {
  plant: Plant | null;
  isOpen: boolean;
  onClose: () => void;
}

export const PlantDetailModal = ({ plant, isOpen, onClose }: PlantDetailModalProps) => {
  if (!plant) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-background border border-border shadow-elevated">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Image Section */}
          <div className="space-y-4">
            <div className="aspect-square rounded-xl overflow-hidden shadow-card">
              <img
                src={plant.image}
                alt={plant.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-center">
              <Badge 
                variant="secondary" 
                className={`font-poppins ${
                  plant.difficultyLevel === 'Easy' 
                    ? 'bg-garden-leaf/20 text-primary hover:bg-garden-leaf/30' 
                    : plant.difficultyLevel === 'Medium' 
                    ? 'bg-garden-earth/30 text-foreground hover:bg-garden-earth/40' 
                    : 'bg-destructive/20 text-destructive hover:bg-destructive/30'
                }`}
              >
                {plant.difficultyLevel} Care Level
              </Badge>
            </div>
          </div>

          {/* Content Section */}
          <div className="space-y-6">
            <div>
              <h1 className="font-poppins font-bold text-3xl text-foreground mb-2">
                {plant.name}
              </h1>
              <p className="font-poppins text-lg text-muted-foreground italic mb-4">
                {plant.scientificName}
              </p>
              <p className="font-poppins text-foreground leading-relaxed">
                {plant.description}
              </p>
            </div>

            {/* Benefits Section */}
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Heart className="w-5 h-5 text-primary" />
                <h3 className="font-poppins font-semibold text-lg text-foreground">Benefits</h3>
              </div>
              <p className="font-poppins text-muted-foreground bg-accent/50 p-3 rounded-lg">
                {plant.benefits}
              </p>
            </div>

            {/* Care Instructions */}
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Lightbulb className="w-5 h-5 text-primary" />
                <h3 className="font-poppins font-semibold text-lg text-foreground">Care Instructions</h3>
              </div>
              <div className="grid gap-3">
                <div className="flex items-start gap-3 bg-plant-hover p-3 rounded-lg">
                  <Droplets className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <h4 className="font-poppins font-medium text-foreground">Watering</h4>
                    <p className="font-poppins text-sm text-muted-foreground">{plant.care.watering}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 bg-plant-hover p-3 rounded-lg">
                  <Sun className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <h4 className="font-poppins font-medium text-foreground">Sunlight</h4>
                    <p className="font-poppins text-sm text-muted-foreground">{plant.care.sunlight}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 bg-plant-hover p-3 rounded-lg">
                  <Mountain className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <h4 className="font-poppins font-medium text-foreground">Soil</h4>
                    <p className="font-poppins text-sm text-muted-foreground">{plant.care.soil}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Lifespan */}
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-primary" />
                <h3 className="font-poppins font-semibold text-lg text-foreground">Lifespan</h3>
              </div>
              <p className="font-poppins text-muted-foreground bg-secondary/50 p-3 rounded-lg">
                {plant.lifespan}
              </p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};