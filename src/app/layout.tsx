import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

const inter = Inter({ subsets: ["latin"], variable: '--font-geist-sans' });

export const metadata: Metadata = {
  title: "Premium 3D Portfolio",
  description: "Interactive 3D animated portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} bg-black min-h-screen text-white flex flex-col`}>
        <SmoothScroll>
          <main className="flex-grow w-full">
            {children}
          </main>
        </SmoothScroll>
      </body>
    </html>
  );
}
