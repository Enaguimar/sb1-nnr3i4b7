import { motion } from 'framer-motion';
import ErrorLayout from '@/components/errors/ErrorLayout';
import { Timer } from 'lucide-react';

export default function Error503() {
  return (
    <ErrorLayout
      title="503"
      description="Estamos preparando un nuevo espectáculo. ¡Vuelve en unos minutos!"
    >
      <motion.div
        initial={{ scale: 1 }}
        animate={{ scale: 1.2 }}
        transition={{
          duration: 1,
          repeat: Infinity,
          repeatType: "reverse"
        }}
        className="mb-12"
      >
        <Timer className="h-24 w-24 mx-auto text-yellow-500" />
      </motion.div>
    </ErrorLayout>
  );
}