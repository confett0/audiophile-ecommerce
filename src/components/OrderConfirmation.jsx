import { Link } from "react-router-dom";

export default function OrderConfirmation({ cart, closeModal }) {
  const firstCartItem = cart[0];
  const shipping = 50;
  const grandTotal =
    cart.reduce((a, b) => a + b.price * b.quantity, 0) + shipping;

  return (
    <div className="order-confirmation">
      <img src="src/assets/checkout/icon-order-confirmation.svg" />
      <h3>
        Thank you <br />
        for your order
      </h3>
      <p>You will receive an email confirmation shortly.</p>
      <div className="order-summary">
        <div className="order-summary-items">
          <div className="ordered-items-wrap">
            <img src={firstCartItem.image.mobile} />
            <div>
              <p className="ordered-items-name">{firstCartItem.shortName}</p>
              <p className="ordered-items-price">${firstCartItem.price}</p>
            </div>
            <p className="ordered-items-quantity">x{firstCartItem.quantity}</p>
          </div>
          {cart.length > 1 && (
            <div className="order-summary-other-items">
              <p>and {cart.length - 1} other item(s)</p>
            </div>
          )}
        </div>
        <div className="grand-total">
          <p>Grand Total</p>
          <p className="order-confirmation-grandtotal">${grandTotal}</p>
        </div>
      </div>
      <Link to="/">
        <button className="orange">Back to home</button>
      </Link>
    </div>
  );
}
