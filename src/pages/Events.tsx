import { useDocumentMeta } from '@/hooks/useDocumentMeta';
import EventsHero from '@/components/sections/events/EventsHero';
import EventsCategories from '@/components/sections/events/EventsCategories';
import EventsGallery from '@/components/sections/events/EventsGallery';
import EventsContact from '@/components/sections/events/EventsContact';

export default function Events() {
  useDocumentMeta({
    title: 'Eventos y Espectáculos Pirotécnicos',
    description: 'Creamos experiencias únicas con pirotecnia profesional para todo tipo de eventos: corporativos, festivales, espectáculos y celebraciones.',
    keywords: 'eventos pirotécnicos, espectáculos pirotécnicos, fuegos artificiales eventos, pirotecnia profesional'
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