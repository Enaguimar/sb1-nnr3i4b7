import { motion } from 'framer-motion';
import Section from '@/components/ui/Section';
import Image from '@/components/ui/Image';

const moments = [
  {
    title: 'Entrada de los Novios',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552'
  },
  {
    title: 'Primer Baile',
    image: 'https://images.unsplash.com/photo-1546193430-c2d207739ed3'
  },
  {
    title: 'Corte de la Tarta',
    image: 'https://images.unsplash.com/photo-1528712306091-ed0763094c98'
  }
] as const;

export default function WeddingsGallery() {
  return (
    <Section>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold text-center mb-12"
      >
        Momentos Especiales
      </motion.h2>
      
      <div className="grid md:grid-cols-3 gap-8">
        {moments.map((moment, index) => (
          <motion.div
            key={moment.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative group"
          >
            <div className="aspect-[4/3] relative overflow-hidden rounded-xl">
              <Image
                src={moment.image}
                alt={moment.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute inset-0 flex items-end p-6">
                <h3 className="text-xl font-bold text-white">{moment.title}</h3>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}