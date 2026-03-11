import { useContext } from "react";
import CartContext from "../CartContext.js";
import type { CartItem } from "../types/cart.js";

export default function CartTotal({
  showDetails = false,
}: {
  showDetails?: boolean;
}) {
  const { cart } = useContext(CartContext);

  const orderTotal = cart.reduce(
    (a: number, b: CartItem) => a + b.price * b.quantity,
    0,
  );
  const shipping = 50;
  const vatRate = 0.2; // 20% VAT
  const vat = (orderTotal * vatRate).toFixed(0);
  const grandTotal = orderTotal + shipping;
  return (
    <div className="cart-total-wrap">
      <p>TOTAL</p>
      <p className="cart-total">${orderTotal}</p>
      {showDetails && (
        <>
          <p>SHIPPING</p>
          <p className="cart-total">${shipping}</p>
          <p>VAT (INCLUDED)</p>
          <p className="cart-total">${vat}</p>
          <p className="grandtotal">GRANDTOTAL</p>
          <p className="cart-total grandtotal">${grandTotal}</p>
        </>
      )}
    </div>
  );
}
