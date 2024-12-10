import { useState } from "react";
import MenuLinks from "./MenuLinks";
import CategoryLinks from "./CategoryLinks";

export default function ResponsiveNav() {
  const [showMobileNav, setShowMobileNav] = useState(false);
  const toggleNav = () => setShowMobileNav((prev) => !prev);

  return (
    <nav>
      <img src="./src/assets/shared/tablet/icon-hamburger.svg" className="menu-icon" onClick={toggleNav} />
      {showMobileNav ? (
        <div className="mobile-nav">
          <CategoryLinks />
        </div>
      ) : (
        <MenuLinks />
      )}
    </nav>
  );
}
