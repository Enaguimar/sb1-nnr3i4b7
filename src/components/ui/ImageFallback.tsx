import { cn } from '@/lib/utils';
import { Sparkles } from 'lucide-react';

interface ImageFallbackProps {
  className?: string;
  message?: string;
}

export default function ImageFallback({ className, message = 'Imagen no disponible' }: ImageFallbackProps) {
  return (
    <div className={cn(
      'w-full h-full bg-gray-800 flex flex-col items-center justify-center',
      className
    )}>
      <Sparkles className="h-8 w-8 text-yellow-500 mb-2" />
      <span className="text-sm text-gray-400">{message}</span>
    </div>
  );
}