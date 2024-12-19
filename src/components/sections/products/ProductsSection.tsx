import Section from '@/components/ui/Section';
import ProductGrid from './ProductGrid';

export default function ProductsSection() {
  return (
    <Section className="bg-gray-900">
      <h2 className="text-4xl font-bold text-center mb-12 text-white">
        Nuestros Productos
      </h2>
      <ProductGrid />
    </Section>
  );
}