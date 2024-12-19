import { motion } from 'framer-motion';
import ErrorLayout from '@/components/errors/ErrorLayout';
import { Zap } from 'lucide-react';

export default function Error500() {
  return (
    <ErrorLayout
      title="500"
      description="¡Vaya! Parece que ha habido un cortocircuito en nuestros fuegos artificiales"
    >
      <motion.div
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "linear"
        }}
        className="mb-12"
      >
        <Zap className="h-24 w-24 mx-auto text-yellow-500" />
      </motion.div>
    </ErrorLayout>
  );
}