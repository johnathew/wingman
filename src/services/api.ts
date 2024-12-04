import { Product } from "../common/types";

export async function fetchProducts(): Promise<Product[]> {
  const response = await fetch("https://fakestoreapi.com/products", {
    method: "GET",
  });

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  return response.json();
}
