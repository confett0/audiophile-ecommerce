import { useContext } from "react";
import CartContext from "../CartContext.js";
import CartItemRow from "./CartItemRow.js";
import CartTotal from "./CartTotal.js";
import type { CartItem } from "../types/cart.js";

export default function CartSummary() {
  const { cart } = useContext(CartContext);
  const itemElements = cart.map((item: CartItem) => {
    return (
      <div className="cart-item">
        <CartItemRow key={item.id} item={item} />
        <p className="cart-item-quantity">x{item.quantity}</p>
      </div>
    );
  });
  return (
    <div className="checkout-cart">
      <div className="cart-header">
        <h6>Summary</h6>
      </div>
      {itemElements}
      <CartTotal showDetails={true} />
    </div>
  );
}
