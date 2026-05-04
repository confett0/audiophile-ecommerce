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

  useEffect(() => {
    // block scroll and close menu with ESC
    if (!showMobileNav) return;

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeNav();
    };

    window.addEventListener("keydown", handleEscape);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [showMobileNav, closeNav]);

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
          <div
            id="mobile-nav"
            className="mobile-nav"
            role="dialog"
            aria-modal="true"
            onClick={(e) => e.stopPropagation()}
          >
            <CategoryLinks />
          </div>
        </>
      )}
    </nav>
  );
}
