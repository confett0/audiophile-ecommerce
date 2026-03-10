import { useContext } from "react";
import type { CartItem } from "../types/cart.js";
import CartContext from "../CartContext.js";

export default function CartQuantitySelector({
  item
} : CartQuantitySelectorProps ) {
  const {dispatch} = useContext(CartContext);
  const incrementQuantity = (item : CartItem) => {
    dispatch({
      type: "INCREMENTED_QUANTITY",
      payload: item
    })
  }
  const decrementQuantity = (item : CartItem) => {
    dispatch({
      type: "DECREMENTED_QUANTITY",
      payload: item
    })
  }
  return (
    <div className="quantity-wrap">
      <button
        className="quantity-button"
        onClick={() => decrementQuantity(item)}
      >
        -
      </button>
      <div className="item-quantity">{item.quantity}</div>
      <button
        className="quantity-button"
        onClick={() => incrementQuantity(item)}
      >
        +
      </button>
    </div>
  );
}

type CartQuantitySelectorProps = {
  item: CartItem
}
