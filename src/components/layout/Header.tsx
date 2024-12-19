import { useState } from 'react';
import { Menu } from 'lucide-react';
import Container from '@/components/ui/Container';
import Logo from './navigation/Logo';
import DesktopNav from './navigation/DesktopNav';
import MobileNav from './navigation/MobileNav';
import { navigationLinks } from '@/lib/constants/navigation';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed w-full bg-black/90 backdrop-blur-sm z-30">
        <Container>
          <nav className="py-4">
            <div className="flex items-center justify-between">
              <Logo />
              <DesktopNav />
              <button
                className="md:hidden text-white hover:text-yellow-500 transition"
                onClick={() => setIsMenuOpen(true)}
              >
                <Menu className="h-6 w-6" />
              </button>
            </div>
          </nav>
        </Container>
      </header>
      <MobileNav
        isOpen={isMenuOpen}
        links={navigationLinks}
        onClose={() => setIsMenuOpen(false)}
      />
    </>
  );
}