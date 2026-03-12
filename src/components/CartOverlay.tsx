import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import QuantitySelector from "./QuantitySelector.js";
import CartItemRow from "./CartItemRow.js";
import CartTotal from "./CartTotal.js";
import CartContext from "../CartContext.js";
import type { CartItem } from "../types/cart.js";

export default function CartOverlay({
  closeModal,
}: {
  closeModal: () => void;
}) {
  const { cart, resetCart, increment, decrement } = useContext(CartContext);
  const navigate = useNavigate();

  const goToCheckout = () => {
    closeModal();
    navigate("/checkout");
  };

  const itemElements = cart.map((item: CartItem) => {
    return (
      <div className="cart-item">
        <CartItemRow key={item.id} item={item} />
        <QuantitySelector
          value={item.quantity}
          onDecrement={() => decrement(item.id)}
          onIncrement={() => increment(item.id)}
        />
      </div>
    );
  });
  return (
    <div className="cart">
      {cart.length === 0 ? (
        <h6>Your cart is empty</h6>
      ) : (
        <>
          <div className="cart-header">
            <h6>Cart ({cart.length})</h6>
            <button className="minimal empty-cart-button" onClick={resetCart}>
              Remove all
            </button>
          </div>
          {itemElements}
          <CartTotal />
          <button className="orange cart-button" onClick={goToCheckout}>
            Checkout
          </button>
        </>
      )}
    </div>
  );
}
