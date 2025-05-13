import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "@/components/providers/Providers";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "WikiClub SATI - Wikimedia Student Community",
  description: "Official website of WikiClub SATI, a Wikimedia-recognized student community in India. Join us to contribute to free knowledge and participate in Wikimedia activities.",
  keywords: ["WikiClub", "SATI", "Wikimedia", "Student Community", "Open Knowledge"],
  authors: [{ name: "WikiClub SATI" }],
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased bg-slate-950 text-white`}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
