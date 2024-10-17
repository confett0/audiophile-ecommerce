import "./App.css";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import CategoryPage from "./pages/CategoryPage";
import ProductPage from "./pages/ProductPage";
import Shop from "./pages/Shop";
import Checkout from "./pages/Checkout";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (newItem, itemQuantity) => {
    if (itemQuantity === "") return; // avoid adding items with undefined quantity to cart
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

  const incrementQuantityInCart = (currentItemId) => {
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

  const decrementQuantityInCart = (currentItemId) => {
    setCart((prevCart) => {
      const currentItem = prevCart.find((item) => item.id === currentItemId);
      if (currentItem.quantity > 1) {
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
                  cart={cart}
                  addToCart={addToCart}
                />
              }
            />
            <Route
              path="speakers"
              element={
                <CategoryPage
                  category="speakers"
                  cart={cart}
                  addToCart={addToCart}
                />
              }
            />
            <Route
              path="earphones"
              element={
                <CategoryPage
                  category="earphones"
                  cart={cart}
                  addToCart={addToCart}
                />
              }
            />
            <Route
              path=":productSlug"
              element={<ProductPage cart={cart} addToCart={addToCart} />}
            />
          </Route>
          <Route
            path="checkout"
            element={<Checkout cart={cart} />}
          ></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
