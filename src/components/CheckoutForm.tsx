import { useState } from "react";

export default function CheckoutForm() {
  const [paymentInputStatus, setPaymentInputStatus] = useState(1);
  // 1: e-money - 2: cash on delivery

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
            autoComplete="name"
          />
        </label>
        <label>
          Email{" "}
          <input
            type="email"
            placeholder="alexei@mail.com"
            className="checkout-input"
            required
            autoComplete="email"
          />
        </label>
        <label>
          Phone Number{" "}
          <input
            type="tel"
            placeholder="+1 202-555-0136"
            className="checkout-input"
            required
            autoComplete="tel"
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
            autoComplete="street-address"
          />
        </label>
        <label>
          Zip code{" "}
          <input
            type="text"
            placeholder="10001"
            className="checkout-input"
            required
            autoComplete="postal-code"
            inputMode="numeric"
          />
        </label>
        <label>
          City{" "}
          <input
            type="text"
            placeholder="New York"
            className="checkout-input"
            required
            autoComplete="address-level2"
          />
        </label>
        <label>
          Country{" "}
          <input
            type="text"
            placeholder="United States"
            className="checkout-input"
            required
            autoComplete="country-name"
          />
        </label>
      </fieldset>
      <fieldset>
        <legend>Payment details</legend>
        <p className="payment-method-title">Payment method</p>
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
              e-Money Number{" "}
              <input
                type="tel"
                placeholder="238521993"
                className="checkout-input"
                required={paymentInputStatus === 1}
                inputMode="numeric"
              />
            </label>
            <label>
              e-Money PIN{" "}
              <input
                type="tel"
                placeholder="6891"
                className="checkout-input"
                required={paymentInputStatus === 1}
                inputMode="numeric"
              />
            </label>
          </>
        ) : paymentInputStatus === 2 ? (
          <div className="cash-on-delivery-text full-width">
            <img
              src="/assets/checkout/icon-cash-on-delivery.svg"
              alt="Cash on delivery"
            />
            <p>
              The ‘Cash on Delivery’ option enables you to pay in cash when our
              delivery courier arrives at your residence. Just make sure your
              address is correct so that your order will not be cancelled.
            </p>
          </div>
        ) : null}
      </fieldset>
    </div>
  );
}
