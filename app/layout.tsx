import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Layout } from "@/components/layout";
import { StyledComponentsRegistry } from "@/components/layout/registry";
const poppins = Poppins({ subsets: ["latin"], weight: "400" });

declare module "styled-components" {
  export interface DefaultTheme {
    background: string;
    color: string;
    lineaGradient: string;
    weight?: string;
  }
}

export const metadata: Metadata = {
  metadataBase: new URL("https://brunoken.vercel.app/"),
  title: "Bruno Ken | Desarrollador y Diseñador Web",
  description:
    "Desarrollador y diseñador web especializado en crear soluciones digitales innovadoras. Portfolio con proyectos personales y para clientes.",
  keywords: [
    "desarrollador web",
    "diseñador web",
    "portfolio",
    "frontend",
    "backend",
    "expressjs",
    "postgresql",
    "firebase",
    "react",
    "nextjs",
    "soluciones digitales",
  ],
  authors: [{ name: "Bruno Ken" }],
  creator: "Bruno Ken",
  publisher: "Bruno Ken",
  robots: "index, follow",
  verification: {
    google: "K8AWJQTO2MYQ5J7dOu9_dhCFy-ttErrYHDEWbOyw",
  },
  alternates: {
    canonical: "/",
  },
  other: {
    instagram: "brunoken18",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bruno Ken - Desarrollador y Diseñador Web",
    description:
      "Portfolio de Bruno Ken: Desarrollador y diseñador web creando soluciones digitales innovadoras para clientes.",
    images: [
      {
        url: "/hero.webp",
        width: 1200,
        height: 630,
        alt: "Portafolio de Bruno Ken",
      },
    ],
  },
  openGraph: {
    title: "Bruno Ken - Portafolio",
    description:
      "Explora mi portafolio como desarrollador y diseñador web. Proyectos innovadores y soluciones digitales para clientes.",
    url: "https://brunoken.vercel.app",
    siteName: "Bruno Ken",
    type: "website",
    images: [
      {
        url: "/hero.webp",
        width: 1200,
        height: 630,
        alt: "Portafolio de Bruno Ken",
      },
    ],
  },
  category: "technology",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='es'>
      <head>
        <link rel='preload' as='image' href='/hero.webp' />
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
