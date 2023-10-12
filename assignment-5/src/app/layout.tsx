import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ToastContainer } from 'react-toastify';
import { AuthContextProvider } from '~/context/AuthContext';
import { BookContextProvider } from '~/context/BookContext';

import 'react-toastify/dist/ReactToastify.css';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Book Store',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning className={`${inter.className} w-full min-h-screen`}>
        <AuthContextProvider>
          <BookContextProvider>
            {children}
            <ToastContainer
              autoClose={1000}
              newestOnTop={false}
              draggable={false}
              closeOnClick
              hideProgressBar
              theme="colored"
            />
          </BookContextProvider>
        </AuthContextProvider>
      </body>
    </html>
  );
}
