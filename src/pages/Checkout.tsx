import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CartSummary from "../components/cart/CartSummary";
import CheckoutForm from "../components/CheckoutForm";
import Modal from "../components/Modal";
import OrderConfirmation from "../components/OrderConfirmation";

export default function Checkout() {
  const [isConfirmationModalOpen, setIsConfirmationModalOpen] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
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
            <CartSummary />
          </div>
        </form>
      </div>

      {isConfirmationModalOpen && (
        <Modal
          closeModal={closeOrderConfirmationModal}
          isOpen={isConfirmationModalOpen}
        >
          <OrderConfirmation closeModal={closeOrderConfirmationModal} />
        </Modal>
      )}
    </div>
  );
}
