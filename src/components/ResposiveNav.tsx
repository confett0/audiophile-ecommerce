import { useState } from "react";
import MenuLinks from "./MenuLinks";
import CategoryLinks from "./CategoryLinks";

export default function ResponsiveNav() {
  const [showMobileNav, setShowMobileNav] = useState(false);
  const toggleNav = () => setShowMobileNav((prev) => !prev);
  const closeNav = () => setShowMobileNav(false);

  return (
    <nav>
      <img
        src="/assets/shared/tablet/icon-hamburger.svg"
        className="menu-icon"
        onClick={toggleNav}
      />
      {showMobileNav ? (
        <>
          <div className="modal-wrap" onClick={closeNav}></div>
          <div className="mobile-nav">
            <CategoryLinks />
          </div>
        </>
      ) : (
        <MenuLinks />
      )}
    </nav>
  );
}
