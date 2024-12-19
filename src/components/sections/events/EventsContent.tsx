import { motion } from 'framer-motion';

export default function EventsContent() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-4xl font-bold mb-6">BODAS Y CELEBRACIONES</h2>
      <p className="text-gray-300 mb-8">
        Si quieres que tu celebración sea única! No dudes en contactarnos. Llevamos más de 10 años
        creando emociones y momentos inigualables. Además, podemos adaptarnos a casi cualquier presupuesto.
      </p>
      <h3 className="text-2xl font-bold mb-4 text-yellow-500">EVENTOS</h3>
      <p className="text-gray-300">
        Si eres profesional del sector, y quieres presupuesto o consejo, no dudes en contactarnos.
        Creamos escenarios únicos con el uso de la pirotecnia recreativa de alta calidad.
      </p>
    </motion.div>
  );
}