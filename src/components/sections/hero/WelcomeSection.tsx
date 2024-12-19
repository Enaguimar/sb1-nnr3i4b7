import { motion } from 'framer-motion';
import Container from '@/components/ui/Container';

export default function WelcomeSection() {
  return (
    <Container className="py-16 bg-gray-900/80 backdrop-blur-sm relative z-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="max-w-4xl mx-auto text-center text-white"
      >
        <h2 className="text-3xl font-bold mb-6 text-yellow-500">
          Bienvenidos a Kastillikos Pyrofantasía
        </h2>
        <p className="text-lg leading-relaxed">
          Somos una tienda de pirotecnia recreativa ubicada en Yecla. Disponemos de todo tipo de productos pirotécnicos tanto de clase 1, 2 y 3.
        </p>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          <div className="bg-black/30 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2 text-yellow-500">Clase 1</h3>
            <p>Para jóvenes de 12 a 16 años</p>
          </div>
          <div className="bg-black/30 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2 text-yellow-500">Clase 2</h3>
            <p>Para jóvenes de 16 a 18 años</p>
          </div>
          <div className="bg-black/30 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2 text-yellow-500">Clase 3</h3>
            <p>Para mayores de 18 años y más experimentados</p>
          </div>
        </div>
      </motion.div>
    </Container>
  );
}