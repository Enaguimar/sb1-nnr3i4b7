import { motion, AnimatePresence } from 'framer-motion';
import { NavigationLink } from '@/types';
import NavLink from './NavLink';
import { useScrollLock } from '@/hooks/useScrollLock';
import { X } from 'lucide-react';
import Container from '@/components/ui/Container';
import Fireworks from '@/components/sections/hero/Fireworks';

interface MobileNavProps {
  isOpen: boolean;
  links: readonly NavigationLink[];
  onClose: () => void;
}

export default function MobileNav({ isOpen, links, onClose }: MobileNavProps) {
  useScrollLock(isOpen);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40 md:hidden"
            onClick={onClose}
          />

          {/* Menu Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed inset-y-0 right-0 w-full bg-black z-50 md:hidden overflow-hidden"
          >
            {/* Fireworks Animation */}
            <div className="absolute inset-0 opacity-50">
              <Fireworks />
            </div>

            <Container className="h-full flex flex-col relative z-10">
              {/* Header */}
              <div className="flex justify-end py-6">
                <button
                  onClick={onClose}
                  className="text-white hover:text-yellow-500 transition"
                >
                  <X className="h-8 w-8" />
                </button>
              </div>

              {/* Navigation Links */}
              <motion.div
                className="flex-1 flex flex-col items-center justify-center gap-8"
                initial="closed"
                animate="open"
                variants={{
                  open: {
                    transition: { staggerChildren: 0.1 }
                  },
                  closed: {
                    transition: { staggerChildren: 0.05, staggerDirection: -1 }
                  }
                }}
              >
                {links.map((link) => (
                  <motion.div
                    key={link.href}
                    variants={{
                      open: {
                        y: 0,
                        opacity: 1,
                        transition: { type: "spring", stiffness: 300, damping: 24 }
                      },
                      closed: { y: 20, opacity: 0 }
                    }}
                  >
                    <NavLink
                      href={link.href}
                      className="text-4xl font-bold hover:text-yellow-500 transition-colors"
                      onClick={onClose}
                    >
                      {link.label}
                    </NavLink>
                  </motion.div>
                ))}
              </motion.div>

              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="py-8 text-center"
              >
                <p className="text-gray-400 mb-2">¿Necesitas ayuda?</p>
                <a
                  href="tel:+34650351098"
                  className="text-yellow-500 hover:text-yellow-400 transition font-bold text-xl"
                >
                  +34 650 351 098
                </a>
              </motion.div>
            </Container>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}