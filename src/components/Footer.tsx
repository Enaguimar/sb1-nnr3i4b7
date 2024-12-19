import Link from 'next/link';
import { Facebook, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-yellow-500">Kastillikos</h3>
            <p className="text-gray-400">
              Pirotecnia recreativa de alta calidad en Yecla
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-yellow-500">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/aviso-legal" className="text-gray-400 hover:text-white transition">
                  Aviso Legal
                </Link>
              </li>
              <li>
                <Link href="/privacidad" className="text-gray-400 hover:text-white transition">
                  Privacidad
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="text-gray-400 hover:text-white transition">
                  Cookies
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-yellow-500">Síguenos</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>Copyright {new Date().getFullYear()} · Todos los derechos reservados</p>
          <p className="text-sm mt-2">by Seonergy</p>
        </div>
      </div>
    </footer>
  );
}