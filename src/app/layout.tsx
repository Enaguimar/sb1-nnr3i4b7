import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/react';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Kastillikos Pyrofantasía - Tienda de Pirotecnia en Yecla',
  description: 'Tienda de pirotecnia recreativa en Yecla. Productos pirotécnicos de clase 1, 2 y 3. Especialistas en bodas, eventos y celebraciones.',
  keywords: ['pirotecnia', 'fuegos artificiales', 'petardos', 'truenos', 'Yecla', 'eventos', 'bodas'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}