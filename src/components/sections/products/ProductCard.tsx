import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';
import Image from '@/components/ui/Image';

interface ProductCardProps {
  name: string;
  description: string;
  image: string;
  icon: LucideIcon;
  index: number;
}

export default function ProductCard({ name, description, image, icon: Icon, index }: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-gray-800 rounded-lg overflow-hidden group hover:scale-105 transition duration-300"
    >
      <div className="relative h-48">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-colors" />
        <div className="absolute inset-0 flex items-center justify-center">
          <Icon className="h-12 w-12 text-yellow-500" />
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-yellow-500">{name}</h3>
        <p className="text-gray-300">{description}</p>
      </div>
    </motion.div>
  );
}