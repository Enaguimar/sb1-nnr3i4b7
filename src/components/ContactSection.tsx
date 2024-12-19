import { Mail, Phone, MapPin } from 'lucide-react';

export default function ContactSection() {
  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">¿Buscas algo especial?</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-yellow-500">Información de Contacto</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-yellow-500 mr-3" />
                <span>+34 650 351 098</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-yellow-500 mr-3" />
                <span>info@kastillikos.es</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-5 w-5 text-yellow-500 mr-3" />
                <span>Calle San Ramon, 151 Bajo. Acceso Fº Castaño, Yecla, Murcia</span>
              </div>
            </div>
          </div>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-1">
                Tu Nombre y Apellidos
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:ring-yellow-500 focus:border-yellow-500"
              />
            </div>
            <div>
              <label htmlFor="contact" className="block text-sm font-medium mb-1">
                Tu Email o Teléfono
              </label>
              <input
                type="text"
                id="contact"
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:ring-yellow-500 focus:border-yellow-500"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-1">
                Descríbenos que quieres hacer...
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:ring-yellow-500 focus:border-yellow-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-yellow-500 text-black px-6 py-3 rounded-md hover:bg-yellow-400 transition font-bold"
            >
              Enviar Mensaje
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}