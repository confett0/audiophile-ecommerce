import "./App.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import { CartProvider } from "./context/CartContext";
import { ProductProvider } from "./context/ProductContext";

export default function App() {
  return (
    <ProductProvider>
      <CartProvider>
        <RouterProvider router={router}></RouterProvider>
      </CartProvider>
    </ProductProvider>
  );
}
