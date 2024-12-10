import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Nav() {
  const [showNav, setShowNav] = useState(false);
  const toggleNav = () => setShowNav((prev) => !prev);

  return (
    <nav>
      <ul>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="shop/headphones"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Headphones
          </NavLink>
        </li>
        <li>
          <NavLink
            to="shop/speakers"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Speakers
          </NavLink>
        </li>
        <li>
          <NavLink
            to="shop/earphones"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Earphones
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
