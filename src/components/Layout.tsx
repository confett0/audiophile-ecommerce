import { Outlet } from "react-router-dom";
import Header from "./Header.js";
import Footer from "./Footer.js";
import type { CartItem } from "../types/cart.js";

export default function Layout({
  cart,
  emptyCart,
  incrementQuantity,
  decrementQuantity,
} : LayoutProps) {
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

type LayoutProps = {
  cart: CartItem[]
  incrementQuantity: (a : number) => void
  decrementQuantity: (a : number) => void
  emptyCart: () => void
}
