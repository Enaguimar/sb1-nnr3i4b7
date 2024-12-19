import { Sparkles } from 'lucide-react';

export default function FooterCopyright() {
  return (
    <div className="border-t border-gray-800 mt-12 pt-8">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <Sparkles className="h-5 w-5 text-yellow-500" />
          <span className="text-yellow-500 font-bold">Kastillikos</span>
        </div>
        <div className="text-center md:text-right">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Todos los derechos reservados
          </p>
          <p className="text-sm text-gray-500">
            Desarrollado por{' '}
            <a
              href="https://seonergy.es"
              target="_blank"
              rel="noopener noreferrer"
              className="text-yellow-500 hover:text-yellow-400 transition"
            >
              Seonergy
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}