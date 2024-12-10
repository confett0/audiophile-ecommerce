import { useState } from "react";
import MenuLinks from "./MenuLinks";
import CategoryLinks from "./CategoryLinks";

export default function ResponsiveNav() {
  const [showMobileNav, setShowMobileNav] = useState(false);
  const toggleNav = () => setShowMobileNav((prev) => !prev);

  return (
    <nav>
      <div className="menu-icon" onClick={toggleNav}>
        ≡
      </div>
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
