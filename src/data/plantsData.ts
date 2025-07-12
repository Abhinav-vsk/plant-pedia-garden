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
import lavenderImg from '@/assets/lavender.jpg';
import pothosImg from '@/assets/pothos.jpg';
import philodendronImg from '@/assets/philodendron.jpg';
import bambooPalmImg from '@/assets/bamboo-palm.jpg';
import chineseEvergreenImg from '@/assets/chinese-evergreen.jpg';
import crotonImg from '@/assets/croton.jpg';
import dumbCaneImg from '@/assets/dumb-cane.jpg';
import dracaenaImg from '@/assets/dracaena.jpg';
import calatheaImg from '@/assets/calathea.jpg';
import fiddleLeafFigImg from '@/assets/fiddle-leaf-fig.jpg';

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
  },
  {
    id: 11,
    name: "Lavender",
    scientificName: "Lavandula",
    image: lavenderImg,
    description: "Lavender is an aromatic flowering plant known for its beautiful purple flowers and calming fragrance. It's perfect for both indoor and outdoor growing, providing natural aromatherapy benefits.",
    benefits: "Aromatherapy, stress relief, natural insect repellent, promotes relaxation and better sleep",
    care: {
      watering: "Once a week, allow soil to dry between waterings",
      sunlight: "Full sun, 6-8 hours of direct light",
      soil: "Well-drained sandy soil, slightly alkaline"
    },
    difficultyLevel: "Medium",
    lifespan: "15-20 years with proper care"
  },
  {
    id: 12,
    name: "Pothos",
    scientificName: "Epipremnum aureum",
    image: pothosImg,
    description: "Pothos is one of the easiest houseplants to grow, featuring heart-shaped leaves that cascade beautifully. It's excellent for beginners and thrives in various lighting conditions.",
    benefits: "Air purifier, easy to propagate, removes formaldehyde and xylene from air",
    care: {
      watering: "Once a week, when top inch of soil is dry",
      sunlight: "Low to medium indirect light",
      soil: "Well-draining standard potting soil"
    },
    difficultyLevel: "Easy",
    lifespan: "10+ years, can propagate indefinitely"
  },
  {
    id: 13,
    name: "Philodendron",
    scientificName: "Philodendron hederaceum",
    image: philodendronImg,
    description: "The Heartleaf Philodendron is a classic trailing houseplant with glossy, heart-shaped leaves. It's incredibly adaptable and perfect for hanging baskets or climbing support.",
    benefits: "Decorative trailing vine, oxygen boosting, easy care for beginners",
    care: {
      watering: "Once a week, keep soil slightly moist",
      sunlight: "Medium indirect light, tolerates low light",
      soil: "Moist, well-drained potting mix"
    },
    difficultyLevel: "Easy",
    lifespan: "10+ years with proper care"
  },
  {
    id: 14,
    name: "Bamboo Palm",
    scientificName: "Chamaedorea seifrizii",
    image: bambooPalmImg,
    description: "The Bamboo Palm is an elegant indoor palm that brings tropical vibes to any space. It naturally humidifies the air and is excellent for removing common household toxins.",
    benefits: "Natural humidifier, air purifier, adds tropical ambiance, easy maintenance",
    care: {
      watering: "Every 4-5 days, keep soil consistently moist",
      sunlight: "Low to medium indirect light",
      soil: "Peaty, well-draining soil mix"
    },
    difficultyLevel: "Medium",
    lifespan: "10+ years indoors"
  },
  {
    id: 15,
    name: "Chinese Evergreen",
    scientificName: "Aglaonema",
    image: chineseEvergreenImg,
    description: "Chinese Evergreen is prized for its beautiful variegated foliage in shades of green, silver, and pink. It's one of the best plants for low-light conditions.",
    benefits: "Air purifying, thrives in low light, decorative colorful foliage",
    care: {
      watering: "Every 7-10 days, allow soil to dry slightly",
      sunlight: "Low to moderate indirect light",
      soil: "Well-draining potting soil"
    },
    difficultyLevel: "Easy",
    lifespan: "5-10 years with proper care"
  },
  {
    id: 16,
    name: "Croton",
    scientificName: "Codiaeum variegatum",
    image: crotonImg,
    description: "Croton plants are known for their stunning, colorful foliage that changes from green to brilliant yellows, oranges, and reds. They make excellent decorative statement pieces.",
    benefits: "Colorful decorative leaves, enhances interior decor, mood-boosting bright colors",
    care: {
      watering: "Weekly, keep soil evenly moist",
      sunlight: "Bright indirect light for best color",
      soil: "Moist, well-drained potting soil"
    },
    difficultyLevel: "Medium",
    lifespan: "5-8 years indoors"
  },
  {
    id: 17,
    name: "Dumb Cane",
    scientificName: "Dieffenbachia",
    image: dumbCaneImg,
    description: "Dumb Cane features large, attractive leaves with cream and green patterns. It's an excellent choice for adding tropical flair to indoor spaces.",
    benefits: "Ornamental foliage, air purification, adds tropical atmosphere",
    care: {
      watering: "Weekly, keep soil moderately moist",
      sunlight: "Bright indirect light",
      soil: "Rich, well-draining potting mix"
    },
    difficultyLevel: "Medium",
    lifespan: "5-10 years with proper care"
  },
  {
    id: 18,
    name: "Dracaena",
    scientificName: "Dracaena marginata",
    image: dracaenaImg,
    description: "The Dragon Tree is a modern-looking plant with thin, spiky leaves edged in red. It's perfect for contemporary spaces and is very low-maintenance.",
    benefits: "Air cleaner, modern architectural look, removes benzene and formaldehyde",
    care: {
      watering: "Every 2 weeks, drought tolerant",
      sunlight: "Bright filtered light",
      soil: "Loose, well-draining potting soil"
    },
    difficultyLevel: "Easy",
    lifespan: "15+ years, can grow quite tall"
  },
  {
    id: 19,
    name: "Calathea",
    scientificName: "Calathea lancifolia",
    image: calatheaImg,
    description: "Calathea, also known as Rattlesnake Plant, features stunning patterned leaves that fold up at night. It's safe for pets and adds tropical beauty to any room.",
    benefits: "Tropical vibe, pet-safe, prayer plant movement, air humidification",
    care: {
      watering: "Twice a week, keep soil consistently moist",
      sunlight: "Low to medium indirect light",
      soil: "Moisture-retaining, well-draining soil"
    },
    difficultyLevel: "Medium",
    lifespan: "2-5 years indoors"
  },
  {
    id: 20,
    name: "Fiddle Leaf Fig",
    scientificName: "Ficus lyrata",
    image: fiddleLeafFigImg,
    description: "The Fiddle Leaf Fig is a trendy houseplant with large, violin-shaped leaves. It makes a bold statement in any room and can grow into an impressive indoor tree.",
    benefits: "Stylish statement piece, air purifier, Instagram-worthy decor plant",
    care: {
      watering: "Weekly, water when top inch of soil is dry",
      sunlight: "Bright indirect light, some morning sun",
      soil: "Loamy, well-drained potting soil"
    },
    difficultyLevel: "Hard",
    lifespan: "15+ years, can become a large indoor tree"
  }
];