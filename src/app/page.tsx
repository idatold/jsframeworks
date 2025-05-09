import Link from 'next/link'
import { getProducts } from '@/lib/productApi'
import ProductCard from '@/components/ProductCard'

export default async function HomePage() {
  const products = await getProducts();

  return (
    <main className="container mx-auto px-4 py-4">
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map((p) => (
          <Link key={p.id} href={`/product/${p.id}`} className="block">
            <ProductCard product={p} />
          </Link>
        ))}
      </div>
    </main>
  );
}

