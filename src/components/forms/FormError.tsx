import { motion } from 'framer-motion';
import { AlertTriangle } from 'lucide-react';

export default function FormError() {
  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      className="bg-red-500/20 p-4 rounded-lg text-center"
    >
      <motion.div
        animate={{ 
          rotate: [-10, 10]
        }}
        transition={{ 
          duration: 0.5,
          repeat: 3,
          repeatType: "reverse"
        }}
      >
        <AlertTriangle className="h-6 w-6 text-red-500 mx-auto mb-2" />
      </motion.div>
      <p className="text-red-500 font-medium">
        Ha ocurrido un error. Por favor, inténtalo de nuevo.
      </p>
    </motion.div>
  );
}