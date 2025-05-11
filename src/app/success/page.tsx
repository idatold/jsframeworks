// src/app/success/page.tsx
import Link from "next/link"
import { chango, robotoMono } from "@/lib/fonts"

export default function SuccessPage() {
  return (
    <main className={`${robotoMono.className} container mx-auto px-4 py-20 text-center`}>
      {/* Headline in Chango */}
      <h1 className={`${chango.className} text-4xl font-bold mb-6`}>
        Thank you for your order!
      </h1>
      <p className="text-lg text-gray-700 mb-8">
        We’ve received your purchase and will start processing it right away. Have a great day! 
      </p>
      <Link
        href="/"
        className="inline-block px-6 py-3 bg-[#696956] text-white rounded hover:bg-opacity-90 transition"
      >
        Back to Shop
      </Link>
    </main>
  )
}
