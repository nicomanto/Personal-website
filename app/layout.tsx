import type {Metadata} from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
});

export const metadata: Metadata = {
  title: 'Niccolò Mantovani | Back End Developer',
  description: 'Personal portfolio of Niccolò Mantovani, a software engineer specializing in back-end technologies.',
};

import { LanguageProvider } from '@/components/language-provider';

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} scroll-smooth`}>
      <body suppressHydrationWarning className="bg-neutral-950 text-neutral-50 antialiased selection:bg-blue-500/30 selection:text-blue-200">
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
