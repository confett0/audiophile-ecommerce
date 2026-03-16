import type { CartItem } from "./types/cart.js";

const SHIPPING = 50;
const VAT_RATE = 0.2; // 20% VAT

export function getCartTotal(cart: CartItem[]) {
  const orderTotal = cart.reduce(
    (a: number, b: CartItem) => a + b.price * b.quantity,
    0,
  );

  const vat = Math.round(orderTotal * VAT_RATE);
  const grandTotal = orderTotal + SHIPPING;

  return {
    orderTotal,
    SHIPPING,
    vat,
    grandTotal,
  };
}
