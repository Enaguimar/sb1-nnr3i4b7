import { useState } from 'react';
import { Send } from 'lucide-react';
import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';

export default function FooterNewsletter() {
  const [email, setEmail] = useState('');

  return (
    <div className="lg:max-w-sm">
      <h4 className="text-lg font-semibold mb-4 text-yellow-500">Newsletter</h4>
      <p className="text-gray-400 mb-4">
        Suscríbete para recibir las últimas novedades y ofertas especiales
      </p>
      <form className="flex gap-2">
        <Input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Tu email"
          className="flex-1"
          required
        />
        <Button type="submit" variant="primary" size="sm">
          <Send className="h-4 w-4" />
        </Button>
      </form>
    </div>
  );
}