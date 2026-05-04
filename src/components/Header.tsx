import { useState } from "react";
import { Link } from "react-router-dom";
import ResponsiveNav from "./ResposiveNav";
import Modal from "./Modal";
import CartOverlay from "./cart/CartOverlay";
import { getCartTotal } from "../cartUtils";
import { useCart } from "../hooks/useCart";

export default function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { cart, justAdded } = useCart();
  const { totalItemsInCart } = getCartTotal(cart);

  const toggleModal = () => setIsModalOpen((prevState) => !prevState);
  const closeModal = () => setIsModalOpen(false);

  return (
    <header>
      <div className="header-wrap">
        <Link to="/">
          <img
            className="logo"
            src="/assets/shared/desktop/logo.svg"
            alt="Audiophile home"
          />
        </Link>
        <ResponsiveNav />
        <button
          className={`cart-icon ${justAdded ? "added" : ""}`}
          onClick={toggleModal}
          aria-label={`Shopping cart with ${totalItemsInCart} items`}
          aria-expanded={isModalOpen}
          aria-controls="cart-overlay"
        >
          <img
            src="/assets/shared/desktop/icon-cart.svg"
            alt=""
            aria-hidden="true"
          />
          {cart.length > 0 && (
            <div className="total-items" aria-live="polite">
              {totalItemsInCart ? totalItemsInCart : ""}
            </div>
          )}
        </button>
      </div>
      {isModalOpen && (
        <Modal closeModal={closeModal} isCart={true} isOpen={isModalOpen}>
          <CartOverlay closeModal={closeModal} />
        </Modal>
      )}
    </header>
  );
}
