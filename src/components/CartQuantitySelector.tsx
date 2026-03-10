import { useContext } from "react";
import type { CartItem } from "../types/cart.js";
import CartContext from "../CartContext.js";

export default function CartQuantitySelector({
  item,
}: CartQuantitySelectorProps) {
  const { increment, decrement } = useContext(CartContext);

  return (
    <div className="quantity-wrap">
      <button className="quantity-button" onClick={() => decrement(item.id)}>
        -
      </button>
      <div className="item-quantity">{item.quantity}</div>
      <button className="quantity-button" onClick={() => increment(item.id)}>
        +
      </button>
    </div>
  );
}

type CartQuantitySelectorProps = {
  item: CartItem;
};
