// app/layout.js
import type { Metadata } from "next";
import { Inter, Roboto_Mono } from "next/font/google";
import "./globals.css";
import FloatingSocialBar from "@/components/FloatingSocialBar";
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
  title: {
    default: "Garuda OM - GPS Tracking & FASTag Solutions",
    template: "%s | Garuda OM",
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
  description:
    "Advanced GPS fleet management, vehicle tracking, FASTag solutions, and video telematics for businesses in India. Real-time monitoring, fuel sensors, and dash cams.",
  keywords: "GPS tracking, fleet management, FASTag, vehicle tracking, telematics, fuel monitoring, dash cam, Garuda OM",
  authors: [{ name: "Garuda OM" }],
  creator: "Garuda OM",
  publisher: "Garuda OM",
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
  title: "Garuda OM – GPS Fleet Tracking & FASTag Solutions in India",
  description:
    "Monitor your fleet in real-time with Garuda OM. GPS tracking, FASTag integration, fuel sensors, dash cams and video telematics — built for Indian businesses.",
  url: siteUrl,
  siteName: "Garuda OM",
  images: [
    {
      url: `${siteUrl}/assets/logos/logo.png`,
      width: 1200,
      height: 630,
      alt: "Garuda OM - GPS Fleet Tracking Platform",
    },
  ],
  locale: "en_IN",
  type: "website",
},
twitter: {
  card: "summary_large_image",
  title: "Garuda OM – GPS Fleet Tracking & FASTag Solutions in India",
  description:
    "Monitor your fleet in real-time with Garuda OM. GPS tracking, FASTag integration, fuel sensors, dash cams and video telematics — built for Indian businesses.",
  images: [`${siteUrl}/assets/logos/logo.png`],
  creator: "@garudaom",
},
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: "/",
  },
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
    <html lang="en">
      <body
        className={`${inter.variable} ${robotoMono.variable} antialiased`}
      >
        {children}
        <FloatingSocialBar />
      </body>
    </html>
  );
}