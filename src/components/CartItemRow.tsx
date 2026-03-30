import styles from "./Cart.module.css";
import type { CartItem } from "../types/cart";

export default function CartItemRow({ item }: { item: CartItem }) {
  return (
    <>
      <img src={item.image.mobile} />
      <div>
        <p className={styles.cartItemName}>{item.shortName}</p>
        <p className={styles.cartItemPrice}>${item.price}</p>
      </div>
    </>
  );
}
