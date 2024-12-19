import { useDocumentMeta } from '@/hooks/useDocumentMeta';
import { motion } from 'framer-motion';
import { productCategories } from '@/lib/constants/products';
import ProductCard from '@/components/ProductCard';

export default function Products() {
  useDocumentMeta({
    title: 'Productos Pirotécnicos',
    description: 'Descubre nuestra amplia gama de productos pirotécnicos: truenos, fuentes de colores, baterías, humo de colores y más. Productos de clase 1, 2 y 3.',
    keywords: 'truenos, petardos, fuentes de colores, baterías pirotécnicas, humo de colores, cohetes'
  });

  return (
    <div className="py-24 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h1 
          className="text-4xl font-bold text-center mb-12 text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Nuestros Productos
        </motion.h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {productCategories.map((category, index) => (
            <ProductCard key={category.id} product={category} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}