import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";

const getNavLinkStyle = ({ isActive }) => ({
  color: isActive ? "blue" : "black",
  textDecoration: isActive ? "underline" : "none",
});

export default function Navigation() {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <nav style={{ display: "flex", gap: "10px" }}>
      <NavLink to="/" style={getNavLinkStyle}>
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink to="/contacts" style={getNavLinkStyle}>
          Contacts
        </NavLink>
      )}
    </nav>
  );
}
