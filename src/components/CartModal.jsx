import Cart from "./Cart";
import { useNavigate } from "react-router-dom";

export default function CartModal({
  closeModal,
  cart,
  emptyCart,
  incrementQuantity,
  decrementQuantity,
}) {
  const navigate = useNavigate()
  
  const goToCheckout = () => {
    closeModal();
    navigate("/checkout");
  }

  return (
    <>
      <div className="modal-wrap" onClick={closeModal}></div>
      <div className="cart-modal">
        <Cart
          cart={cart}
          incrementQuantity={incrementQuantity}
          decrementQuantity={decrementQuantity}
          emptyCart={emptyCart}
          isCheckoutPage={false}
          handleClick={goToCheckout}
        />
      </div>
    </>
  );
}
