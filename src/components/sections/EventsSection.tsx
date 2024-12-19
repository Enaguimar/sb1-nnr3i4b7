import { motion } from 'framer-motion';
import Image from '@/components/ui/Image';

export default function EventsSection() {
  return (
    <section className="py-20 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-6">BODAS Y CELEBRACIONES</h2>
            <p className="text-gray-300 mb-4">
              Si quieres que tu celebración sea única, no dudes en contactarnos. Llevamos más de 10 años
              creando emociones y momentos inigualables. Además, podemos adaptarnos a casi cualquier presupuesto.
            </p>
            <h3 className="text-2xl font-bold mb-4 text-yellow-500">EVENTOS PROFESIONALES</h3>
            <p className="text-gray-300">
              Si eres profesional del sector y quieres presupuesto o consejo, no dudes en contactarnos.
              Creamos escenarios únicos con el uso de la pirotecnia recreativa de alta calidad.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative h-[500px]"
          >
            <Image
              src="https://images.unsplash.com/photo-1530214977145-39d8c7b7a2f8"
              alt="Celebración con fuegos artificiales"
              fill
              className="rounded-lg"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}