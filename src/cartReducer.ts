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
            id: action.payload.id,
            name: action.payload.name,
            shortName: action.payload.shortName,
            image: action.payload.image,
            price: action.payload.price,
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

type CartAction = {
  type:
    | "ADDED_ITEM"
    | "REMOVED_ITEM"
    | "INCREMENTED_QUANTITY"
    | "DECREMENTED_QUANTITY"
    | "EMPTIED_CART";
  payload: CartItem;
  quantity: number;
};

export default cartReducer;
