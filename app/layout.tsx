// app/layout.tsx
import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Prashant Mishra | Portfolio',
  description: 'Software Developer | AI Enthusiast | EEE @ NIT AP',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-black dark:bg-gray-900 dark:text-white">
        {children}
      </body>
    </html>
  );
}
