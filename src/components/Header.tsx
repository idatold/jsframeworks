// src/components/Header.tsx
"use client"

import Image from "next/image"
import Link from "next/link"

export default function Header() {
  // Temporarily hard‐code cart count until cart is wired up
  const count = 0

  return (
    <header className="bg-[#FDFCED] shadow-sm">
      {/* Use the same .container px-4 as your main so edges align */}
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="block">
          <div className="relative w-32 h-10">
            <Image
              src="/logo.svg"
              alt="Pistachio"
              fill
              className="object-contain drop-shadow-[0px_4px_4px_rgba(0,0,0,0.25)]"
            />
          </div>
        </Link>

        {/* Cart Icon */}
        <Link href="/cart" className="relative block">
          <img
            src="/bag.svg"
            alt="Cart"
            className="h-8 w-8"
          />
          {count > 0 && (
            <span className="absolute -top-1 -right-2 flex items-center justify-center w-5 h-5 text-xs font-semibold text-white bg-red-500 rounded-full">
              {count}
            </span>
          )}
        </Link>
      </div>
    </header>
  )
}
