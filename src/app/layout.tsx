// app/layout.js
import type { Metadata } from "next";
import { Inter, Roboto_Mono } from "next/font/google";
import "./globals.css";
import FloatingSocialBar from "@/components/FloatingSocialBar";
import RootJsonLd from "@/components/seo/RootJsonLd";
import { draftMode } from 'next/headers'
import { VisualEditing } from 'next-sanity'
import { DEFAULT_DESCRIPTION, OG_IMAGE_PATH, SITE_BRAND, keywordList } from "@/lib/seo";
import { getSiteUrl } from "@/lib/siteUrl";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",        // ← ADDED
  preload: true,          // ← ADDED
});

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-roboto-mono",
  display: "swap",        // ← ADDED
  preload: true,          // ← ADDED
});

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  applicationName: SITE_BRAND,
  title: {
    default: `${SITE_BRAND} — GPS Tracking & FASTag Solutions`,
    template: `%s | ${SITE_BRAND}`,
  },
  icons: {
    icon: [
      { url: "/assets/logos/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/assets/logos/favicon-48.png", sizes: "48x48", type: "image/png" },
      { url: "/assets/logos/favicon.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/assets/logos/favicon-180.png", sizes: "180x180", type: "image/png" }],
    shortcut: "/assets/logos/favicon-32.png",
  },
  description: DEFAULT_DESCRIPTION,
  keywords: keywordList(),
  authors: [{ name: SITE_BRAND, url: getSiteUrl() }],
  creator: SITE_BRAND,
  publisher: SITE_BRAND,
  category: "technology",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "P8Zgd-We6M0PdoigMOj10DfQf7jLewSw0siCWolZoJ0",
  },
  openGraph: {
    title: `${SITE_BRAND} — GPS fleet tracking & FASTag in India`,
    description: DEFAULT_DESCRIPTION,
    url: siteUrl,
    siteName: SITE_BRAND,
    images: [
      {
        url: OG_IMAGE_PATH,
        width: 1200,
        height: 630,
        alt: `${SITE_BRAND} — GPS & FASTag platform`,
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_BRAND} — GPS fleet tracking & FASTag in India`,
    description: DEFAULT_DESCRIPTION,
    images: [`${siteUrl}${OG_IMAGE_PATH}`],
    creator: "@garudaom",
  },
  metadataBase: new URL(siteUrl),
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN">
      <body
        className={`${inter.variable} ${robotoMono.variable} antialiased`}
      >
        <RootJsonLd />
        {children}
        <FloatingSocialBar />
        
        {(() => {
          try {
            return draftMode().isEnabled && <VisualEditing />;
          } catch {
            return null;
          }
        })()}
      </body>
    </html>
  );
}