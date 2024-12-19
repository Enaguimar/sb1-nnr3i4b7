import Section from '@/components/ui/Section';
import EventsContent from './EventsContent';
import EventsImage from './EventsImage';
import { images } from '@/lib/constants/images';

export default function EventsSection() {
  return (
    <Section className="bg-black text-white">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <EventsContent />
        <EventsImage image={images.events.main} />
      </div>
    </Section>
  );
}