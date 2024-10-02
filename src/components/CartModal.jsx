import Cart from "./Cart";

export default function CartModal({
  setIsModalOpen,
  cart,
  emptyCart,
  incrementQuantity,
  decrementQuantity,
}) {
  return (
    <div className="modal-wrap" /*onClick={() => setIsModalOpen(false)}*/ >
      <div className="cart-modal">
        <Cart
          cart={cart}
          incrementQuantity={incrementQuantity}
          decrementQuantity={decrementQuantity}
          emptyCart={emptyCart}
        />
      </div>
    </div>
  );
}
