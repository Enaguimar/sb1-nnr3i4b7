import { cn } from '@/lib/utils';

interface HeroBackgroundProps {
  className?: string;
}

export default function HeroBackground({ className }: HeroBackgroundProps) {
  return (
    <>
      <img
        src="https://images.unsplash.com/photo-1498931299472-f7a63a5a1cfa"
        alt="Fuegos artificiales"
        className={cn(
          'absolute inset-0 w-full h-full object-cover object-center',
          className
        )}
      />
      <div className="absolute inset-0 bg-black/60" />
    </>
  );
}