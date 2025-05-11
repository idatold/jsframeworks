// src/app/cart/page.tsx
"use client"

import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { useCartStore } from "@/lib/cartStore"
import { chango, robotoMono } from "@/lib/fonts"

export default function CartPage() {
  const router = useRouter()
  const items = useCartStore((s) => s.items)
  const removeFromCart = useCartStore((s) => s.removeFromCart)
  const clearCart = useCartStore((s) => s.clearCart)

  // Use discountedPrice if available, otherwise fall back to price
  const total = items.reduce((sum, { product, quantity }) => {
    const unitPrice = product.discountedPrice ?? product.price
    return sum + unitPrice * quantity
  }, 0)

  const handleCheckout = () => {
    clearCart()
    router.push("/success")
  }

  return (
    <main className={`${robotoMono.className} container mx-auto px-4 py-8`}>
      {/* Title in Chango */}
      <h1 className={`${chango.className} text-3xl font-bold mb-6`}>
        Your Cart
      </h1>

      {items.length === 0 ? (
        <p className="text-gray-700">
          Your cart is empty.{" "}
          <Link href="/" className="text-[#696956] underline">
            Go shop
          </Link>
        </p>
      ) : (
        <>
          <div className="space-y-4 mb-8">
            {items.map(({ product, quantity }) => {
              const unitPrice = product.discountedPrice ?? product.price
              const lineTotal = unitPrice * quantity

              return (
                <div
                  key={product.id}
                  className="flex items-center gap-4 border-b pb-4"
                >
                  {/* Product image */}
                  <div className="w-16 h-16 relative rounded overflow-hidden">
                    <Image
                      src={product.image.url}
                      alt={product.image.alt}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Title and qty */}
                  <div className="flex-1">
                    <h2 className="font-medium">{product.title}</h2>
                    <p>Qty: {quantity}</p>
                  </div>

                  {/* Line-item total */}
                  <p className="font-semibold">
                    ${lineTotal.toFixed(2)}
                  </p>

                  {/* Remove one item */}
                  <button
                    onClick={() => removeFromCart(product.id)}
                    className="ml-2 text-gray-500 hover:text-red-600 cursor-pointer"
                    aria-label="Remove item"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M3 6h18" />
                      <path d="M8 6v14a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V6" />
                      <path d="M10 11v6" />
                      <path d="M14 11v6" />
                      <path d="M5 6l1-3h12l1 3" />
                    </svg>
                  </button>
                </div>
              )
            })}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between">
            <button
              onClick={clearCart}
              className="mb-4 sm:mb-0 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition cursor-pointer"
            >
              Clear Cart
            </button>

            <div className="text-xl font-semibold mb-4 sm:mb-0">
              Total: ${total.toFixed(2)}
            </div>

            <button
              onClick={handleCheckout}
              className="px-6 py-2 bg-[#696956] text-white rounded hover:bg-opacity-90 transition cursor-pointer"
            >
              Checkout
            </button>
          </div>
        </>
      )}
    </main>
  )
}
