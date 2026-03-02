import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Cart from "../components/Cart.js";
import CheckoutForm from "../components/CheckoutForm.js";
import Modal from "../components/Modal.js";
import OrderConfirmation from "../components/OrderConfirmation.js";
import type { CartItem } from "../types/cart.js";

export default function Checkout({ cart, emptyCart } : CheckoutProps) {
  const [isConfirmationModalOpen, setIsConfirmationModalOpen] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (e : React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsConfirmationModalOpen(true);
  };

  const closeOrderConfirmationModal = () => setIsConfirmationModalOpen(false);

  return (
    <div className="checkout-background">
      <div className="content-wrap">
        <button onClick={() => navigate(-1)} className="minimal back-button">
          Go back
        </button>
        <form onSubmit={handleSubmit}>
          <div className="checkout-grid">
            <CheckoutForm />
            <div className="cart-wrap">
              <Cart
                cart={cart}
                isCheckoutPage={true}
                handleClick={handleSubmit}
              />
              {cart.length > 0 && (
                <button className="orange checkout-button" type="submit">
                  Continue & Pay
                </button>
              )}
            </div>
          </div>
        </form>
      </div>

      {isConfirmationModalOpen && (
        <Modal closeModal={closeOrderConfirmationModal}>
          <OrderConfirmation
            cart={cart}
            closeModal={closeOrderConfirmationModal}
            emptyCart={emptyCart}
          />
        </Modal>
      )}
    </div>
  );
}

type CheckoutProps = {
  cart: CartItem[]
  emptyCart: () => void
}
