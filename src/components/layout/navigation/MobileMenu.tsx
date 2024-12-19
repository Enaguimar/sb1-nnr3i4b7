import { NavigationLink } from '@/types';
import NavLink from './NavLink';
import { useScrollLock } from '@/hooks/useScrollLock';

interface MobileMenuProps {
  isOpen: boolean;
  links: NavigationLink[];
}

export default function MobileMenu({ isOpen, links }: MobileMenuProps) {
  useScrollLock(isOpen);

  if (!isOpen) return null;

  return (
    <div className="md:hidden pt-4 pb-3">
      <div className="flex flex-col space-y-3">
        {links.map((link) => (
          <NavLink key={link.href} href={link.href}>
            {link.label}
          </NavLink>
        ))}
      </div>
    </div>
  );
}