import { heroImages } from './sections/hero';
import { productImages } from './sections/products';
import { eventImages } from './sections/events';
import { weddingImages } from './sections/weddings';

export const images = {
  hero: heroImages,
  products: productImages,
  events: eventImages,
  weddings: weddingImages,
} as const;