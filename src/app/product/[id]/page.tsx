import { generateStaticParams, ProductPage } from '@/app/product/[id]/page.server'

export default ProductPage

import { getProducts, getProductById } from '@/lib/productApi'
import { Product } from '@/features/products/types'

export async function generateStaticParams() {
  const products = await getProducts()
  return products.map((p) => ({ id: p.id }))
}

interface Props { params: { id: string } }

export async function ProductPage({ params }: Props) {
  const product: Product = await getProductById(params.id)
  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* reuse a component or inline: */}
      <h2 className="text-3xl font-bold">{product.title}</h1>
      <image src={product.image[0]} alt={product.title} className="w-full h-80 object-cover rounded-lg mt-4" />
      <p className="mt-4">{product.description}</p>
      
    </div>
  )
}

