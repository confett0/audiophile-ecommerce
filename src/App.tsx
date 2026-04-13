import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import { ProductProvider } from "./context/ProductContext";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import CategoryPage from "./pages/CategoryPage";
import ProductPage from "./pages/ProductPage";
import Shop from "./pages/Shop";
import Checkout from "./pages/Checkout";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  return (
    <ProductProvider>
      <CartProvider>
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="shop" element={<Shop />}>
                <Route
                  path="headphones"
                  element={<CategoryPage category="headphones" />}
                />
                <Route
                  path="speakers"
                  element={<CategoryPage category="speakers" />}
                />
                <Route
                  path="earphones"
                  element={<CategoryPage category="earphones" />}
                />
                <Route path=":productSlug" element={<ProductPage />} />
              </Route>
              <Route path="checkout" element={<Checkout />}></Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </ProductProvider>
  );
}
