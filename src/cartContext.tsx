import { useReducer, createContext } from "react";
import type { ReactNode } from "react";
import cartReducer from "./cartReducer";
import type { CartItem } from "./types/cart";
import type { Product } from "./types/product";

export const CartContext = createContext<CartContextType | null>(null);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, dispatch] = useReducer(cartReducer, []);
  const addItem = (item: Product, quantity: number) => {
    dispatch({
      type: "ADDED_ITEM",
      payload: {
        id: item.id,
        name: item.name,
        shortName: item.shortName,
        image: item.image,
        price: item.price,
      },
      quantity,
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
  addItem: (item: Product, quantity: number) => void;
  increment: (id: number) => void;
  decrement: (id: number) => void;
  resetCart: () => void;
};
