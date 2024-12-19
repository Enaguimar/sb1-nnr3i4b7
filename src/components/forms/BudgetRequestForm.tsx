import { FormEvent, useState } from 'react';
import { motion } from 'framer-motion';
import Input from '@/components/ui/Input';
import Textarea from '@/components/ui/Textarea';
import Button from '@/components/ui/Button';
import FormCaptcha from './FormCaptcha';
import FormSuccess from './FormSuccess';
import FormError from './FormError';
import { Calendar } from 'lucide-react';

export default function BudgetRequestForm() {
  const [isVerified, setIsVerified] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isVerified) return;

    const formData = new FormData(e.currentTarget);
    
    try {
      const response = await fetch('https://formspree.io/f/info@kastillikos.es', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        setStatus('success');
        e.currentTarget.reset();
      } else {
        throw new Error();
      }
    } catch (error) {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return <FormSuccess />;
  }

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="space-y-6 max-w-xl mx-auto"
    >
      <Input
        id="name"
        name="name"
        label="Tu Nombre y Apellidos"
        type="text"
        required
      />
      
      <Input
        id="email"
        name="email"
        label="Tu Email"
        type="email"
        required
      />
      
      <Input
        id="phone"
        name="phone"
        label="Tu Teléfono"
        type="tel"
        required
      />
      
      <Input
        id="date"
        name="date"
        label="Fecha del Evento"
        type="date"
        required
      />
      
      <Textarea
        id="message"
        name="message"
        label="Cuéntanos sobre tu evento"
        rows={4}
        required
      />

      <FormCaptcha onVerify={setIsVerified} />
      
      {status === 'error' && <FormError />}

      <div className="flex items-center gap-2 text-sm text-gray-400">
        <Calendar className="h-4 w-4" />
        <p>Te responderemos en menos de 24 horas</p>
      </div>

      <Button 
        type="submit" 
        size="lg" 
        className="w-full"
        disabled={!isVerified}
      >
        Solicitar Presupuesto
      </Button>
    </motion.form>
  );
}