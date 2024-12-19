import { useDocumentMeta } from '@/hooks/useDocumentMeta';
import { motion } from 'framer-motion';
import Section from '@/components/ui/Section';
import ContactInfo from '@/components/sections/contact/ContactInfo';
import BudgetRequestForm from '@/components/forms/BudgetRequestForm';
import ContactMap from '@/components/sections/contact/ContactMap';

export default function Contact() {
  useDocumentMeta({
    title: 'Contacto',
    description: 'Contacta con Kastillikos Pyrofantasía. Solicita presupuesto para tu evento o celebración. Expertos en pirotecnia recreativa en Yecla.',
    keywords: 'contacto pirotecnia, presupuesto fuegos artificiales, pirotecnia Yecla, contactar'
  });

  return (
    <div className="pt-20 bg-gray-900 text-white">
      <Section>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-4">Contacto</h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Estamos aquí para ayudarte. Contáctanos para cualquier consulta.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <ContactInfo />
          <BudgetRequestForm />
        </div>

        <ContactMap />
      </Section>
    </div>
  );
}