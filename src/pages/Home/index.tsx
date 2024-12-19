import { useDocumentMeta } from '@/hooks/useDocumentMeta';
import Hero from './sections/Hero';
import Products from './sections/Products';
import Events from './sections/Events';
import Contact from './sections/Contact';

export default function Home() {
  useDocumentMeta({
    title: 'Tienda de Pirotecnia en Yecla',
    description: 'Kastillikos Pyrofantasía - Tienda de pirotecnia recreativa en Yecla. Especialistas en bodas, eventos y celebraciones.',
    keywords: 'pirotecnia, fuegos artificiales, petardos, truenos, Yecla, eventos, bodas'
  });

  return (
    <>
      <Hero />
      <Products />
      <Events />
      <Contact />
    </>
  );
}