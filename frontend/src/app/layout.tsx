import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";
import AuthContextProvider from "@/context/AuthContextProvider";
import { Toaster } from 'react-hot-toast';

const figtree = Figtree({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tourvisto – Your Ultimate Tour Booking Platform",
  description: "Discover, book, and enjoy amazing tours worldwide with Tourvisto. Easy, fast, and tailored for every traveler.",
  keywords: "tour booking, travel tours, vacation, sightseeing, travel platform, book tours online",
  authors: [{ name: "Tourvisto Team" }],
  icons: {
    icon: "/fi_2200326.svg",
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
        className={`${figtree.className} antialiased bg-[#F9FBFC] selection:bg-blueAccent selection:text-white`}
      >
        <AuthContextProvider>
          {children}
        </AuthContextProvider>
        <Toaster />
      </body>
    </html>
  );
}
