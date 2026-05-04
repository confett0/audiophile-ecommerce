import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import MenuLinks from "./MenuLinks";
import CategoryLinks from "./CategoryLinks";

export default function ResponsiveNav() {
  const [showMobileNav, setShowMobileNav] = useState(false);
  const toggleNav = () => setShowMobileNav((prev) => !prev);
  const closeNav = () => setShowMobileNav(false);
  const location = useLocation();

  useEffect(() => {
    // close menu on page change
    closeNav();
  }, [location]);

  return (
    <nav>
      <button
        className="menu-icon"
        onClick={toggleNav}
        aria-label="Toggle navigation menu"
        aria-expanded={showMobileNav}
        aria-controls="mobile-nav"
      >
        <img src="/assets/shared/tablet/icon-hamburger.svg" />
      </button>
      <MenuLinks />
      {showMobileNav && (
        <>
          <div className="overlay" onClick={closeNav}></div>
          <div className="mobile-nav" onClick={(e) => e.stopPropagation()}>
            <CategoryLinks />
          </div>
        </>
      )}
    </nav>
  );
}
