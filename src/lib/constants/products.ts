import { Volume2, Sparkles, Box, Palette, Rocket, Heart } from 'lucide-react';
import { images } from './images';

export const productCategories = [
  {
    id: 1,
    name: 'TRUENOS',
    description: 'Los Truenos son conocidos popularmente como los petardos, ya que producen un gran impacto sonoro. Disponemos de Carpinteros, Cubanitos y Megatrons.',
    icon: Volume2,
    image: images.products.truenos
  },
  {
    id: 2,
    name: 'FUENTES DE COLORES',
    description: 'Las fuentes de colores son realmente un espectáculo! Generan distintos tipos de efectos visuales y sonoros que provocan el centro de todas las miradas.',
    icon: Sparkles,
    image: images.products.fuentes
  },
  {
    id: 3,
    name: 'BATERÍAS',
    description: 'Las baterías pirotécnicas son cajas preparadas para crear un gran efecto en el cielo, tanto luminoso como acústico. Disponemos de baterías de hasta más de 300 disparos.',
    icon: Box,
    image: images.products.baterias
  },
  {
    id: 4,
    name: 'HUMO DE COLORES',
    description: 'El humo es unos de los productos más demandados en la actualidad para todo tipo de eventos por su singularidad para crear unas imágenes únicas para tus montajes fotográficos y videos.',
    icon: Palette,
    image: images.products.humo
  },
  {
    id: 5,
    name: 'COHETES',
    description: 'Disponemos de cohetes de clase 2 y clase 3 con distintos efectos de silbidos, truenos, luz y colores. Además disponemos de cohetes de gran potencia.',
    icon: Rocket,
    image: images.products.cohetes
  },
  {
    id: 6,
    name: 'ARTÍCULOS INFANTILES',
    description: 'Además, disponemos de un gran surtido de artículos infantiles, para no olvidarnos de los más peques de la fiesta como bombetas, bengalas…',
    icon: Heart,
    image: images.products.infantiles
  }
] as const;