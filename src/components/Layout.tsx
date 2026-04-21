import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";

export default function Layout() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <div className="outlet">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}
