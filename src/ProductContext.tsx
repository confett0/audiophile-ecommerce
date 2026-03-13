import { useState, useEffect, createContext } from "react";
import type { ReactNode } from "react";
import type { Product } from "./types/product.js";

export const ProductContext = createContext<Product[] | null>(null);

export const ProductProvider = ({ children }: { children: ReactNode }) => {
  const [products, setProducts] = useState<Product[] | null>(null);
  useEffect(() => {
    fetch("/data.json")
      .then((result) => result.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <ProductContext.Provider value={products}>
      {children}
    </ProductContext.Provider>
  );
};
