import { Routes, Route } from 'react-router-dom';
import PageTransition from '@/components/transitions/PageTransition';

// Pages
import Home from '@/pages/Home';
import Products from '@/pages/Products';
import Weddings from '@/pages/Weddings';
import Events from '@/pages/Events';
import Contact from '@/pages/Contact';

// Legal Pages
import AvisoLegal from '@/pages/legal/AvisoLegal';
import Privacidad from '@/pages/legal/Privacidad';
import Cookies from '@/pages/legal/Cookies';

// Error Pages
import Error404 from '@/pages/errors/Error404';
import Error500 from '@/pages/errors/Error500';
import Error503 from '@/pages/errors/Error503';

export default function AppRoutes() {
  return (
    <PageTransition>
      <Routes>
        {/* Main Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/productos" element={<Products />} />
        <Route path="/bodas" element={<Weddings />} />
        <Route path="/eventos" element={<Events />} />
        <Route path="/contacto" element={<Contact />} />

        {/* Legal Routes */}
        <Route path="/aviso-legal" element={<AvisoLegal />} />
        <Route path="/privacidad" element={<Privacidad />} />
        <Route path="/cookies" element={<Cookies />} />

        {/* Error Routes */}
        <Route path="/500" element={<Error500 />} />
        <Route path="/503" element={<Error503 />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </PageTransition>
  );
}