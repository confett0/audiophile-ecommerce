import { useState, useEffect, createContext } from "react";
import type { ReactNode } from "react";
import type { Product } from "../types/product";

export const ProductContext = createContext<Product[] | []>([]);

export const ProductProvider = ({ children }: { children: ReactNode }) => {
  const [products, setProducts] = useState<Product[] | []>([]);
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
