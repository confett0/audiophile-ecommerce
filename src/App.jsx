import "./App.css";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import CategoryPage from "./pages/CategoryPage";
import ProductPage from "./pages/ProductPage";
import Shop from "./pages/Shop";
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

  const deleteFromCart = (itemToDelete) =>
    setCart((prevCart) =>
      prevCart.filter((item) => item.id !== itemToDelete.id)
    );

  const emptyCart = () => setCart([]);

  const increment = (currentItemId) => {
    setCart(prevCart => prevCart.map(item => {
      if (currentItemId === item.id) {
        return {...item, quantity: item.quantity + 1}
      } else {
        return item;
      }
    })
  )}

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
              setItemQuantity={setItemQuantity} incrementQuantity={increment}
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
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
