import type { Metadata } from "next";
import { Geist, Geist_Mono, /*Playfair_Display*/ } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/Navbar/Navbar"; 
import Footer from "@/components/Footer";
import Deadshot from "@/components/Deadshot";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

/*const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
}); */

export const metadata: Metadata = {
  title: "Techno Brain",
  description: "Enterprise Solutions",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${geistSans.variable} h-full antialiased`}
    >
      <body className="font-sans min-h-full flex flex-col bg-[#f8f9fa]">
        <Deadshot />
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}