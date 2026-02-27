import type { CartItem } from "../types/cart.js";

export default function CartQuantitySelector({
  item,
  incrementQuantity,
  decrementQuantity,
} : CartQuantitySelectorProps ) {
  return (
    <div className="quantity-wrap">
      <button
        className="quantity-button"
        onClick={() => decrementQuantity(item.id)}
      >
        -
      </button>
      <div className="item-quantity">{item.quantity}</div>
      <button
        className="quantity-button"
        onClick={() => incrementQuantity(item.id)}
      >
        +
      </button>
    </div>
  );
}

type CartQuantitySelectorProps = {
  item: CartItem
  incrementQuantity: (a : number) => void
  decrementQuantity: (a : number) => void
}
