import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Layout } from "@/components/layout";
import { StyledComponentsRegistry } from "@/components/layout/registry";
const poppins = Poppins({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  metadataBase: new URL("https://brunoken.vercel.app/"),

  title: "Bruno Ken",
  description:
    "Mi portafolio: Desarrollador y diseñador web creando soluciones digitales para clientes",
  authors: [{ name: "Bruno Ken" }],
  twitter: {
    card: "summary",
    title: "Bruno Ken - Portafolio",
    description:
      "Explora mi portafolio como desarrollador y diseñador web. Proyectos innovadores y soluciones digitales para clientes.",
    images: [
      {
        url: "/hero.webp", // Imagen que se mostrará en redes sociales
        width: 1200,
        height: 630,
        alt: "Portafolio de Bruno Ken", // Descripción alternativa de la imagen
      },
    ],
  },
  openGraph: {
    title: "Bruno Ken - Portafolio",
    description:
      "Explora mi portafolio como desarrollador y diseñador web. Proyectos innovadores y soluciones digitales para clientes.",
    url: "https://brunoken.vercel.app", // Reemplaza con la URL de tu sitio
    images: [
      {
        url: "/hero.webp", // Imagen que se mostrará en redes sociales
        width: 1200,
        height: 630,
        alt: "Portafolio de Bruno Ken", // Descripción alternativa de la imagen
      },
    ],
    siteName: "Bruno Ken",
    type: "website",
  },
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='es'>
      <head>
        <link rel='preload' as='image' href='/hero.webp' />
        <meta
          name='google-site-verification'
          content='CnmK8AWJQTO2MYQ5J7dOu9_dhCFy-ttErrYHDEWbOyw'
        />
        <meta name='color-scheme' content='only light' />
      </head>
      <body className={poppins.className}>
        <StyledComponentsRegistry>
          <Layout>{children}</Layout>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
