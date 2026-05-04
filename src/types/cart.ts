import type { Category } from "./category";

export type CartItem = {
  name: string;
  shortName: string;
  image: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
  id: number;
  price: number;
  quantity: number;
  category: Category;
};

export type BaseCartItem = Omit<CartItem, "quantity">;
