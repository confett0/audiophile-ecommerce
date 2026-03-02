import type { CartItem } from "./types/cart.js";

const cartReducer = (state: CartItem[], action: (a: CartItem) => void) => {
  switch (action.type) {
    case "add item":
      return [
        ...state,
        {
          id: action.payload.id,
          name: action.payload.name,
          shortName: action.payload.shortName,
          image: action.payload.image,
          price: action.payload.price,
        },
      ];
    case "remove item":
      return state.filter((item) => item.id !== action.payload);
    default:
      return state;
  }
};

export default cartReducer;
