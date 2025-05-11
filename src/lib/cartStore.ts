// src/lib/cartStore.ts
import { create } from "zustand"
import { persist, createJSONStorage } from "zustand/middleware"
import type { Product } from "@/features/products/types"

export interface CartItem {
  product: Product
  quantity: number
}

interface CartState {
  items: CartItem[]
  addToCart: (product: Product, qty?: number) => void
  removeFromCart: (id: string) => void
  clearCart: () => void
}

export const useCartStore = create<CartState>()(
  persist(
    (set) => ({
      items: [],
      addToCart: (product, qty = 1) => {
        set((state) => {
          const idx = state.items.findIndex((i) => i.product.id === product.id)
          if (idx > -1) {
            const items = [...state.items]
            items[idx] = {
              product,
              quantity: items[idx].quantity + qty,
            }
            return { items }
          }
          return { items: [...state.items, { product, quantity: qty }] }
        })
      },
      removeFromCart: (id) => {
        set((state) => ({
          items: state.items.filter((i) => i.product.id !== id),
        }))
      },
      clearCart: () => set({ items: [] }),
    }),
    {
      name: "cart-storage",  
      storage: createJSONStorage(() => localStorage),
    }
  )
)
