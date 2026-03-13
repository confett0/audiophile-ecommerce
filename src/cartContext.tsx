import { useReducer, createContext } from "react";
import type { ReactNode } from "react";
import cartReducer from "./cartReducer.js";
import type { CartItem } from "./types/cart.js";

const CartContext = createContext<CartContextType | null>(null);

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
  addItem: (item: CartItem, quantity: number) => void;
  increment: (id: number) => void;
  decrement: (id: number) => void;
  resetCart: () => void;
};

export default CartContext;
