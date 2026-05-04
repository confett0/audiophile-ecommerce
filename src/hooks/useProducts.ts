import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";

export function useProducts() {
  const context = useContext(ProductContext);

  if (context === null) {
    throw new Error("useProducts must be used within ProductProvider");
  }

  return context;
}
