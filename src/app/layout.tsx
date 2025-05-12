
import type { Metadata } from "next";
import "./globals.css";
import { chango, robotoMono } from "@/lib/fonts";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${chango.variable} ${robotoMono.variable}`}>
      <body className="flex flex-col min-h-screen">
        {/* mount this once for global toast notifications */}
        <Toaster position="top-right" />

        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

export const metadata: Metadata = {
  title: "Pistachio",
  description: "Shop til you drop!",
};
