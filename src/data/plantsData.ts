import peaceLilyImg from '@/assets/peace-lily.jpg';
import snakePlantImg from '@/assets/snake-plant.jpg';
import aloeVeraImg from '@/assets/aloe-vera.jpg';
import arecaPalmImg from '@/assets/areca-palm.jpg';
import moneyPlantImg from '@/assets/money-plant.jpg';
import spiderPlantImg from '@/assets/spider-plant.jpg';
import bostonFernImg from '@/assets/boston-fern.jpg';
import rubberPlantImg from '@/assets/rubber-plant.jpg';
import zzPlantImg from '@/assets/zz-plant.jpg';
import jadePlantImg from '@/assets/jade-plant.jpg';

export interface Plant {
  id: number;
  name: string;
  scientificName: string;
  image: string;
  description: string;
  benefits: string;
  care: {
    watering: string;
    sunlight: string;
    soil: string;
  };
  difficultyLevel: 'Easy' | 'Medium' | 'Hard';
  lifespan: string;
}

export const plantsData: Plant[] = [
  {
    id: 1,
    name: "Peace Lily",
    scientificName: "Spathiphyllum",
    image: peaceLilyImg,
    description: "The Peace Lily is a beautiful flowering houseplant known for its elegant white blooms and glossy green foliage. It's one of the most popular indoor plants due to its ability to thrive in low light conditions and its air-purifying qualities.",
    benefits: "Air purification, calming presence, removes harmful toxins like ammonia and formaldehyde",
    care: {
      watering: "Once a week, when soil feels dry",
      sunlight: "Indirect sunlight, low to medium light",
      soil: "Moist, well-drained potting mix"
    },
    difficultyLevel: "Easy",
    lifespan: "3-5 years with proper care"
  },
  {
    id: 2,
    name: "Snake Plant",
    scientificName: "Sansevieria trifasciata",
    image: snakePlantImg,
    description: "Also known as Mother-in-Law's Tongue, the Snake Plant is incredibly resilient and perfect for beginners. Its striking upright leaves with yellow edges make it a stunning architectural addition to any space.",
    benefits: "Low maintenance, filters air toxins, releases oxygen at night",
    care: {
      watering: "Every 2-3 weeks, drought tolerant",
      sunlight: "Low to bright indirect light",
      soil: "Sandy, well-draining cactus soil"
    },
    difficultyLevel: "Easy",
    lifespan: "10+ years with minimal care"
  },
  {
    id: 3,
    name: "Aloe Vera",
    scientificName: "Aloe barbadensis miller",
    image: aloeVeraImg,
    description: "This medicinal succulent is famous for its healing properties and gel-filled leaves. Aloe Vera is not just beautiful but also practical, providing natural remedies for burns and skin irritation.",
    benefits: "Heals skin burns and cuts, natural air purifier, medicinal properties",
    care: {
      watering: "Every 2-3 weeks, water deeply then dry",
      sunlight: "Bright, indirect light",
      soil: "Cactus or succulent potting mix"
    },
    difficultyLevel: "Easy",
    lifespan: "12+ years, can live for decades"
  },
  {
    id: 4,
    name: "Areca Palm",
    scientificName: "Dypsis lutescens",
    image: arecaPalmImg,
    description: "The Areca Palm brings tropical vibes indoors with its feathery, arching fronds. It's an excellent choice for adding height and elegance to living spaces while naturally humidifying the air.",
    benefits: "Natural humidifier, toxin removal, adds tropical ambiance",
    care: {
      watering: "Every 3-4 days, keep soil moist",
      sunlight: "Bright, filtered indirect light",
      soil: "Peat-based, well-draining mix"
    },
    difficultyLevel: "Medium",
    lifespan: "10+ years indoors"
  },
  {
    id: 5,
    name: "Money Plant",
    scientificName: "Epipremnum aureum",
    image: moneyPlantImg,
    description: "Also called Golden Pothos, this trailing vine is believed to bring prosperity and good fortune. Its heart-shaped leaves and easy-care nature make it perfect for hanging baskets or climbing poles.",
    benefits: "Brings prosperity (folklore), excellent oxygen generator, removes indoor air pollutants",
    care: {
      watering: "Once a week, allow soil to dry between waterings",
      sunlight: "Low to bright indirect light",
      soil: "Well-drained loamy soil"
    },
    difficultyLevel: "Easy",
    lifespan: "5-10 years, can propagate indefinitely"
  },
  {
    id: 6,
    name: "Spider Plant",
    scientificName: "Chlorophytum comosum",
    image: spiderPlantImg,
    description: "The Spider Plant is famous for its spiderettes - small plantlets that dangle from the mother plant. It's incredibly easy to grow and propagate, making it perfect for sharing with friends.",
    benefits: "Removes carbon monoxide and formaldehyde, easy to propagate, pet-safe",
    care: {
      watering: "Once a week, prefers slightly moist soil",
      sunlight: "Bright, indirect sunlight",
      soil: "Well-draining all-purpose potting mix"
    },
    difficultyLevel: "Easy",
    lifespan: "10+ years, produces offspring"
  },
  {
    id: 7,
    name: "Boston Fern",
    scientificName: "Nephrolepis exaltata",
    image: bostonFernImg,
    description: "This classic fern with its feathery, cascading fronds adds a touch of Victorian elegance to any room. Boston Ferns are natural humidifiers and create a lush, green atmosphere.",
    benefits: "Improves humidity levels, natural air purifier, adds lush greenery",
    care: {
      watering: "2-3 times a week, keep soil consistently moist",
      sunlight: "Indirect light, avoid direct sun",
      soil: "Rich, moisture-retaining potting mix"
    },
    difficultyLevel: "Medium",
    lifespan: "2-3 years indoors"
  },
  {
    id: 8,
    name: "Rubber Plant",
    scientificName: "Ficus elastica",
    image: rubberPlantImg,
    description: "The Rubber Plant is a striking tree with large, glossy leaves that can grow quite tall indoors. Its dramatic presence and air-purifying abilities make it a favorite among plant enthusiasts.",
    benefits: "Absorbs airborne toxins, adds dramatic height, low maintenance once established",
    care: {
      watering: "Weekly, allow top inch of soil to dry",
      sunlight: "Bright, indirect light",
      soil: "Well-draining loamy soil"
    },
    difficultyLevel: "Easy",
    lifespan: "10+ years, can become a large indoor tree"
  },
  {
    id: 9,
    name: "ZZ Plant",
    scientificName: "Zamioculcas zamiifolia",
    image: zzPlantImg,
    description: "The ZZ Plant is practically indestructible, making it perfect for busy lifestyles or darker spaces. Its waxy, dark green leaves add a modern touch to any interior design scheme.",
    benefits: "Thrives in low light conditions, drought tolerant, modern aesthetic appeal",
    care: {
      watering: "Every 2-3 weeks, very drought tolerant",
      sunlight: "Low to moderate light",
      soil: "Well-draining cactus or succulent mix"
    },
    difficultyLevel: "Easy",
    lifespan: "5-10 years with minimal care"
  },
  {
    id: 10,
    name: "Jade Plant",
    scientificName: "Crassula ovata",
    image: jadePlantImg,
    description: "The Jade Plant is a succulent tree that symbolizes good luck and prosperity. Its thick, oval leaves store water, making it extremely low-maintenance and perfect for sunny windowsills.",
    benefits: "Symbol of good luck and prosperity, extremely low maintenance, beautiful when mature",
    care: {
      watering: "Every 2 weeks, water thoroughly then dry",
      sunlight: "Bright, indirect to direct light",
      soil: "Succulent or cactus potting mix"
    },
    difficultyLevel: "Easy",
    lifespan: "20+ years, can become a small tree"
  }
];