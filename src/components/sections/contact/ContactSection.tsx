import Section from '@/components/ui/Section';
import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';

export default function ContactSection() {
  return (
    <Section className="bg-gray-900 text-white">
      <h2 className="text-4xl font-bold text-center mb-12">¿Buscas algo especial?</h2>
      <div className="grid md:grid-cols-2 gap-12">
        <ContactInfo />
        <ContactForm />
      </div>
    </Section>
  );
}