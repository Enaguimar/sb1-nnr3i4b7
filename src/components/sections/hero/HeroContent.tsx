import { motion } from 'framer-motion';
import HeroLogo from './HeroLogo';
import HeroTitle from './HeroTitle';
import HeroActions from './HeroActions';

export default function HeroContent() {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <motion.div 
        className="w-full px-4 sm:px-6 md:px-8 max-w-[90vw] md:max-w-2xl lg:max-w-4xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="text-center">
          <HeroLogo />
          <HeroTitle />
          <HeroActions />
        </div>
      </motion.div>
    </div>
  );
}