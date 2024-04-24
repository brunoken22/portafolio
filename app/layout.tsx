import './globals.css';
import type {Metadata} from 'next';
import {Poppins} from 'next/font/google';
import {Layout} from '@/components/layout';
import {StyledComponentsRegistry} from '@/components/layout/registry';
const poppins = Poppins({subsets: ['latin'], weight: '400'});

export const metadata: Metadata = {
  title: 'Bruno Ken',
  description: 'Mi portafolio',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang='es'>
      <head>
        <link rel='preload' as='image' href='/hero.webp' />
      </head>
      <body className={poppins.className}>
        <StyledComponentsRegistry>
          <Layout>{children}</Layout>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
