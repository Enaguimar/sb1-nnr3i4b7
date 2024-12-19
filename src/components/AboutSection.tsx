import Image from 'next/image';
import { motion } from 'framer-motion';

export default function AboutSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-6">Nuestra Historia</h2>
            <p className="text-gray-600 mb-4">
              Desde hace generaciones, en Kastillikos nos dedicamos a preservar los sabores auténticos
              de la gastronomía castellana. Nuestros productos son el resultado de años de tradición
              y el compromiso con la calidad artesanal.
            </p>
            <p className="text-gray-600">
              Trabajamos directamente con productores locales para garantizar la mejor calidad en
              cada uno de nuestros productos, manteniendo vivas las recetas tradicionales de nuestra tierra.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative h-[400px]"
          >
            <Image
              src="https://images.unsplash.com/photo-1595475207225-428b62bda831"
              alt="Tradición artesanal"
              fill
              className="object-cover rounded-lg"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}