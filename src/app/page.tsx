import Hero from '@/components/Hero';
import ProductCategories from '@/components/ProductCategories';
import EventsSection from '@/components/EventsSection';
import ContactSection from '@/components/ContactSection';

export default function Home() {
  return (
    <>
      <Hero />
      <ProductCategories />
      <EventsSection />
      <ContactSection />
    </>
  );
}