import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";

export default function Layout({ children }: { children?: React.ReactNode }) {
  return (
    <>
      <ScrollToTop />
      <Header />
      <div className="outlet">{children ?? <Outlet />}</div>
      <Footer />
    </>
  );
}
