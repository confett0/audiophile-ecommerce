import { useCart } from "../useCart";
import CartItemRow from "./CartItemRow";
import styles from "./Cart.module.css";
import CartTotal from "./CartTotal";
import type { CartItem } from "../types/cart";

export default function CartSummary() {
  const { cart } = useCart();
  const itemElements = cart.map((item: CartItem) => {
    return (
      <div key={item.id} className="cart-item">
        <CartItemRow item={item} />
        <p className="cart-item-quantity">x{item.quantity}</p>
      </div>
    );
  });
  return (
    <div className="cart-wrap">
      <div className="checkout-cart">
        <div className="cart-header">
          <h6>Summary</h6>
        </div>
        {itemElements}
        <CartTotal showDetails={true} />
      </div>
      {cart.length > 0 && (
        <button
          className="orange checkout-button"
          type="submit"
          disabled={cart.length === 0}
        >
          Continue & Pay
        </button>
      )}
    </div>
  );
}
