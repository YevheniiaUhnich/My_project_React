import { NavLink } from "react-router-dom";
import s from "./TokenAuthNav.module.css";

export const TokenAuthNav = () => {
  return (
    <div>
      <NavLink to="/register" className={s.LinkAutNav}>
        Register
      </NavLink>
      <NavLink to="/login" className={s.LinkAutNav}>
        Login in
      </NavLink>
    </div>
  );
};
