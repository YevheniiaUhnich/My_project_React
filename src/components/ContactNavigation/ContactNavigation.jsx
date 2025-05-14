import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/contactAuth/selectors";
import s from "./ContactNavigation.module.css";
import { NavLink } from "react-router-dom";

export const ContactNavigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <nav className={s.navPage}>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? `${s.LinkNavigation} ${s.active}` : s.LinkNavigation
        }>
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink
          to="/contacts"
          className={({ isActive }) =>
            isActive ? `${s.LinkNavigation} ${s.active}` : s.LinkNavigation
          }>
          Contacts
        </NavLink>
      )}
    </nav>
  );
};
