import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Layout } from '@/components/layout'
import { StyledComponentsRegistry } from '@/components/layout/registry'
const inter = Inter({ subsets: ['latin'] })
export const metadata: Metadata = {
  title: 'Bruno Ken',
  description: 'Mi portafolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <StyledComponentsRegistry>
          <Layout>
            {children}
          </Layout>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
