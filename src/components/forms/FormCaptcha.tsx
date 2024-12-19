import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

interface FormCaptchaProps {
  onVerify: (verified: boolean) => void;
}

export default function FormCaptcha({ onVerify }: FormCaptchaProps) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVerified, setIsVerified] = useState(false);
  const [target, setTarget] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setTarget({
      x: Math.random() * 200 - 100,
      y: Math.random() * 200 - 100
    });
  }, []);

  const handleDragEnd = () => {
    const distance = Math.sqrt(
      Math.pow(position.x - target.x, 2) + Math.pow(position.y - target.y, 2)
    );
    
    if (distance < 20) {
      setIsVerified(true);
      onVerify(true);
    } else {
      setPosition({ x: 0, y: 0 });
    }
  };

  if (isVerified) {
    return (
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="bg-green-500/20 p-4 rounded-lg text-center"
      >
        <Sparkles className="h-6 w-6 text-green-500 mx-auto mb-2" />
        <p className="text-green-500 font-medium">¡Verificación completada!</p>
      </motion.div>
    );
  }

  return (
    <div className="bg-gray-800/50 p-6 rounded-lg">
      <p className="text-sm text-gray-300 mb-4 text-center">
        Arrastra la chispa hasta la mecha para verificar
      </p>
      
      <div className="relative h-48 bg-gray-900/50 rounded-lg overflow-hidden">
        <motion.div
          className="absolute"
          style={{ left: target.x + 100, top: target.y + 100 }}
        >
          <div className="w-4 h-12 bg-yellow-900 rounded-full" />
        </motion.div>

        <motion.div
          drag
          dragConstraints={{ left: -100, right: 100, top: -100, bottom: 100 }}
          dragElastic={0.1}
          onDragEnd={handleDragEnd}
          animate={position}
          className="absolute cursor-grab active:cursor-grabbing"
          style={{ left: 100, top: 100 }}
        >
          <Sparkles className="h-8 w-8 text-yellow-500" />
        </motion.div>
      </div>
    </div>
  );
}