import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import FloatingSocialBar from "@/components/FloatingSocialBar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Garuda OM – Smart Fleet Tracking Platform",
  description:
    "Advanced GPS fleet management and vehicle tracking solutions for businesses.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} antialiased`}
      >
        {children}
        <FloatingSocialBar />
      </body>
    </html>
  );
}
