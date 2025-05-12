import axios from "axios";
import { Product } from "@/features/products/types";

const BASE = "https://v2.api.noroff.dev/online-shop";

interface ListResponse {
  data: Product[];
}
interface SingleResponse {
  data: Product;
}

export async function getProducts(): Promise<Product[]> {
  const res = await axios.get<ListResponse>(BASE);
  return res.data.data;
}

export async function getProductById(id: string): Promise<Product> {
  const res = await axios.get<SingleResponse>(`${BASE}/${id}`);
  return res.data.data;
}
