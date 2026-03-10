import "./App.css";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./CartContext.js";
import Layout from "./components/Layout.js";
import Home from "./pages/Home.js";
import CategoryPage from "./pages/CategoryPage.js";
import ProductPage from "./pages/ProductPage.js";
import Shop from "./pages/Shop.js";
import Checkout from "./pages/Checkout.js";
import ScrollToTop from "./components/ScrollToTop.js";
import type { CartItem } from "./types/cart.js";
import type { Product } from "./types/product.js";

export default function App() {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (newItem : Product, itemQuantity : number) => {
    //if (itemQuantity === "") return; // avoid adding items with undefined quantity to cart
    setCart((prevCart) => {
      // check if item is already in cart
      const isAlreadyInCart = prevCart.find((item) => item.id === newItem.id);
      if (isAlreadyInCart) {
        // if it is, update its quantity
        return prevCart.map((item) =>
          item.id === newItem.id
            ? { ...item, quantity: item.quantity + itemQuantity }
            : item
        );
      } else {
        // if not, add to cart
        return [
          ...prevCart,
          {
            name: newItem.name,
            shortName: newItem.shortName,
            image: newItem.image,
            id: newItem.id,
            price: newItem.price,
            quantity: itemQuantity,
          },
        ];
      }
    });
  };

  const emptyCart = () => setCart([]);

  const incrementQuantityInCart = (currentItemId : number) => {
    setCart((prevCart) =>
      prevCart.map((item) => {
        if (currentItemId === item.id) {
          return { ...item, quantity: item.quantity + 1 };
        } else {
          return item;
        }
      })
    );
  };

  const decrementQuantityInCart = (currentItemId : number) => {
    setCart((prevCart) => {
      const currentItem = prevCart.find((item) => item.id === currentItemId);
      if (currentItem && currentItem.quantity > 1) {
        return prevCart.map((item) => {
          if (currentItemId === item.id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      } else {
        return prevCart.filter((item) => item.id !== currentItemId);
      }
    });
  };

  return (
    <CartProvider>
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route
          path="/"
          element={
            <Layout
              cart={cart}
              emptyCart={emptyCart}
              incrementQuantity={incrementQuantityInCart}
              decrementQuantity={decrementQuantityInCart}
            />
          }
        >
          <Route index element={<Home />} />
          <Route path="shop" element={<Shop />}>
            <Route
              path="headphones"
              element={
                <CategoryPage
                  category="headphones"
                />
              }
            />
            <Route
              path="speakers"
              element={
                <CategoryPage
                  category="speakers"
                />
              }
            />
            <Route
              path="earphones"
              element={
                <CategoryPage
                  category="earphones"
                />
              }
            />
            <Route
              path=":productSlug"
              element={<ProductPage addToCart={addToCart} />}
            />
          </Route>
          <Route
            path="checkout"
            element={<Checkout cart={cart} emptyCart={emptyCart} />}
          ></Route>
        </Route>
      </Routes>
    </BrowserRouter>
    </CartProvider>
  );
}
