// src/app/product/[id]/page.tsx
import Image from 'next/image'
import { getProductById } from '@/lib/productApi'
import { Product } from '@/features/products/types'

interface Props { params: { id: string } }

export async function generateStaticParams() {
  // if you haven’t already, import getProducts here:
  // import { getProducts } from '@/lib/productApi'
  const products = await getProducts()
  return products.map((p) => ({ id: p.id }))
}

export default async function ProductPage({ params }: Props) {
  const product: Product = await getProductById(params.id)

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* wrap in a relative container and use fill */}
      <div className="relative w-full h-80 rounded-lg overflow-hidden">
        <Image
          src={product.image.url}
          alt={product.image.alt}
          fill
          className="object-cover"
        />
      </div>
      <h2 className="mt-4 text-3xl font-bold">{product.title}</h2>
      <p className="mt-2 text-gray-700">{product.description}</p>
    </div>
  )
}
