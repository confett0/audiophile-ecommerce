import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Cart from "../components/Cart";
import CheckoutForm from "../components/CheckoutForm";
import Modal from "../components/Modal";
import OrderConfirmation from "../components/OrderConfirmation";

export default function Checkout({ cart, orderSummary }) {
  const [isConfirmationModalOpen, setIsConfirmationModalOpen] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsConfirmationModalOpen(true)
  };

  const closeOrderConfirmationModal = () => setIsConfirmationModalOpen(false)

  return (
    <div className="checkout-background">
      <div className="content-wrap">
        <button onClick={() => navigate(-1)} className="minimal back-button">
          Go back
        </button>
        <div className="checkout-grid">
          <CheckoutForm />
          <div>
            <Cart
              cart={cart}
              orderSummary={orderSummary}
              isCheckoutPage={true}
              handleClick={handleSubmit}
            />
          </div>
        </div>
      </div>
      {isConfirmationModalOpen && (
        <Modal closeModal={closeOrderConfirmationModal}>
          <OrderConfirmation cart={cart} orderSummary={orderSummary} closeModal={closeOrderConfirmationModal} />
        </Modal>
      )}
    </div>
  );
}
