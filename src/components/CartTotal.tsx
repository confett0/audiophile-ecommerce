import { useCart } from "../useCart";
import { getCartTotal } from "../cartUtils";

export default function CartTotal({
  showDetails = false,
}: {
  showDetails?: boolean;
}) {
  const { cart } = useCart();
  const { orderTotal, SHIPPING, vat, grandTotal } = getCartTotal(cart);

  return (
    <div className="cart-total-wrap">
      <p>TOTAL</p>
      <p className="cart-total">${orderTotal}</p>
      {showDetails && (
        <>
          <p>SHIPPING</p>
          <p className="cart-total">${SHIPPING}</p>
          <p>VAT (INCLUDED)</p>
          <p className="cart-total">${vat}</p>
          <p className="grandtotal">GRANDTOTAL</p>
          <p className="cart-total grandtotal">${grandTotal}</p>
        </>
      )}
    </div>
  );
}
