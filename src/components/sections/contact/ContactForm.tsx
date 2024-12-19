import Input from '@/components/ui/Input';
import Textarea from '@/components/ui/Textarea';
import Button from '@/components/ui/Button';

export default function ContactForm() {
  return (
    <form className="space-y-4">
      <Input
        id="name"
        label="Tu Nombre y Apellidos"
        type="text"
      />
      <Input
        id="contact"
        label="Tu Email o Teléfono"
        type="text"
      />
      <Textarea
        id="message"
        label="Descríbenos que quieres hacer..."
        rows={4}
      />
      <Button type="submit" className="w-full">
        Enviar Mensaje
      </Button>
    </form>
  );
}