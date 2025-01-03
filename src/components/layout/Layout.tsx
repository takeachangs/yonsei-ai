import { ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

interface LayoutProps {
  children: ReactNode;
  fullWidth?: boolean;
}

export default function Layout({ children, fullWidth = false }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main
        className={
          fullWidth
            ? 'flex-grow pt-0 pb-8'
            : 'flex-grow container mx-auto px-4 sm:px-6 lg:px-8 pt-0 pb-8'
        }
      >
        {children}
      </main>
      <Footer />
    </div>
  );
}