import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Section from '@/components/ui/Section';
import Button from '@/components/ui/Button';

export default function EventsContact() {
  return (
    <Section className="bg-black/50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-center max-w-3xl mx-auto"
      >
        <h2 className="text-3xl font-bold mb-6">¿Preparando un Evento?</h2>
        <p className="text-gray-300 mb-12">
          Déjanos ayudarte a crear un espectáculo único. Nuestro equipo de expertos diseñará
          una experiencia personalizada que hará tu evento verdaderamente memorable.
        </p>
        <Link to="/contacto">
          <Button size="lg">
            Solicitar Presupuesto
          </Button>
        </Link>
      </motion.div>
    </Section>
  );
}