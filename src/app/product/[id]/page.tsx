// src/app/product/[id]/page.tsx
import Image from "next/image";
import AddToCartButton from "@/components/AddToCartButton";
import { getProductById } from "@/lib/productApi";
import { Product } from "@/features/products/types";
import { chango, robotoMono } from "@/lib/fonts";

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product: Product = await getProductById(id);
  const tags = product.tags ?? [];
  const reviews = product.reviews ?? [];
  const unitPrice = product.discountedPrice ?? product.price;

  return (
    // narrower container so everything aligns nicely
    <main
      className={`${robotoMono.className} mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-8`}
    >
      <h1 className={`${chango.className} text-4xl font-bold mb-2`}>
        {product.title}
      </h1>

      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag) => (
          <span
            key={tag}
            className="text-sm bg-gray-200 px-2 py-1 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>

      <p className="text-gray-700">{product.description}</p>

      {/* Image under description */}
      <div className="my-6">
        <Image
          src={product.image.url}
          alt={product.image.alt || product.title}
          width={1200}
          height={800}
          className="mx-auto w-full h-auto"
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 60vw, 800px"
        />
      </div>

      {/* Price on the right side under the image */}
      <div className="mt-2 text-right">
        {unitPrice < product.price ? (
          <div className="inline-flex items-baseline gap-3">
            <span className="text-xl text-gray-500 line-through">
              ${product.price.toFixed(2)}
            </span>
            <span className="text-2xl font-semibold">
              ${unitPrice.toFixed(2)}
            </span>
          </div>
        ) : (
          <span className="text-2xl font-semibold">
            ${product.price.toFixed(2)}
          </span>
        )}
      </div>

      {/* Add to Bag directly under the price, right-aligned */}
      <div className="mt-4 mb-8 flex justify-end">
        <div className="inline-flex">
          <AddToCartButton product={product} />
        </div>
      </div>

      {reviews.length > 0 && (
        <section className="mt-12">
          <h2 className="text-2xl font-semibold mb-4">Reviews</h2>
        <div className="space-y-6">
            {reviews.map((rev) => (
              <div key={rev.id} className="border-b pb-4">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-medium">{rev.username}</span>
                  <span className="font-bold text-gray-700">⭐ {rev.rating}</span>
                </div>
                <p className="text-gray-600">{rev.description}</p>
              </div>
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
