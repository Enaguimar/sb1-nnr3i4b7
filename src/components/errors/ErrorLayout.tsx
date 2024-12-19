import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import Fireworks from '@/components/sections/hero/Fireworks';
import Button from '@/components/ui/Button';
import { useNavigate } from 'react-router-dom';

interface ErrorLayoutProps {
  title: string;
  description: string;
  children?: ReactNode;
}

export default function ErrorLayout({ title, description, children }: ErrorLayoutProps) {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center relative overflow-hidden">
      <Fireworks />
      
      <div className="relative z-10 text-center px-4 max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-8xl md:text-9xl font-black text-yellow-500 mb-8">
            {title}
          </h1>
          
          <p className="text-xl md:text-2xl text-white mb-12">
            {description}
          </p>

          {children}

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button onClick={() => navigate(-1)}>
              Volver Atrás
            </Button>
            <Button onClick={() => navigate('/')}>
              Ir al Inicio
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}