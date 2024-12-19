import { useDocumentMeta } from '@/hooks/useDocumentMeta';
import Section from '@/components/ui/Section';
import LegalContent from './components/LegalContent';
import { avisoLegalContent } from './content/avisoLegal';

export default function AvisoLegal() {
  useDocumentMeta({
    title: 'Aviso Legal',
    description: 'Aviso legal de Kastillikos Pyrofantasía',
    keywords: 'aviso legal, términos legales, condiciones uso'
  });

  return (
    <div className="pt-20 bg-gray-900 text-white">
      <Section>
        <LegalContent title="Aviso Legal" content={avisoLegalContent} />
      </Section>
    </div>
  );
}