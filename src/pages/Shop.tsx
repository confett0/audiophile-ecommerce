import { Outlet } from "react-router-dom";
import CategoryLinks from "../components/CategoryLinks.js";
import BeforeFooterArea from "../components/BeforeFooterArea.js";


export default function Shop() {
    return (
        <div className="shop-wrap">
            <Outlet />
            <CategoryLinks />
            <BeforeFooterArea />
        </div>
    )
}