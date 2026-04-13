import { useCart } from "../hooks/useCart";
import CartItemRow from "./CartItemRow";
import styles from "./Cart.module.css";
import CartTotal from "./CartTotal";
import type { CartItem } from "../types/cart";

export default function CartSummary() {
  const { cart } = useCart();
  const itemElements = cart.map((item: CartItem) => {
    return (
      <div key={item.id} className={styles.cartItem}>
        <CartItemRow item={item} />
        <div>
          <p>x{item.quantity}</p>
        </div>
      </div>
    );
  });
  return (
    <div className={styles.cartWrap}>
      <div>
        <div className={styles.cartHeader}>
          <h6>Summary</h6>
        </div>
        {itemElements}
        <CartTotal showDetails={true} />
      </div>
      {cart.length > 0 && (
        <button
          className={`orange ${styles.checkoutButton}`}
          type="submit"
          disabled={cart.length === 0}
        >
          Continue & Pay
        </button>
      )}
    </div>
  );
}
