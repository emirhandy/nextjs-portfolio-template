import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Script from 'next/script';
import BackgroundVideo from './components/BackgroundVideo';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Emirhan Dikci',
  description: 'Personal website of Emirhan Dikci',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr" className={inter.className}>
      <head>
        <Script
          src="https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js"
          strategy="beforeInteractive"
        />
      </head>
      <body className="bg-black text-white">
        <BackgroundVideo />
        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  );
}