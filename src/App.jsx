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
  const [itemQuantity, setItemQuantity] = useState(1);
  const totalItemsInCart = cart.reduce((a, b) => a + b.quantity, 0);

  const addToCart = (newItem) => {
    if (itemQuantity === "") return; // avoid adding items with undefined quantity to cart
    setCart((prevCart) => {
      // check if item is already added to cart
      const isAlreadyInCart = prevCart.find((item) => item.id === newItem.id);
      if (isAlreadyInCart) {
        // if it is update its quantity
        return prevCart.map((item) =>
          item.id === newItem.id
            ? { ...item, quantity: item.quantity + itemQuantity }
            : item
        );
      } else {
        // if not add to cart
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
    setItemQuantity(1); // reset itemQuantity state
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

  const incrementItemQuantity = () =>
    setItemQuantity((prevCount) => prevCount + 1);

  const decrementItemQuantity = () =>
    setItemQuantity((prevCount) => {
      if (prevCount <= 1) return prevCount;
      return prevCount - 1;
    });

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route
          path="/"
          element={
            <Layout
              totalItems={totalItemsInCart}
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
              element={
                <ProductPage
                  cart={cart}
                  addToCart={addToCart}
                  itemQuantity={itemQuantity}
                  setItemQuantity={setItemQuantity}
                  incrementQuantity={incrementItemQuantity}
                  decrementQuantity={decrementItemQuantity}
                />
              }
            />
          </Route>
          <Route path="checkout" element={<Checkout />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
