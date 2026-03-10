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

  return (
    <CartProvider>
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route
          path="/"
          element={
            <Layout />
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
              element={<ProductPage />}
            />
          </Route>
          <Route
            path="checkout"
            element={<Checkout />}
          ></Route>
        </Route>
      </Routes>
    </BrowserRouter>
    </CartProvider>
  );
}
