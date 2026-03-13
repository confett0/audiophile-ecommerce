import { useState, useEffect, useContext } from "react";
import { ProductContext } from "../ProductContext.js";
import ProductCard from "../components/ProductCard.js";
import type { Category } from "../types/product.js";
import type { Product } from "../types/product.js";

export default function CategoryPage({ category }: CategoryPageProps) {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) =>
        setProducts(
          data
            .reverse()
            .filter((product: Product) => product.category === category),
        ),
      );
  }, [category]);

  const productElements = products.map((item) => (
    <ProductCard key={item.id} item={item} />
  ));

  return (
    <>
      <h2 className="category-title">{category}</h2>
      <div className="content-wrap">
        <div className="product-wrap">{productElements}</div>
      </div>
    </>
  );
}

type CategoryPageProps = {
  category: Category;
};
