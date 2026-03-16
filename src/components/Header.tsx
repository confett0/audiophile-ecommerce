import { useState } from "react";
import { Link } from "react-router-dom";
import ResponsiveNav from "./ResposiveNav.js";
import Modal from "./Modal.js";
import CartOverlay from "./CartOverlay.js";
import { useCart } from "../useCart.js";
import type { CartItem } from "../types/cart.js";

export default function Header() {
  const { cart } = useCart();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const totalItemsInCart = cart.reduce(
    (a: number, b: CartItem) => a + b.quantity,
    0,
  );

  const toggleModal = () => setIsModalOpen((prevState) => !prevState);
  const closeModal = () => setIsModalOpen(false);

  return (
    <header>
      <div className="header-wrap">
        <Link to="/">
          <img className="logo" src="/assets/shared/desktop/logo.svg" />
        </Link>
        <ResponsiveNav />
        <div className="cart-icon" onClick={toggleModal}>
          <img src="/assets/shared/desktop/icon-cart.svg" />
          {cart.length > 0 && (
            <div className="total-items">
              {totalItemsInCart ? totalItemsInCart : ""}
            </div>
          )}
        </div>
      </div>
      {isModalOpen && (
        <Modal closeModal={closeModal} isCart={true} isOpen={isModalOpen}>
          <CartOverlay closeModal={closeModal} />
        </Modal>
      )}
    </header>
  );
}
