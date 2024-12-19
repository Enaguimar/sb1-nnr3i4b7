import { useDocumentMeta } from '@/hooks/useDocumentMeta';
import EventsHero from './sections/EventsHero';
import EventsCategories from './sections/EventsCategories';
import EventsGallery from './sections/EventsGallery';
import EventsContact from './sections/EventsContact';

export default function Events() {
  useDocumentMeta({
    title: 'Eventos y Espectáculos Pirotécnicos',
    description: 'Creamos experiencias únicas con pirotecnia profesional para todo tipo de eventos.',
    keywords: 'eventos pirotécnicos, espectáculos pirotécnicos, fuegos artificiales eventos'
  });

  return (
    <div className="pt-20 bg-gray-900 text-white">
      <EventsHero />
      <EventsCategories />
      <EventsGallery />
      <EventsContact />
    </div>
  );
}