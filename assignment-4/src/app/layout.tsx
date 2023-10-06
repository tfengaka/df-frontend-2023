import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '../components/Header';
import { BookContextProvider } from '../context/BookContext';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Book Store',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning className={`${inter.className} w-full min-h-screen pt-16`}>
        <BookContextProvider>
          <Header />
          {children}
        </BookContextProvider>
      </body>
    </html>
  );
}
