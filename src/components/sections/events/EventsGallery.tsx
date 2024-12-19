import { motion } from 'framer-motion';
import Section from '@/components/ui/Section';
import Image from '@/components/ui/Image';

const gallery = [
  {
    title: 'Festivales de Música',
    description: 'Efectos sincronizados con el ritmo',
    image: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3'
  },
  {
    title: 'Eventos Deportivos',
    description: 'Celebraciones espectaculares',
    image: 'https://images.unsplash.com/photo-1514912885225-5c9ec4507bab'
  },
  {
    title: 'Fiestas Corporativas',
    description: 'Momentos inolvidables',
    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30'
  }
] as const;

export default function EventsGallery() {
  return (
    <Section>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold text-center mb-12"
      >
        Galería de Eventos
      </motion.h2>

      <div className="grid lg:grid-cols-3 gap-8">
        {gallery.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative overflow-hidden rounded-xl"
          >
            <div className="aspect-[4/3] relative">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-300">{item.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}