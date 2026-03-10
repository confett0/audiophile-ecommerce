import { useContext } from "react";
import CartQuantitySelector from "./CartQuantitySelector.js";
import CartContext from "../CartContext.js";
import type { CartItem } from "../types/cart.js";

export default function Cart({ isCheckoutPage, handleClick }: CartProps) {
  const { cart, resetCart } = useContext(CartContext);
  const orderTotal = cart.reduce(
    (a: number, b: CartItem) => a + b.price * b.quantity,
    0,
  );
  const shipping = 50;
  const vatRate = 0.2; // 20% VAT
  const vat = (orderTotal * vatRate).toFixed(0);
  const grandTotal = orderTotal + shipping;

  const itemElements = cart.map((item: CartItem) => (
    <div key={item.id} className="cart-item">
      <img src={item.image.mobile} />
      <div>
        <p className="cart-item-name">{item.shortName}</p>
        <p className="cart-item-price">${item.price}</p>
      </div>
      {isCheckoutPage ? (
        <p className="cart-item-quantity">x{item.quantity}</p>
      ) : (
        <CartQuantitySelector item={item} />
      )}
    </div>
  ));

  if (cart.length === 0) {
    return (
      <div className={isCheckoutPage ? "checkout-cart" : "cart"}>
        <h6>Your cart is empty</h6>
      </div>
    );
  }

  return (
    <div className={isCheckoutPage ? "checkout-cart" : "cart"}>
      <div className="cart-header">
        {isCheckoutPage ? <h6>Summary</h6> : <h6>Cart ({cart.length})</h6>}
        {!isCheckoutPage && (
          <button className="minimal empty-cart-button" onClick={resetCart}>
            Remove all
          </button>
        )}
      </div>
      {itemElements}
      <div className="cart-total-wrap">
        <p>TOTAL</p>
        <p className="cart-total">${orderTotal}</p>
        {isCheckoutPage && (
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
      {!isCheckoutPage && (
        <button onClick={handleClick} className="orange cart-button">
          Checkout
        </button>
      )}
    </div>
  );
}

type CartProps = {
  isCheckoutPage?: boolean;
  handleClick: (a: React.SyntheticEvent<HTMLFormElement>) => void;
};
