export default function CartQuantitySelector({
  item,
  incrementQuantity,
  decrementQuantity,
}) {
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
