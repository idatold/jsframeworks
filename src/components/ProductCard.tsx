// src/components/ProductCard.tsx
import Image from 'next/image'
import { Product } from '@/features/products/types'
import { chango, robotoMono } from '@/lib/fonts'

interface Props { product: Product }

export default function ProductCard({ product }: Props) {
  const hasDiscount = product.discountedPrice < product.price
  const discountPct = hasDiscount
    ? Math.round((1 - product.discountedPrice / product.price) * 100)
    : 0
  const originalPrice = product.price
  const displayPrice = hasDiscount ? product.discountedPrice : originalPrice

  return (
    <div
      className={`
        ${robotoMono.className}
        bg-[#FDFCED]
        rounded-xl
        overflow-hidden
        shadow-sm hover:shadow-md
        transition
        p-4
      `}
    >
      <div className="relative w-full h-48 rounded-lg overflow-hidden">
        <Image
          src={product.image.url}
          alt={product.image.alt}
          fill
          className="object-cover"
        />
        {hasDiscount && (
          <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
            {discountPct}% OFF
          </span>
        )}
      </div>

      <h3 className={`${chango.className} mt-3 text-lg truncate`}>
        {product.title}
      </h3>

      <p className="mt-1">
        {hasDiscount && (
          <span className="line-through mr-2">
            ${originalPrice.toFixed(2)}
          </span>
        )}
        <span>
          ${displayPrice.toFixed(2)}
        </span>
      </p>

      <p className="text-sm text-gray-500">
        ⭐ {product.rating.toFixed(1)}
      </p>
    </div>
  )
}
