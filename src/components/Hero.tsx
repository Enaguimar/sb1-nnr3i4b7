import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative h-screen">
      <img
        src="https://images.unsplash.com/photo-1498931299472-f7a63a5a1cfa"
        alt="Fuegos artificiales"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/50" />
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div 
          className="text-center text-white px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            PIROTÉCNIA RECREATIVA
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Bienvenidos a Kastillikos Pyrofantasía! Somos una tienda de pirotecnia recreativa ubicada en Yecla.
            Disponemos de todo tipo de productos pirotécnicos de clase 1, 2 y 3.
          </p>
          <button className="bg-yellow-500 text-black px-8 py-3 rounded-full text-lg hover:bg-yellow-400 transition font-bold">
            Ver Catálogo
          </button>
        </motion.div>
      </div>
    </section>
  );
}