import { useReducer, createContext } from "react";
import cartReducer from "./cartReducer.js";
import type { CartItem } from "./types/cart.js";

const CartContext = createContext([]);

export const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, []);

  return (
    <CartContext.Provider value={{ cart, dispatch}}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
