"use client"

import { useState, useMemo } from "react"
import Link from "next/link"
import SearchBar from "@/components/SearchBar"
import SortDropdown, { SortOption } from "@/components/SortDropdown"
import ProductCard from "@/components/ProductCard"
import { Product } from "@/features/products/types"
import { robotoMono } from "@/lib/fonts"

export default function HomePageClient({ products }: { products: Product[] }) {
  const [search, setSearch] = useState("")
  const [sort, setSort] = useState<SortOption["value"]>("price-asc")

  const sortOptions: SortOption[] = [
    { label: "Price: Low → High", value: "price-asc" },
    { label: "Price: High → Low", value: "price-desc" },
    { label: "Name: A → Z",      value: "name-asc" },
    { label: "Name: Z → A",      value: "name-desc" },
  ]

  const filteredAndSorted = useMemo(() => {
    let list = products.filter((p) =>
      p.title.toLowerCase().includes(search.toLowerCase())
    )

    switch (sort) {
      case "price-asc":
        list.sort((a, b) => (a.discountedPrice < b.discountedPrice ? -1 : 1))
        break
      case "price-desc":
        list.sort((a, b) => (a.discountedPrice > b.discountedPrice ? -1 : 1))
        break
      case "name-asc":
        list.sort((a, b) => a.title.localeCompare(b.title))
        break
      case "name-desc":
        list.sort((a, b) => b.title.localeCompare(a.title))
        break
    }

    return list
  }, [products, search, sort])

  return (
    <main className={`container mx-auto px-4 py-4 space-y-6 ${robotoMono.className}`}>
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mt-6 mb-6">
        <SearchBar value={search} onChange={setSearch} />
        <SortDropdown options={sortOptions} selected={sort} onChange={setSort} />
      </div>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {filteredAndSorted.map((p) => (
          <Link key={p.id} href={`/product/${p.id}`} className="block">
            <ProductCard product={p} />
          </Link>
        ))}
      </div>
    </main>
  )
}
