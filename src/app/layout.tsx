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
        className={`${inter.variable} ${robotoMono.variable} antialiased`}
      >
        {children}
        <FloatingSocialBar />
      </body>
    </html>
  );
}
