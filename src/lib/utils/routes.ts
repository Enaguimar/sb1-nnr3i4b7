```typescript
import { NavigationLink } from '@/types';

export const mainRoutes: NavigationLink[] = [
  { href: '/productos', label: 'Productos' },
  { href: '/bodas', label: 'Bodas' },
  { href: '/eventos', label: 'Eventos' },
  { href: '/contacto', label: 'Contacto' },
];

export const legalRoutes: NavigationLink[] = [
  { href: '/aviso-legal', label: 'Aviso Legal' },
  { href: '/privacidad', label: 'Privacidad' },
  { href: '/cookies', label: 'Cookies' },
];
```