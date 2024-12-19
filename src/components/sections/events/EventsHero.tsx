import { motion } from 'framer-motion';
import Section from '@/components/ui/Section';
import { Sparkles } from 'lucide-react';
import Fireworks from '@/components/sections/hero/Fireworks';

export default function EventsHero() {
  return (
    <Section className="relative min-h-[60vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1514912885225-5c9ec4507bab"
          alt="Eventos pirotécnicos"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
        <Fireworks />
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative text-center max-w-4xl mx-auto"
      >
        <Sparkles className="w-16 h-16 text-yellow-500 mx-auto mb-6" />
        <h1 className="text-4xl md:text-6xl font-bold mb-6">Eventos Profesionales</h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          Creamos experiencias únicas y memorables con pirotecnia profesional para todo tipo de eventos
        </p>
      </motion.div>
    </Section>
  );
}