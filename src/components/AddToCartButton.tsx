"use client";

import { Product } from "@/features/products/types";
import { useCartStore } from "@/lib/cartStore";
import { toast } from "react-hot-toast";

interface Props {
  product: Product;
}

export default function AddToCartButton({ product }: Props) {
  const addToCart = useCartStore((state) => state.addToCart);

  const handleClick = () => {
    addToCart(product);
    toast.success("Added to bag!");
  };

  return (
    <button
      onClick={handleClick}
      className="
        mt-auto
        inline-block
        bg-[#696956]
        text-white
        px-6 py-3
        rounded-md
        hover:bg-opacity-90
        transition
        cursor-pointer
      "
    >
      Add to Bag
    </button>
  );
}
