import { motion } from 'framer-motion';
import Section from '@/components/ui/Section';
import { Calendar, Music, Star, Users, Award, Rocket } from 'lucide-react';

const categories = [
  {
    icon: Calendar,
    title: 'Eventos Corporativos',
    description: 'Efectos especiales para presentaciones y eventos empresariales'
  },
  {
    icon: Music,
    title: 'Festivales',
    description: 'Pirotecnia sincronizada con música para festivales'
  },
  {
    icon: Star,
    title: 'Espectáculos',
    description: 'Shows pirotécnicos para todo tipo de espectáculos'
  },
  {
    icon: Users,
    title: 'Fiestas Privadas',
    description: 'Efectos personalizados para celebraciones íntimas'
  },
  {
    icon: Award,
    title: 'Competiciones',
    description: 'Efectos especiales para eventos deportivos y premiaciones'
  },
  {
    icon: Rocket,
    title: 'Inauguraciones',
    description: 'Pirotecnia espectacular para inauguraciones y aperturas'
  }
] as const;

export default function EventsCategories() {
  return (
    <Section className="bg-black/50">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold text-center mb-12"
      >
        Nuestros Servicios
      </motion.h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {categories.map((category, index) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl group hover:bg-gray-800/70 transition-all"
          >
            <category.icon className="h-12 w-12 text-yellow-500 mb-6 group-hover:scale-110 transition-transform" />
            <h3 className="text-xl font-bold mb-3">{category.title}</h3>
            <p className="text-gray-300">{category.description}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}