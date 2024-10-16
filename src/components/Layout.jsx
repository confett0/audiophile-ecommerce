import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({
  cart,
  orderSummary,
  emptyCart,
  incrementQuantity,
  decrementQuantity,
}) {
  return (
    <>
      <Header
        orderSummary={orderSummary}
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
