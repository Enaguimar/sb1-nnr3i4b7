import Image from 'next/image';
import { motion } from 'framer-motion';

const products = [
  {
    id: 1,
    name: 'Embutidos Artesanales',
    description: 'Selección de embutidos tradicionales castellanos',
    image: 'https://images.unsplash.com/photo-1542901031-ec5eeb518506'
  },
  {
    id: 2,
    name: 'Quesos Curados',
    description: 'Quesos artesanales de oveja y cabra',
    image: 'https://images.unsplash.com/photo-1452195100486-9cc805987862'
  },
  {
    id: 3,
    name: 'Conservas',
    description: 'Conservas tradicionales de la región',
    image: 'https://images.unsplash.com/photo-1534483509719-3feaee7c30da'
  }
];

export default function ProductSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Nuestros Productos</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white rounded-lg overflow-hidden shadow-lg"
            >
              <div className="relative h-64">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                <p className="text-gray-600">{product.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}