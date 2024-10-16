import { Link } from "react-router-dom";

export default function OrderConfirmation({ cart, orderSummary, closeModal }) {
    const firstCartItem = cart[0];

  return (
    <div className="order-confirmation">
      <img src="src/assets/checkout/icon-order-confirmation.svg" />
      <h3>Thank you <br />for your order</h3>
      <p>You will receive an email confirmation shortly.</p>
      <div className="order-summary">
        <div className="order-summary-items">
            <div className="ordered-items-wrap">
                <img src={firstCartItem.image.mobile} />
                <div>
                  <p>{firstCartItem.shortName}</p>
                  <p>${firstCartItem.price}</p>
                </div>
                <p>x{firstCartItem.quantity}</p>
            </div>
            {cart.length > 1 && <p>and {cart.length - 1} other item(s)</p>}
        </div>
        <div className="grand-total">
          <p>Grand Total</p>
          <p>{orderSummary.grandTotal}</p>
        </div>
      </div>
      <Link to="/">
        <button className="orange">Back to home</button>
      </Link>
    </div>
  );
}
