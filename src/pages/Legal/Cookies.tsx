import { useDocumentMeta } from '@/hooks/useDocumentMeta';
import Section from '@/components/ui/Section';
import LegalContent from './components/LegalContent';
import { cookiesContent } from './content/cookies';

export default function Cookies() {
  useDocumentMeta({
    title: 'Política de Cookies',
    description: 'Política de cookies de Kastillikos Pyrofantasía',
    keywords: 'política cookies, cookies, privacidad web'
  });

  return (
    <div className="pt-20 bg-gray-900 text-white">
      <Section>
        <LegalContent title="Política de Cookies" content={cookiesContent} />
      </Section>
    </div>
  );
}