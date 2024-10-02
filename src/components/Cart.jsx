import CartQuantitySelector from "./CartQuantitySelector";

export default function Cart({
  cart,
  emptyCart,
  incrementQuantity,
  decrementQuantity,
}) {
  const orderTotal = cart.reduce((a, b) => a + b.price * b.quantity, 0);

  const itemElements = cart.map((item) => (
    <div key={item.id} className="cart-item">
      <img src={item.image.mobile} />
      <div>
        <p className="cart-item-name">{item.name}</p>
        <p>${item.price}</p>
      </div>
      <CartQuantitySelector
        item={item}
        incrementQuantity={incrementQuantity}
        decrementQuantity={decrementQuantity}
      />
    </div>
  ));

  if (cart.length === 0) {
    return <h6>Your cart is empty</h6>;
  }

  return (
    <>
      <div className="cart-header">
        <h6>Cart ({cart.length})</h6>
        <button className="minimal empty-cart-button" onClick={emptyCart}>
          Remove all
        </button>
      </div>
      {itemElements}
      <div className="cart-total-wrap">
        <p>TOTAL</p>
        <p className="cart-total">${orderTotal}</p>
      </div>
      <button className="orange checkout-button">Checkout</button>
    </>
  );
}
