import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export default function NavLink({ href, children, className, onClick }: NavLinkProps) {
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    onClick?.();
  };

  return (
    <Link
      to={href}
      onClick={handleClick}
      className={cn(
        'text-white hover:text-yellow-500 transition',
        className
      )}
    >
      {children}
    </Link>
  );
}