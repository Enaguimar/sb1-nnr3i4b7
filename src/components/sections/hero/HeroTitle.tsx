import { motion } from 'framer-motion';

export default function HeroTitle() {
  return (
    <motion.h1 
      className="text-5xl xs:text-6xl sm:text-7xl md:text-8xl font-black tracking-tight leading-none mb-8 md:mb-10"
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.3, duration: 0.5 }}
    >
      <span className="text-white block mb-2 md:mb-4">PIROTÉCNIA</span>
      <span className="text-yellow-500 block">RECREATIVA</span>
    </motion.h1>
  );
}