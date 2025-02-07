import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../../Components/Navbar";
import Head from "next/head";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mahbub Alahi Munna",
  description: "Developed by Md. Muhtasim Fuad Rahat",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
      <link rel="icon" href="/favicon.ico" className="" />
        </Head>
      <body className={`${geistSans.variable} ${geistMono.variable} overflow-x-hidden`}>
      <Navbar />
        {children}
      </body>
    </html>
  );
}
