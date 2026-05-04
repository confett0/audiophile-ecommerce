import { useState, useReducer, createContext, useEffect } from "react";
import type { ReactNode } from "react";
import cartReducer from "../cartReducer";
import type { CartItem } from "../types/cart";
import type { Product } from "../types/product";

export const CartContext = createContext<CartContextType | null>(null);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  // initialize cart from localStorage
  const [cart, dispatch] = useReducer(cartReducer, [], () => {
    try {
      const savedCart = localStorage.getItem("savedCart");
      return savedCart ? JSON.parse(savedCart) : [];
    } catch {
      return [];
    }
  });
  // save cart to localStorage
  useEffect(() => {
    try {
      localStorage.setItem("savedCart", JSON.stringify(cart));
    } catch (error) {
      console.error("Failed to save cart to localStorage: ", error);
    }
  }, [cart]);
  const [justAdded, setJustAdded] = useState(false);
  const addItem = (item: Product, quantity: number) => {
    dispatch({
      type: "ADDED_ITEM",
      payload: {
        id: item.id,
        name: item.name,
        shortName: item.shortName,
        image: item.image,
        price: item.price,
        category: item.category,
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
      value={{
        cart,
        addItem,
        increment,
        decrement,
        resetCart,
        justAdded,
        setJustAdded,
      }}
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
