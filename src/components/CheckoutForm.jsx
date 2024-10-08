export default function CheckoutForm() {
  return (
    <div className="form-wrap">
      <h3>Checkout</h3>
      <form>
        <fieldset>
          <legend>Billing details</legend>
          <label>
            Name <input type="text" placeholder="Alexei Ward" />
          </label>
          <label>
            Email <input type="email" placeholder="alexei@mail.com" />
          </label>
          <label>
            Phone Number <input type="phone" placeholder="+1 202-555-0136" />
          </label>
        </fieldset>
        <fieldset>
          <legend>Shipping info</legend>
          <label className="address-input">
            Address <input type="text" placeholder="1137 Williams Avenue" />
          </label>
          <label>
            Zip code <input type="text" placeholder="10001" />
          </label>
          <label>
            City <input type="text" placeholder="New York" />
          </label>
          <label>
            Country <input type="text" placeholder="United States" />
          </label>
        </fieldset>
        <fieldset>
          <legend>Payment details</legend>
          <label htmlFor="">Payment method</label>
          <fieldset className="payment-type-fieldset">
            <div className="payment-type-input">
              <input type="radio" name="payment-type" value="e-money" />
              <label>e-Money</label> {/* Htmlfor */}
            </div>
            <div className="payment-type-input">
              <input
                type="radio"
                name="payment-type"
                value="cash-on-delivery"
              />
              <label>Cash on delivery</label>
            </div>
          </fieldset>
          <label>
            e-Money Number <input type="phone" placeholder="238521993" />
          </label>
          <label>
            e-Money PIN <input type="phone" placeholder="6891" />
          </label>
        </fieldset>
      </form>
    </div>
  );
}
