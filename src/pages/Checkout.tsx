import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import CartContext from "../CartContext.js";
import CartSummary from "../components/CartSummary.js";
import CheckoutForm from "../components/CheckoutForm.js";
import Modal from "../components/Modal.js";
import OrderConfirmation from "../components/OrderConfirmation.js";

export default function Checkout() {
  const [isConfirmationModalOpen, setIsConfirmationModalOpen] = useState(false);
  const { cart } = useContext(CartContext);

  const navigate = useNavigate();

  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
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
              <CartSummary />
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
          <OrderConfirmation closeModal={closeOrderConfirmationModal} />
        </Modal>
      )}
    </div>
  );
}
