
import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import JsonLd from "./components/JsonLd";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  title: {
    template: '%s | Vital Solutions',
    default: 'Vital Solutions - Desarrollo Web Profesional',
  },
  description: 'Creamos páginas web y aplicaciones fáciles de usar, que ayudan a que tu negocio crezca y destaque frente a la competencia.',
  keywords: ['desarrollo web', 'páginas web', 'aplicaciones web', 'next.js', 'react'],
  authors: [{ name: 'Vital Solutions' }],
  openGraph: {
    title: 'Vital Solutions - Desarrollo Web Profesional',
    description: 'Creamos páginas web y aplicaciones fáciles de usar, que ayudan a que tu negocio crezca y destaque frente a la competencia.',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://vitalsolutions.vercel.app',
    siteName: 'Vital Solutions',
    /* images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Vital Solutions Preview'
      }
    ], */
    locale: 'es_ES',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/favicon.ico',
    //apple: '/apple-touch-icon.png',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className=":root">
      <head>
        <JsonLd />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}>
        <Navbar />
        <main className="pt-24">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
