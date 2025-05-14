import { NavLink } from "react-router-dom";
import s from "./ContactAuthNav.module.css";

export const ContactAuthNav = () => {
  return (
    <div className={s.authNav}>
      <NavLink className={s.LinkAuthNav} to="/register">
        Register
      </NavLink>
      <NavLink className={s.LinkAuthNav} to="/login">
        Log In
      </NavLink>
    </div>
  );
};
