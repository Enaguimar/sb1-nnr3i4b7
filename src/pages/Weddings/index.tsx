import { useDocumentMeta } from '@/hooks/useDocumentMeta';
import WeddingsHero from './sections/WeddingsHero';
import WeddingsFeatures from './sections/WeddingsFeatures';
import WeddingsGallery from './sections/WeddingsGallery';
import WeddingsContact from './sections/WeddingsContact';

export default function Weddings() {
  useDocumentMeta({
    title: 'Pirotecnia para Bodas',
    description: 'Haz que tu boda sea inolvidable con nuestros efectos pirotécnicos.',
    keywords: 'pirotecnia bodas, fuegos artificiales boda, efectos especiales boda'
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