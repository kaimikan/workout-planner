import './globals.css';
import Link from 'next/link';
import { ReactNode } from 'react';

type LayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body className="bg-gray-900 text-white">
        <nav className="p-4 bg-gray-800 flex gap-4">
          <Link href="/">Home</Link>
          <Link href="/exercises">Exercises</Link>
          <Link href="/nutrition">Nutrition</Link>
          <Link href="/routines">Routines</Link>
          <Link href="/sleep">Sleep</Link>
          <Link href="/mental">Mental</Link>
          <Link href="/equipment">Equipment</Link>
        </nav>
        <main className="p-6">{children}</main>
      </body>
    </html>
  );
}
