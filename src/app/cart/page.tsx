"use client";

import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useCartStore } from "@/lib/cartStore";
import { toast } from "react-hot-toast";
import { chango, robotoMono } from "@/lib/fonts";

export default function CartPage() {
  const router = useRouter();
  const items = useCartStore((s) => s.items);
  const addToCart = useCartStore((s) => s.addToCart);
  const decrement = useCartStore((s) => s.decrement);
  const clearCart = useCartStore((s) => s.clearCart);

  const total = items.reduce(
    (sum, { product, quantity }) =>
      sum + (product.discountedPrice ?? product.price) * quantity,
    0
  );

  const handleCheckout = () => {
    clearCart();
    toast.success("Checkout complete! Thank you for your order.");
    router.push("/success");
  };

  return (
    <main className={`${robotoMono.className} container mx-auto px-4 py-8`}>
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
            {items.map(({ product, quantity }) => (
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

                {/* Title and quantity controls */}
                <div className="flex-1">
                  <h2 className="font-medium">{product.title}</h2>
                  <div className="flex items-center gap-2 mt-1">
                    <button
                      onClick={() => {
                        decrement(product.id);
                        toast("Removed one from bag", { icon: "🗑️" });
                      }}
                      className="w-6 h-6 flex items-center justify-center bg-gray-200 rounded cursor-pointer hover:bg-gray-300"
                      aria-label="Decrease quantity"
                    >
                      −
                    </button>
                    <span>Qty: {quantity}</span>
                    <button
                      onClick={() => {
                        addToCart(product, 1);
                        toast.success("Increased quantity in bag");
                      }}
                      className="w-6 h-6 flex items-center justify-center bg-gray-200 rounded cursor-pointer hover:bg-gray-300"
                      aria-label="Increase quantity"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Line-item total */}
                <p className="font-semibold">
                  $
                  {(
                    (product.discountedPrice ?? product.price) * quantity
                  ).toFixed(2)}
                </p>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between">
            <button
              onClick={() => {
                clearCart();
                toast.error("Cleared all items from bag");
              }}
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
  );
}
