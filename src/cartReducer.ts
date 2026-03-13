import type { CartItem } from "./types/cart.js";

const cartReducer = (state: CartItem[], action: CartAction) => {
  switch (action.type) {
    case "ADDED_ITEM":
      const existing = state.find((item) => item.id === action.payload.id);
      if (existing)
        return state.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + action.quantity }
            : item,
        );
      else
        return [
          ...state,
          {
            ...action.payload,
            quantity: action.quantity,
          },
        ];
    case "REMOVED_ITEM":
      return state.filter((item) => item.id !== action.payload.id);
    case "INCREMENTED_QUANTITY":
      return state.map((item) =>
        item.id === action.payload.id
          ? { ...item, quantity: item.quantity + 1 }
          : item,
      );
    case "DECREMENTED_QUANTITY":
      const currentItem = state.find((item) => item.id === action.payload.id);
      if (currentItem?.quantity === 1) {
        return state.filter((item) => item.id !== action.payload.id);
      }
      return state.map((item) =>
        item.id === action.payload.id
          ? { ...item, quantity: item.quantity - 1 }
          : item,
      );

    case "EMPTIED_CART":
      return [];
    default:
      return state;
  }
};

type CartAction =
  | { type: "ADDED_ITEM"; payload: CartItem; quantity: number }
  | { type: "REMOVED_ITEM"; payload: { id: number } }
  | { type: "INCREMENTED_QUANTITY"; payload: { id: number } }
  | { type: "DECREMENTED_QUANTITY"; payload: { id: number } }
  | { type: "EMPTIED_CART" };

export default cartReducer;
export type { CartAction };
