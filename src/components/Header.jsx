import { useState } from "react";
import { Link } from "react-router-dom";
import Nav from "./Nav";
import CartModal from "./CartModal";

export default function Header({
  totalItems,
  cart,
  incrementQuantity,
  decrementQuantity,
  emptyCart,
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => setIsModalOpen((prevState) => !prevState);
  return (
    <header>
      <div className="header-wrap">
        <Link to="/">
          <img src="../src/assets/shared/desktop/logo.svg" />
        </Link>
        <Nav />
        <div className="cart-icon" onClick={toggleModal}>
          <img src="../src/assets/shared/desktop/icon-cart.svg" />
          <span className="total-items">{totalItems ? totalItems : ""}</span>
        </div>
      </div>
      {isModalOpen && (
        <CartModal
          setIsModalOpen={setIsModalOpen}
          cart={cart}
          emptyCart={emptyCart}
          incrementQuantity={incrementQuantity}
          decrementQuantity={decrementQuantity}
        />
      )}
    </header>
  );
}
