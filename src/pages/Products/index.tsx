import { useDocumentMeta } from '@/hooks/useDocumentMeta';
import ProductsHero from './sections/ProductsHero';
import ProductsGrid from './sections/ProductsGrid';
import ProductsContact from './sections/ProductsContact';

export default function Products() {
  useDocumentMeta({
    title: 'Productos Pirotécnicos',
    description: 'Descubre nuestra amplia gama de productos pirotécnicos: truenos, fuentes de colores, baterías y más.',
    keywords: 'truenos, petardos, fuentes de colores, baterías pirotécnicas, humo de colores, cohetes'
  });

  return (
    <div className="pt-20 bg-gray-900">
      <ProductsHero />
      <ProductsGrid />
      <ProductsContact />
    </div>
  );
}