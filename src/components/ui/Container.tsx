import { HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {}

export default function Container({ className, children, ...props }: ContainerProps) {
  return (
    <div className={cn('container mx-auto px-4', className)} {...props}>
      {children}
    </div>
  );
}