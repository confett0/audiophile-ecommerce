import { useState } from "react";

export default function CheckoutForm() {
  const [paymentInputStatus, setPaymentInputStatus] = useState(0); // 0: no input selected - 1: e-money input selected - 2: cash on delivery input selected

  return (
    <div className="form-wrap" id="checkout-form">
      <h3>Checkout</h3>
        <fieldset>
          <legend>Billing details</legend>
          <label>
            Name{" "}
            <input
              type="text"
              placeholder="Alexei Ward"
              className="checkout-input"
              required
            />
          </label>
          <label>
            Email{" "}
            <input
              type="email"
              placeholder="alexei@mail.com"
              className="checkout-input"
              required
            />
          </label>
          <label>
            Phone Number{" "}
            <input
              type="phone"
              placeholder="+1 202-555-0136"
              className="checkout-input"
              required
            />
          </label>
        </fieldset>
        <fieldset>
          <legend>Shipping info</legend>
          <label className="full-width">
            Address{" "}
            <input
              type="text"
              placeholder="1137 Williams Avenue"
              className="checkout-input"
              required
            />
          </label>
          <label>
            Zip code{" "}
            <input
              type="text"
              placeholder="10001"
              className="checkout-input"
              required
            />
          </label>
          <label>
            City{" "}
            <input
              type="text"
              placeholder="New York"
              className="checkout-input"
              required
            />
          </label>
          <label>
            Country{" "}
            <input
              type="text"
              placeholder="United States"
              className="checkout-input"
              required
            />
          </label>
        </fieldset>
        <fieldset>
          <legend>Payment details</legend>
          <label>Payment method</label>
          <fieldset className="payment-type-fieldset">
            <div className="payment-type-input">
              <input
                type="radio"
                name="payment-type"
                id="e-money"
                value="e-money"
                checked={paymentInputStatus === 1}
                onChange={() => setPaymentInputStatus(1)}
              />
              <label htmlFor="e-money">e-Money</label>
            </div>
            <div className="payment-type-input">
              <input
                type="radio"
                name="payment-type"
                value="cash-on-delivery"
                id="cash-on-delivery"
                checked={paymentInputStatus === 2}
                onChange={() => setPaymentInputStatus(2)}
              />
              <label htmlFor="cash-on-delivery">Cash on delivery</label>
            </div>
          </fieldset>
          {paymentInputStatus === 1 ? (
            <>
              <label>
                e-Money Number <input type="phone" placeholder="238521993" className="checkout-input" />
              </label>
              <label>
                e-Money PIN <input type="phone" placeholder="6891" className="checkout-input"/>
              </label>
            </>
          ) : paymentInputStatus === 2 ? (
            <div className="cash-on-delivery-text full-width">
              <img src="src/assets/checkout/icon-cash-on-delivery.svg" />
              <p>
                The ‘Cash on Delivery’ option enables you to pay in cash when
                our delivery courier arrives at your residence. Just make sure
                your address is correct so that your order will not be
                cancelled.
              </p>
            </div>
          ) : (
            ""
          )}
        </fieldset>
    </div>
  );
}
