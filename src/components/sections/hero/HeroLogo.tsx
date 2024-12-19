import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

export default function HeroLogo() {
  return (
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.5 }}
      className="mb-6 md:mb-8"
    >
      <Sparkles className="h-12 w-12 sm:h-16 sm:w-16 md:h-20 md:w-20 text-yellow-500 inline-block" />
    </motion.div>
  );
}