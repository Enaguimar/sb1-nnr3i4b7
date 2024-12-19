import { navigationLinks } from '@/lib/constants/navigation';
import NavLink from './NavLink';

export default function DesktopNav() {
  return (
    <div className="hidden md:flex space-x-8">
      {navigationLinks.map((link) => (
        <NavLink key={link.href} href={link.href}>
          {link.label}
        </NavLink>
      ))}
    </div>
  );
}