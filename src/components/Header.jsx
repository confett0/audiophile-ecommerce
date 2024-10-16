import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Nav from "./Nav";
import Modal from "./Modal";
import Cart from "./Cart";

export default function Header({
  cart,
  orderSummary,
  incrementQuantity,
  decrementQuantity,
  emptyCart,
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

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
          <img src="../src/assets/shared/desktop/logo.svg" />
        </Link>
        <Nav />
        <div className="cart-icon" onClick={toggleModal}>
          <img src="../src/assets/shared/desktop/icon-cart.svg" />
          {cart.length > 0 && (
            <div className="total-items">
              {orderSummary.totalItemsInCart ? orderSummary.totalItemsInCart : ""}
            </div>
          )}
        </div>
      </div>
      {isModalOpen && (
        <Modal closeModal={closeModal} isCart={true}>
          <Cart
            cart={cart}
            orderSummary={orderSummary}
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
