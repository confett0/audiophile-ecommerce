import type { CartItem } from "../types/cart";

export default function CartItemRow({ item }: { item: CartItem }) {
  return (
    <>
      <img src={item.image.mobile} />
      <div>
        <p className="cart-item-name">{item.shortName}</p>
        <p className="cart-item-price">${item.price}</p>
      </div>
    </>
  );
}
