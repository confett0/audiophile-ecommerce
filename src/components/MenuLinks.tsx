import { NavLink } from "react-router-dom";

export default function MenuLinks() {
  const menu = {
    home: "/",
    headphones: "shop/headphones",
    speakers: "shop/speakers",
    earphones: "shop/earphones",
  };
  const menuLinks = Object.entries(menu).map(([label, link]) => {
    return (
      <li key={label}>
        <NavLink
          to={link}
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          {label}
        </NavLink>
      </li>
    );
  });
  return <ul>{menuLinks}</ul>;
}
