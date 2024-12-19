import { HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';
import Container from './Container';

interface SectionProps extends HTMLAttributes<HTMLElement> {
  containerClassName?: string;
}

export default function Section({ className, containerClassName, children, ...props }: SectionProps) {
  return (
    <section className={cn('py-20', className)} {...props}>
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}