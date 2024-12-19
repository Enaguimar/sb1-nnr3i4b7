import { Facebook, Instagram, Youtube } from 'lucide-react';
import { socialLinks } from '@/lib/constants/social';

const socialIcons = [
  { icon: Facebook, href: socialLinks.facebook },
  { icon: Instagram, href: socialLinks.instagram },
  { icon: Youtube, href: 'https://youtube.com/@kastillikos' },
] as const;

export default function FooterSocial() {
  return (
    <div className="flex gap-4">
      {socialIcons.map((social, index) => (
        <a
          key={index}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-yellow-500 transition"
        >
          <social.icon className="h-6 w-6" />
        </a>
      ))}
    </div>
  );
}