import { Plant } from '@/data/plantsData';
import { Card, CardContent } from '@/components/ui/card';

interface PlantCardProps {
  plant: Plant;
  onClick: () => void;
}

export const PlantCard = ({ plant, onClick }: PlantCardProps) => {
  return (
    <Card 
      className="cursor-pointer bg-plant-card hover:bg-plant-hover transition-all duration-300 hover:shadow-card hover:scale-105 border border-border/50 hover:border-primary/20 group"
      onClick={onClick}
    >
      <CardContent className="p-0">
        <div className="aspect-square overflow-hidden rounded-t-xl">
          <img
            src={plant.image}
            alt={plant.name}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
        </div>
        <div className="p-4">
          <h3 className="font-poppins font-semibold text-lg text-foreground mb-1 group-hover:text-primary transition-colors">
            {plant.name}
          </h3>
          <p className="font-poppins text-sm text-muted-foreground italic mb-3">
            {plant.scientificName}
          </p>
          <div className="flex items-center justify-between">
            <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium font-poppins ${
              plant.difficultyLevel === 'Easy' 
                ? 'bg-garden-leaf/20 text-primary' 
                : plant.difficultyLevel === 'Medium' 
                ? 'bg-garden-earth/30 text-foreground' 
                : 'bg-destructive/20 text-destructive'
            }`}>
              {plant.difficultyLevel}
            </span>
            <span className="text-xs text-muted-foreground font-poppins">
              Learn more →
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};