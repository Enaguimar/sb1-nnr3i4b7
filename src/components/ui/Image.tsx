import { ImgHTMLAttributes, useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import ImageFallback from './ImageFallback';

interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  fill?: boolean;
}

export default function Image({ fill, className = '', src, alt, ...props }: ImageProps) {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const img = new window.Image();
    img.src = src || '';
    img.onload = () => {
      setLoaded(true);
      setError(false);
    };
    img.onerror = () => setError(true);
  }, [src]);

  if (error) {
    return <ImageFallback className={className} />;
  }

  if (fill) {
    return (
      <>
        <div
          className={cn(
            'absolute inset-0 bg-gray-800 transition-opacity duration-300',
            loaded ? 'opacity-0' : 'opacity-100'
          )}
        />
        <img
          {...props}
          src={src}
          alt={alt}
          className={cn(
            'absolute inset-0 w-full h-full object-cover transition-opacity duration-300',
            loaded ? 'opacity-100' : 'opacity-0',
            className
          )}
          loading="lazy"
        />
      </>
    );
  }

  return (
    <>
      <div
        className={cn(
          'bg-gray-800 transition-opacity duration-300',
          loaded ? 'opacity-0' : 'opacity-100'
        )}
      />
      <img
        {...props}
        src={src}
        alt={alt}
        className={cn(
          'transition-opacity duration-300',
          loaded ? 'opacity-100' : 'opacity-0',
          className
        )}
        loading="lazy"
      />
    </>
  );
}