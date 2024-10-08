import { useNavigate } from "react-router-dom"
import Cart from "../components/Cart"

export default function Checkout({cart}) {
    const navigate = useNavigate();

    return (
        <div className="checkout-background">
            <div className="content-wrap">
                <button onClick={() => navigate(-1)} className="minimal back-button">Go back</button>
                <div className="checkout-grid">
                    <div className="form-wrap">
                    <h3>Checkout</h3>
                        <form>
                            <fieldset>
                                <legend>Billing details</legend>
                                <label>Name <input type="text" placeholder="Alexei Ward" /></label>
                                <label>Email <input type="email" placeholder="alexei@mail.com" /></label>
                                <label>Phone Number <input type="phone" placeholder="+1 202-555-0136" /></label>
                            </fieldset>
                        </form>
                    </div>
                    <Cart cart={cart} isCheckoutPage={true} />
                </div>
            </div>
        </div>
    )
}