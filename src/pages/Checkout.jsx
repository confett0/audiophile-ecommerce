import { useNavigate } from "react-router-dom"
import Cart from "../components/Cart"
import CheckoutForm from "../components/CheckoutForm";

export default function Checkout({cart}) {
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted");
      }

    return (
        <div className="checkout-background">
            <div className="content-wrap">
                <button onClick={() => navigate(-1)} className="minimal back-button">Go back</button>
                <div className="checkout-grid">
                    <CheckoutForm />
                    <div>
                        <Cart cart={cart} isCheckoutPage={true} handleClick={handleSubmit} />
                    </div>
                </div>
            </div>
        </div>
    )
}