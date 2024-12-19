import { motion } from 'framer-motion';
import ErrorLayout from '@/components/errors/ErrorLayout';
import { Flame } from 'lucide-react';

export default function Error404() {
  return (
    <ErrorLayout
      title="404"
      description="¡Ups! Parece que esta página se ha esfumado como un fuego artificial"
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          duration: 0.5,
          repeat: Infinity,
          repeatType: "reverse"
        }}
        className="mb-12"
      >
        <Flame className="h-24 w-24 mx-auto text-yellow-500" />
      </motion.div>
    </ErrorLayout>
  );
}