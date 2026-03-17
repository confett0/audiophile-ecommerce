import { Link } from "react-router-dom";
import type { Product } from "../types/product";

export default function ProductCard({ item }: ProductCardProps) {
  return (
    <div className="product-card">
      <picture>
        <source
          media="(max-width: 500px)"
          srcSet={item.categoryImage.mobile + " 500w"}
          sizes="500px"
        />
        <source
          media="(max-width: 900px)"
          srcSet={item.categoryImage.tablet + " 900w"}
          sizes="900px"
        />
        <source srcSet={item.categoryImage.desktop + " 1280w"} sizes="1280px" />
        <img src={item.categoryImage.desktop} />
      </picture>
      <div className="product-card-details">
        {item.new && <p className="overline orange-text">New product</p>}
        <h2>{item.name}</h2>
        <p>{item.description}</p>
        <Link to={`/shop/${item.slug}`}>
          <button className="orange">See product</button>
        </Link>
      </div>
    </div>
  );
}

type ProductCardProps = {
  item: Product;
};
