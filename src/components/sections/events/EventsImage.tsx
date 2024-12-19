import { motion } from 'framer-motion';
import Image from '@/components/ui/Image';

interface EventsImageProps {
  image: string;
}

export default function EventsImage({ image }: EventsImageProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="relative h-[500px]"
    >
      <Image
        src={image}
        alt="Celebración con fuegos artificiales"
        fill
        className="rounded-lg object-cover"
      />
    </motion.div>
  );
}