import { Link } from 'react-router-dom';

const links = {
  empresa: [
    { href: '/sobre-nosotros', label: 'Sobre Nosotros' },
    { href: '/productos', label: 'Productos' },
    { href: '/bodas', label: 'Bodas' },
    { href: '/eventos', label: 'Eventos' },
  ],
  legal: [
    { href: '/aviso-legal', label: 'Aviso Legal' },
    { href: '/privacidad', label: 'Privacidad' },
    { href: '/cookies', label: 'Cookies' },
  ],
} as const;

export default function FooterLinks() {
  return (
    <div className="grid sm:grid-cols-2 gap-8">
      <div>
        <h4 className="text-lg font-semibold mb-4 text-yellow-500">Empresa</h4>
        <ul className="space-y-2">
          {links.empresa.map((link) => (
            <li key={link.href}>
              <Link
                to={link.href}
                className="text-gray-400 hover:text-white transition"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h4 className="text-lg font-semibold mb-4 text-yellow-500">Legal</h4>
        <ul className="space-y-2">
          {links.legal.map((link) => (
            <li key={link.href}>
              <Link
                to={link.href}
                className="text-gray-400 hover:text-white transition"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}