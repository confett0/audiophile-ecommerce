import { useNavigate } from "react-router-dom";
import QuantitySelector from "./QuantitySelector";
import CartItemRow from "./CartItemRow";
import CartTotal from "./CartTotal";
import { useCart } from "../useCart";
import styles from "./Cart.module.css";
import type { CartItem } from "../types/cart";

export default function CartOverlay({
  closeModal,
}: {
  closeModal: () => void;
}) {
  const { cart, resetCart, increment, decrement } = useCart();
  const navigate = useNavigate();

  const goToCheckout = () => {
    closeModal();
    navigate("/checkout");
  };

  const itemElements = cart.map((item: CartItem) => {
    return (
      <div className={styles.cartItem} key={item.id}>
        <CartItemRow item={item} />
        <QuantitySelector
          value={item.quantity}
          onDecrement={() => decrement(item.id)}
          onIncrement={() => increment(item.id)}
        />
      </div>
    );
  });
  return (
    <div className={styles.cart}>
      {cart.length === 0 ? (
        <h6 id="modal-title">Your cart is empty</h6>
      ) : (
        <>
          <div className={styles.cartHeader}>
            <h6 id="modal-title">Cart ({cart.length})</h6>
            <button
              className={`minimal ${styles.emptyCartButton}`}
              onClick={resetCart}
            >
              Remove all
            </button>
          </div>
          {itemElements}
          <CartTotal />
          <button
            className={`orange ${styles.checkoutButton}`}
            onClick={goToCheckout}
          >
            Checkout
          </button>
        </>
      )}
    </div>
  );
}
