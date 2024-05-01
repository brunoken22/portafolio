import './globals.css';
import type {Metadata} from 'next';
import {Poppins} from 'next/font/google';
import {Layout} from '@/components/layout';
import {StyledComponentsRegistry} from '@/components/layout/registry';
const poppins = Poppins({subsets: ['latin'], weight: '400'});

export const metadata: Metadata = {
  title: 'Bruno Ken',
  description:
    'Mi portafolio: Desarrollador y diseñador web creando soluciones digitales para clientes',
  authors: [{name: 'Bruno Ken'}],
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang='es'>
      <head>
        <link rel='preload' as='image' href='/hero.webp' />
        <meta
          name='google-site-verification'
          content='CnmK8AWJQTO2MYQ5J7dOu9_dhCFy-ttErrYHDEWbOyw'
        />
      </head>
      <body className={poppins.className}>
        <StyledComponentsRegistry>
          <Layout>{children}</Layout>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
