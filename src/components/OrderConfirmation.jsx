import { Link } from "react-router-dom";

export default function OrderConfirmation({ cart, grandTotal }) {
    const firstCartItem = cart[0];
  return (
    <div>
      <img src="src/assets/checkout/icon-order-confirmation.svg" />
      <h3>Thank you for your order</h3>
      <p>You will receive an email confirmation shortly.</p>
      <div>
        <div>
            <div>
                <img src={firstCartItem.image.mobile} />
                <p>{firstCartItem.name}</p>
                <p>{firstCartItem.price}</p>
                <p>{firstCartItem.quantity}</p>
            </div>
            {cart.length > 1 && <p>and {cart.length - 1} other item(s)</p>}
        </div>
        <div>
          <p>Grand Total</p>
          <p>{grandTotal}</p>
        </div>
      </div>
      <Link to="/">
        <button className="orange">Back to home</button>
      </Link>
    </div>
  );
}
