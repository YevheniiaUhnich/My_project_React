import { NavLink } from "react-router-dom";
import s from "./TokenNavigation.module.css";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/tokenAuth/selectors";

export const TokenNavigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <nav>
      <NavLink className={s.Link} to="/">
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink className={s.Link} to="/">
          Tasks
        </NavLink>
      )}
    </nav>
  );
};
