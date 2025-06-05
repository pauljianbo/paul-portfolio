import type { Metadata } from 'next';
import { ThemeProvider } from '@/app/context/ThemeContext';
import './globals.css';
import './reset.css';
import Footer from '@/app/components/Footer/Footer';
import Navbar from '@/app/components/Headers/NavBar';
// Define metadata for the application
export const metadata: Metadata = {
  title: 'Paul | Portfolio',
  description: 'Portfolio of Paul',
};

// Root layout component that wraps all pages
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      
      <body className="gradient-bg flex min-h-screen flex-col">
        <ThemeProvider>
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
