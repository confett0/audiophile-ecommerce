import type { CartItem } from "../types/cart.js";

export default function CartItemRow({ item }: { item: CartItem }) {
  return (
    <div key={item.id} className="cart-item">
      <img src={item.image.mobile} />
      <div>
        <p className="cart-item-name">{item.shortName}</p>
        <p className="cart-item-price">${item.price}</p>
      </div>
    </div>
  );
}
