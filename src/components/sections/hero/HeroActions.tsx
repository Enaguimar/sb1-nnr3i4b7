import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Button from '@/components/ui/Button';

export default function HeroActions() {
  return (
    <motion.div 
      className="space-y-6 md:space-y-8"
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.4, duration: 0.5 }}
    >
      <Link to="/contacto">
        <Button 
          size="lg" 
          className="w-full sm:w-auto text-base sm:text-lg px-8 py-4 sm:min-w-[200px]"
        >
          CONTÁCTANOS
        </Button>
      </Link>
      <p className="text-lg sm:text-xl md:text-2xl font-bold text-yellow-500 tracking-wide animate-pulse">
        CREANDO MOMENTOS MÁGICOS
      </p>
    </motion.div>
  );
}