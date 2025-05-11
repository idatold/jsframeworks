// src/app/product/[id]/page.tsx
import Image from 'next/image'
import { getProductById } from '@/lib/productApi'
import { Product } from '@/features/products/types'
import { chango, robotoMono } from '@/lib/fonts'

interface Props {
  params: { id: string }
}

export default async function ProductPage({ params }: Props) {
  const product: Product = await getProductById(params.id)

  return (
    <main className={`${robotoMono.className} container mx-auto px-4 py-8`}>
      <div className="flex flex-col md:flex-row gap-8">
        {/* Product Image */}
        <div className="relative w-full md:w-1/2 h-80 md:h-[400px] rounded-lg overflow-hidden shadow">
          <Image
            src={product.image.url}
            alt={product.image.alt}
            fill
            className="object-cover"
          />
        </div>

        {/* Product Details */}
        <div className="flex-1 flex flex-col">
          {/* Title in Chango */}
          <h1 className={`${chango.className} text-4xl font-bold mb-2`}>
            {product.title}
          </h1>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {product.tags.map((tag) => (
              <span
                key={tag}
                className="text-sm bg-gray-200 px-2 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Description */}
          <p className="text-gray-700 mb-6">{product.description}</p>

          {/* Pricing */}
          <div className="mb-6">
            {product.discountedPrice < product.price ? (
              <div className="flex items-baseline gap-3">
                <span className="text-xl text-gray-500 line-through">
                  ${product.price.toFixed(2)}
                </span>
                <span className="text-2xl font-semibold">
                  ${product.discountedPrice.toFixed(2)}
                </span>
              </div>
            ) : (
              <span className="text-2xl font-semibold">
                ${product.price.toFixed(2)}
              </span>
            )}
          </div>

          {/* Add to Bag */}
          <button
            className="
              mt-auto
              inline-block
              bg-[#696956]
              text-white
              px-6 py-3
              rounded-md
              hover:bg-opacity-90
              transition
            "
          >
            Add to Bag
          </button>
        </div>
      </div>

      {/* Reviews */}
      {product.reviews.length > 0 && (
        <section className="mt-12">
          <h2 className="text-2xl font-semibold mb-4">Reviews</h2>
          <div className="space-y-6">
            {product.reviews.map((rev) => (
              <div key={rev.id} className="border-b pb-4">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-medium">{rev.username}</span>
                  <span className="text-yellow-500">⭐ {rev.rating}</span>
                </div>
                <p className="text-gray-600">{rev.description}</p>
              </div>
            ))}
          </div>
        </section>
      )}
    </main>
  )
}


