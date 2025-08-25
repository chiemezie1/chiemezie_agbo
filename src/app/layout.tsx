import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Chiemezie Agbo | Full-Stack Developer & Blockchain Developer",
  description: "Seasoned Software Developer with expertise in blockchain technology, DeFi, and decentralized applications. Bridging Web2 & Web3 with secure, scalable solutions.",
  keywords: "Chiemezie Agbo, Full-Stack Developer, Blockchain Developer, DeFi, Web3, Software Engineer, Next.js, React, Solidity, Ethereum",
  authors: [{ name: "Chiemezie Agbo" }],
  creator: "Chiemezie Agbo",
  openGraph: {
    title: "Chiemezie Agbo | Full-Stack Developer & Blockchain Developer",
    description: "Seasoned Software Developer with expertise in blockchain technology, DeFi, and decentralized applications.",
    url: "https://chiemezieagbo.com",
    siteName: "Chiemezie Agbo Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chiemezie Agbo | Full-Stack Developer & Blockchain Developer",
    description: "Seasoned Software Developer with expertise in blockchain technology, DeFi, and decentralized applications.",
    creator: "@ChiemezieAgbo",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
