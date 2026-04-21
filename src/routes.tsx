import { createBrowserRouter } from "react-router-dom";
import Checkout from "./pages/Checkout";
import ProductPage from "./pages/ProductPage";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import CategoryPage from "./pages/CategoryPage";
import Shop from "./pages/Shop";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    // errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/shop",
        element: <Shop />,
        children: [
          {
            path: ":category",
            element: <CategoryPage />,
          },
          {
            path: ":category/:productSlug",
            element: <ProductPage />,
          },
        ],
      },
      {
        path: "/checkout",
        element: <Checkout />,
      },
    ],
  },
]);
