import { useNavigate } from "react-router-dom"
import Cart from "../components/Cart"

export default function Checkout({cart}) {
    const navigate = useNavigate();

    return (
        <div className="content-wrap">
            <button onClick={() => navigate(-1)} className="minimal back-button">Go back</button>
            <div className="checkout-wrap">
                <form></form>
                <Cart cart={cart} isCheckoutPage={true} />
            </div>
        </div>
    )
}