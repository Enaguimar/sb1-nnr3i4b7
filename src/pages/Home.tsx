import { useDocumentMeta } from '@/hooks/useDocumentMeta';
import Hero from '@/components/sections/hero/Hero';
import ProductsSection from '@/components/sections/products/ProductsSection';
import EventsSection from '@/components/sections/EventsSection';
import ContactSection from '@/components/sections/contact/ContactSection';

export default function Home() {
  useDocumentMeta({
    title: 'Tienda de Pirotecnia en Yecla',
    description: 'Kastillikos Pyrofantasía - Tienda de pirotecnia recreativa en Yecla. Especialistas en bodas, eventos y celebraciones. Productos pirotécnicos de clase 1, 2 y 3.',
    keywords: 'pirotecnia, fuegos artificiales, petardos, truenos, Yecla, eventos, bodas'
  });

  return (
    <>
      <Hero />
      <ProductsSection />
      <EventsSection />
      <ContactSection />
    </>
  );
}