import "./App.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import { CartProvider } from "./context/CartContext";
import { ProductProvider } from "./context/ProductContext";
/* import Layout from "./components/Layout";
import Home from "./pages/Home";
import CategoryPage from "./pages/CategoryPage";
import ProductPage from "./pages/ProductPage";
import Shop from "./pages/Shop";
import Checkout from "./pages/Checkout"; */
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  return (
    <ProductProvider>
      <CartProvider>
        <RouterProvider router={router} />
      </CartProvider>
    </ProductProvider>
  );
}
