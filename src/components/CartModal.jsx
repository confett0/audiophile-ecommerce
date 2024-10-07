import Cart from "./Cart";
import { Link } from "react-router-dom";

export default function CartModal({
  setIsModalOpen,
  cart,
  emptyCart,
  incrementQuantity,
  decrementQuantity,
}) {
  return (
    <div className="modal-wrap" onClick={() => setIsModalOpen(false)} >
      <div className="cart-modal">
        <Cart
          cart={cart}
          incrementQuantity={incrementQuantity}
          decrementQuantity={decrementQuantity}
          emptyCart={emptyCart}
        />
        <Link to="/checkout"><button className="orange checkout-button">Checkout</button></Link>
      </div>
    </div>
  );
}
