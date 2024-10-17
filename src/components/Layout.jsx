import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

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
