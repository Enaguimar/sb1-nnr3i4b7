import { useDocumentMeta } from '@/hooks/useDocumentMeta';
import Section from '@/components/ui/Section';
import LegalContent from './components/LegalContent';
import { privacidadContent } from './content/privacidad';

export default function Privacidad() {
  useDocumentMeta({
    title: 'Política de Privacidad',
    description: 'Política de privacidad de Kastillikos Pyrofantasía',
    keywords: 'política privacidad, protección datos, RGPD'
  });

  return (
    <div className="pt-20 bg-gray-900 text-white">
      <Section>
        <LegalContent title="Política de Privacidad" content={privacidadContent} />
      </Section>
    </div>
  );
}