"use client";

import Link from "next/link";
import Image from "next/image";
import { useCartStore } from "@/lib/cartStore";

export default function Header() {
  const count = useCartStore((state) =>
    state.items.reduce((sum, i) => sum + i.quantity, 0)
  );

  return (
    <header className="bg-[#FDFCED] shadow-sm">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/">
          <div className="relative w-32 h-10">
            <Image
              src="/logo.svg"
              alt="Pistachio"
              fill
              className="object-contain drop-shadow-[0px_4px_4px_rgba(0,0,0,0.25)]"
            />
          </div>
        </Link>

        <Link href="/cart" className="relative block">
          <Image src="/bag.svg" alt="Cart" width={24} height={24} />
          {count > 0 && (
            <span className="absolute -top-1 -right-2 flex items-center justify-center w-5 h-5 text-xs font-semibold text-white bg-red-500 rounded-full">
              {count}
            </span>
          )}
        </Link>
      </div>
    </header>
  );
}
