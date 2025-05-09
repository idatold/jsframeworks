// src/app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import { chango, robotoMono } from "@/lib/fonts";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${chango.variable} ${robotoMono.variable}`}>
      <body>
        {children}
      </body>
    </html>
  );
}

export const metadata: Metadata = {
  title: "Pistachio",
  description: "Shop til you drop!",
};
