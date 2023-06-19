'use client';
import { ApolloProvider } from '@apollo/client';
import './globals.css';
import { Inter } from 'next/font/google';
import client from './lib/client';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <ApolloProvider client={client}>
        <body className={inter.className}>{children}</body>
      </ApolloProvider>
    </html>
  );
}
