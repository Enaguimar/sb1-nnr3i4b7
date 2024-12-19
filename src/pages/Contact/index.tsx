import { useDocumentMeta } from '@/hooks/useDocumentMeta';
import ContactHero from './sections/ContactHero';
import ContactForm from './sections/ContactForm';
import ContactMap from './sections/ContactMap';

export default function Contact() {
  useDocumentMeta({
    title: 'Contacto',
    description: 'Contacta con Kastillikos Pyrofantasía. Solicita presupuesto para tu evento.',
    keywords: 'contacto pirotecnia, presupuesto fuegos artificiales, pirotecnia Yecla'
  });

  return (
    <div className="pt-20 bg-gray-900 text-white">
      <ContactHero />
      <ContactForm />
      <ContactMap />
    </div>
  );
}