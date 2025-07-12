import { useState } from 'react';
import { plantsData, Plant } from '@/data/plantsData';
import { PlantCard } from '@/components/PlantCard';
import { PlantDetailModal } from '@/components/PlantDetailModal';
import { SearchBar } from '@/components/SearchBar';
import { HelpButton } from '@/components/HelpButton';
import { Leaf } from 'lucide-react';

const Index = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedPlant, setSelectedPlant] = useState<Plant | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Filter plants based on search term
  const filteredPlants = plantsData.filter(plant =>
    plant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    plant.scientificName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handlePlantClick = (plant: Plant) => {
    setSelectedPlant(plant);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedPlant(null);
  };

  return (
    <div className="min-h-screen bg-gradient-header font-poppins">
      {/* Header */}
      <div className="bg-gradient-primary text-primary-foreground py-8 shadow-soft">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Leaf className="w-8 h-8" />
            <h1 className="text-4xl md:text-5xl font-bold text-center">
              PlantPal
            </h1>
            <Leaf className="w-8 h-8" />
          </div>
          <p className="text-center text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Discover the perfect plants for your home. Learn about their care, benefits, and find your next green companion.
          </p>
          
          {/* Search Bar */}
          <SearchBar 
            searchTerm={searchTerm} 
            onSearchChange={setSearchTerm} 
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        {/* Results Header */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-foreground mb-2">
            {searchTerm ? `Search Results for "${searchTerm}"` : 'Explore Our Plant Collection'}
          </h2>
          <p className="text-muted-foreground">
            {filteredPlants.length} plant{filteredPlants.length !== 1 ? 's' : ''} found
          </p>
        </div>

        {/* Plant Grid */}
        {filteredPlants.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredPlants.map((plant) => (
              <PlantCard
                key={plant.id}
                plant={plant}
                onClick={() => handlePlantClick(plant)}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <Leaf className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-foreground mb-2">
              No plants found
            </h3>
            <p className="text-muted-foreground">
              Try adjusting your search term or browse all plants
            </p>
          </div>
        )}
      </div>

      {/* Plant Detail Modal */}
      <PlantDetailModal
        plant={selectedPlant}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />

      {/* Help Button */}
      <HelpButton />
    </div>
  );
};

export default Index;
