import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { contactInfo } from '@/lib/constants/contact';

const contactItems = [
  { icon: Phone, text: contactInfo.phone },
  { icon: Mail, text: contactInfo.email },
  { icon: MapPin, text: contactInfo.address },
  { icon: Clock, text: 'Lun-Vie: 9:00-14:00 y 16:00-20:00' },
] as const;

export default function FooterContact() {
  return (
    <div>
      <h4 className="text-lg font-semibold mb-4 text-yellow-500">Contacto</h4>
      <ul className="space-y-3">
        {contactItems.map((item, index) => (
          <li key={index} className="flex items-start gap-3 text-gray-400">
            <item.icon className="h-5 w-5 text-yellow-500 shrink-0 mt-1" />
            <span>{item.text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}