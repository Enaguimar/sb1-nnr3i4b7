import { motion } from 'framer-motion';
import Section from '@/components/ui/Section';
import { Sparkles, Clock, Heart, Music } from 'lucide-react';

const features = [
  {
    icon: Sparkles,
    title: 'Efectos Personalizados',
    description: 'Diseñamos efectos únicos adaptados a tu celebración'
  },
  {
    icon: Clock,
    title: 'Momentos Clave',
    description: 'Realzamos los momentos más especiales de tu evento'
  },
  {
    icon: Heart,
    title: 'Experiencia',
    description: '10+ años creando momentos inolvidables'
  },
  {
    icon: Music,
    title: 'Sincronización',
    description: 'Efectos coordinados con tu música favorita'
  }
] as const;

export default function WeddingsFeatures() {
  return (
    <Section className="bg-black/50">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl text-center group hover:bg-gray-800/70 transition-colors"
          >
            <feature.icon className="h-12 w-12 text-yellow-500 mx-auto mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
            <p className="text-gray-300">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}