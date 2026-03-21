// app/layout.js
import type { Metadata } from "next";
import { Inter, Roboto_Mono } from "next/font/google";
import "./globals.css";
import FloatingSocialBar from "@/components/FloatingSocialBar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});
const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-roboto-mono",
});

export const metadata: Metadata = {
  title: {
    default: "Garuda OM – Smart Fleet Tracking Platform",
    template: "%s | Garuda OM",
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
    // Your Google Search Console verification code
    google: "P8Zgd-We6M0PdoigMOj10DfQf7jLewSw0siCWolZoJ0",
  },
  openGraph: {
    title: "Garuda OM – Smart Fleet Tracking Platform",
    description: "Advanced GPS fleet management and vehicle tracking solutions for businesses.",
    url: "https://transetu-garuda.vercel.app",
    siteName: "Garuda OM",
    images: [
      {
        url: "https://transetu-garuda.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "Garuda OM - GPS Tracking & FASTag Solutions",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Garuda OM – Smart Fleet Tracking Platform",
    description: "Advanced GPS fleet management and vehicle tracking solutions for businesses.",
    images: ["https://transetu-garuda.vercel.app/og-image.png"],
    creator: "@garudaom",
  },
  metadataBase: new URL("https://transetu-garuda.vercel.app"),
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