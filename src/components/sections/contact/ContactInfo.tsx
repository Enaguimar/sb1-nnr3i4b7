import { Mail, Phone, MapPin } from 'lucide-react';
import { contactInfo } from '@/lib/constants/contact';

export default function ContactInfo() {
  return (
    <div>
      <h3 className="text-2xl font-semibold mb-6 text-yellow-500">Información de Contacto</h3>
      <div className="space-y-4">
        <div className="flex items-center">
          <Phone className="h-5 w-5 text-yellow-500 mr-3" />
          <span>{contactInfo.phone}</span>
        </div>
        <div className="flex items-center">
          <Mail className="h-5 w-5 text-yellow-500 mr-3" />
          <span>{contactInfo.email}</span>
        </div>
        <div className="flex items-center">
          <MapPin className="h-5 w-5 text-yellow-500 mr-3" />
          <span>{contactInfo.address}</span>
        </div>
      </div>
    </div>
  );
}