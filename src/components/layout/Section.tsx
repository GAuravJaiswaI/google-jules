import type { ReactNode } from 'react';
import { Container } from './Container';

interface SectionProps {
  children: ReactNode;
  id?: string;
  className?: string;
}

export const Section = ({ children, id, className = '' }: SectionProps) => {
  return (
    <section id={id} className={`py-16 md:py-24 ${className}`}>
      <Container>{children}</Container>
    </section>
  );
};

