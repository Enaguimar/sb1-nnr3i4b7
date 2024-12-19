import { productCategories } from '@/lib/constants/products';
import ProductCard from './ProductCard';

export default function ProductGrid() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {productCategories.map((category, index) => (
        <ProductCard
          key={category.id}
          name={category.name}
          description={category.description}
          image={category.image}
          icon={category.icon}
          index={index}
        />
      ))}
    </div>
  );
}