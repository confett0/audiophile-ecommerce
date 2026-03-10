import { useReducer, createContext } from "react";
import type { ReactNode } from "react";
import cartReducer, { type CartAction } from "./cartReducer.js";
import type { CartItem } from "./types/cart.js";
import type { Dispatch } from "react";

const CartContext = createContext<CartContextType | []>([]);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, dispatch] = useReducer(cartReducer, [] as CartItem[]);

  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

type CartContextType = {
  cart: CartItem[];
  dispatch: Dispatch<CartAction>;
};

export default CartContext;
