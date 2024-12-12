import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import PropTypes from "prop-types";

export default function Layout({
  cart,
  emptyCart,
  incrementQuantity,
  decrementQuantity,
}) {
  return (
    <>
      <Header
        cart={cart}
        emptyCart={emptyCart}
        incrementQuantity={incrementQuantity}
        decrementQuantity={decrementQuantity}
      />
      <div className="outlet">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

Layout.propTypes = {
  cart: PropTypes.array,
  incrementQuantity: PropTypes.func,
  decrementQuantity: PropTypes.func,
  emptyCart: PropTypes.func,
}
