import { getProducts } from "@/lib/productApi";
import HomePageClient from "./page.client";

export default async function HomePage() {
  const products = await getProducts();
  return <HomePageClient products={products} />;
}
