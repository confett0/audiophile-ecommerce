import { useNavigate } from "react-router-dom"
import Cart from "../components/Cart"

export default function Checkout({cart}) {
    const navigate = useNavigate();

    return (
        <div className="checkout-background">
            <div className="content-wrap">
                <button onClick={() => navigate(-1)} className="minimal back-button">Go back</button>
                <div className="checkout-grid">
                    <form>
                        <label>Name <input type="text" /></label>
                        <label>Email <input type="email" /></label>
                        <label>Phone Number <input type="phone" /></label>
                    </form>
                    <Cart cart={cart} isCheckoutPage={true} />
                </div>
            </div>
        </div>
    )
}