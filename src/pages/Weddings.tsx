import { useDocumentMeta } from '@/hooks/useDocumentMeta';
import WeddingsHero from '@/components/sections/weddings/WeddingsHero';
import WeddingsFeatures from '@/components/sections/weddings/WeddingsFeatures';
import WeddingsGallery from '@/components/sections/weddings/WeddingsGallery';
import WeddingsContact from '@/components/sections/weddings/WeddingsContact';

export default function Weddings() {
  useDocumentMeta({
    title: 'Pirotecnia para Bodas',
    description: 'Haz que tu boda sea inolvidable con nuestros efectos pirotécnicos. Especialistas en pirotecnia para bodas y celebraciones en Yecla y alrededores.',
    keywords: 'pirotecnia bodas, fuegos artificiales boda, efectos especiales boda, celebraciones, eventos'
  });

  return (
    <div className="pt-20 bg-gray-900 text-white">
      <WeddingsHero />
      <WeddingsFeatures />
      <WeddingsGallery />
      <WeddingsContact />
    </div>
  );
}