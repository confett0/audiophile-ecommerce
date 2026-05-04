import { Outlet } from "react-router-dom";
import CategoryLinks from "../components/CategoryLinks";
import BeforeFooterArea from "../components/BeforeFooterArea";

export default function Shop() {
  return (
    <div className="shop-wrap">
      <Outlet />
      <CategoryLinks />
      <BeforeFooterArea />
    </div>
  );
}
