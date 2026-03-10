import { useReducer, createContext } from "react";
import type { ReactNode } from "react";
import cartReducer, { type CartAction } from "./cartReducer.js";
import type { CartItem } from "./types/cart.js";

import type { Dispatch } from "react";

const CartContext = createContext<CartContextType | []>([]);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, dispatch] = useReducer(cartReducer, []);
  const addItem = (item: CartItem, quantity: number) => {
    dispatch({
      type: "ADDED_ITEM",
      payload: item,
      quantity: quantity,
    });
  };
  const increment = (id: number) => {
    dispatch({
      type: "INCREMENTED_QUANTITY",
      payload: { id },
    });
  };
  const decrement = (id: number) => {
    dispatch({
      type: "DECREMENTED_QUANTITY",
      payload: { id },
    });
  };
  const resetCart = () => {
    dispatch({
      type: "EMPTIED_CART",
    });
  };

  return (
    <CartContext.Provider
      value={{ cart, addItem, increment, decrement, resetCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

type CartContextType = {
  cart: CartItem[];
  dispatch: Dispatch<CartAction>;
};

export default CartContext;
