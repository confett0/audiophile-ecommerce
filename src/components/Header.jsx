import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ResponsiveNav from "./ResposiveNav";
import Modal from "./Modal";
import Cart from "./Cart";
import PropTypes from "prop-types";

export default function Header({
  cart,
  incrementQuantity,
  decrementQuantity,
  emptyCart,
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();
  const totalItemsInCart = cart.reduce((a, b) => a + b.quantity, 0);

  const toggleModal = () => setIsModalOpen((prevState) => !prevState);
  const closeModal = () => setIsModalOpen(false);
  const goToCheckout = () => {
    closeModal();
    navigate("/checkout");
  };

  return (
    <header>
      <div className="header-wrap">
        <Link to="/">
          <img className="logo" src="src/assets/shared/desktop/logo.svg" />
        </Link>
        <ResponsiveNav />
        <div className="cart-icon" onClick={toggleModal}>
          <img src="/src/assets/shared/desktop/icon-cart.svg" />
          {cart.length > 0 && (
            <div className="total-items">
              {totalItemsInCart ? totalItemsInCart : ""}
            </div>
          )}
        </div>
      </div>
      {isModalOpen && (
        <Modal closeModal={closeModal} isCart={true}>
          <Cart
            cart={cart}
            emptyCart={emptyCart}
            incrementQuantity={incrementQuantity}
            decrementQuantity={decrementQuantity}
            handleClick={goToCheckout}
          />
        </Modal>
      )}
    </header>
  );
}

Header.propTypes = {
  cart: PropTypes.array,
  incrementQuantity: PropTypes.func,
  decrementQuantity: PropTypes.func,
  emptyCart: PropTypes.func,
}
