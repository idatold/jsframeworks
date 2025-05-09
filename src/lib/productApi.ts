// src/lib/productApi.ts
import axios from 'axios'
import { Product } from '@/features/products/types'

// ⚠️ Use the v2 URL
const BASE = 'https://v2.api.noroff.dev/online-shop'

interface ListResponse { data: Product[] }
interface SingleResponse { data: Product }

export async function getProducts(): Promise<Product[]> {
  const res = await axios.get<ListResponse>(BASE)
  return res.data.data      // unwrap the `data` array
}

export async function getProductById(id: string): Promise<Product> {
  const res = await axios.get<SingleResponse>(`${BASE}/${id}`)
  return res.data.data
}
