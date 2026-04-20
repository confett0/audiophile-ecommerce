import LinkButton from "./LinkButton";
import styles from "./ProductCard.module.css";
import type { Product } from "../types/product";

export default function ProductCard({ item }: { item: Product }) {
  return (
    <div className={styles.card}>
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
        <img src={item.categoryImage.desktop} alt={item.name} />
      </picture>
      <div>
        {item.new && <p className="overline orange-text">New product</p>}
        <h2>{item.name}</h2>
        <p>{item.description}</p>
        <LinkButton to={`/shop/${item.slug}`}>See product</LinkButton>
      </div>
    </div>
  );
}
