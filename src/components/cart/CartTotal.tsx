import { useCart } from "../../hooks/useCart";
import { getCartTotal } from "../../cartUtils";
import styles from "./Cart.module.css";

export default function CartTotal({
  showDetails = false,
}: {
  showDetails?: boolean;
}) {
  const { cart } = useCart();
  const { orderTotal, SHIPPING, vat, grandTotal } = getCartTotal(cart);

  return (
    <div className={styles.cartTotalWrap}>
      <p>TOTAL</p>
      <p className={styles.cartAmount}>${orderTotal}</p>
      {showDetails && (
        <>
          <p>SHIPPING</p>
          <p className={styles.cartAmount}>${SHIPPING}</p>
          <p>VAT (INCLUDED)</p>
          <p className={styles.cartAmount}>${vat}</p>
          <p className={styles.grandtotal}>GRANDTOTAL</p>
          <p className={`${styles.cartAmount} ${styles.grandtotal}`}>
            ${grandTotal}
          </p>
        </>
      )}
    </div>
  );
}
