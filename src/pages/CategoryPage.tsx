import { useProducts } from "../useProducts";
import ProductCard from "../components/ProductCard";
import type { Category } from "../types/product";

export default function CategoryPage({ category }: CategoryPageProps) {
  const products = useProducts();
  const categoryProducts = products.filter(
    (product) => product.category === category,
  );

  const productElements = categoryProducts.map((item) => (
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
