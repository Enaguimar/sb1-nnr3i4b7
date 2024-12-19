import { motion } from 'framer-motion';
import Section from '@/components/ui/Section';
import { Heart } from 'lucide-react';

export default function WeddingsHero() {
  return (
    <Section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1530214977145-39d8c7b7a2f8')] bg-cover bg-center bg-no-repeat" />
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative text-center max-w-4xl mx-auto"
      >
        <Heart className="w-16 h-16 text-yellow-500 mx-auto mb-6" />
        <h1 className="text-4xl md:text-6xl font-bold mb-6">Bodas y Celebraciones</h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          Creamos momentos mágicos que perdurarán para siempre en tu memoria
        </p>
      </motion.div>
    </Section>
  );
}