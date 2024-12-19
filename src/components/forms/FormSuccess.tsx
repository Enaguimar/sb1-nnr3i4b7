import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

export default function FormSuccess() {
  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      className="text-center py-12"
    >
      <motion.div
        animate={{ 
          rotate: [0, 360],
          scale: [1, 1.2, 1]
        }}
        transition={{ 
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse"
        }}
        className="mb-6"
      >
        <Sparkles className="h-16 w-16 text-yellow-500 mx-auto" />
      </motion.div>
      
      <h3 className="text-2xl font-bold text-yellow-500 mb-4">
        ¡Mensaje Enviado!
      </h3>
      <p className="text-gray-300">
        Gracias por contactar con nosotros. Te responderemos lo antes posible.
      </p>
    </motion.div>
  );
}