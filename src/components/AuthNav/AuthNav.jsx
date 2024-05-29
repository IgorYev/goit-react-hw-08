import { NavLink } from "react-router-dom";
import clsx from "clsx";
import css from "./AuthNav.module.css";

const getNavLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

export default function AuthNav() {
  return (
    <nav className={css.navUser}>
      <NavLink to="/register" className={getNavLinkClass}>
        Registration
      </NavLink>
      <NavLink to="/login" className={getNavLinkClass}>
        Login
      </NavLink>
    </nav>
  );
}
