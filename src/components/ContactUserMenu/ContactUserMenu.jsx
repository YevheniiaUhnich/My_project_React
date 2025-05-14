import { useDispatch, useSelector } from "react-redux";
import s from "./ContactUserMenu.module.css";
import { logOut } from "../../redux/contactAuth/operation";
import { selectUser } from "../../redux/contactAuth/selectors";

export const ContactUserMenu = () => {
  const dispatch = useDispatch();

  const user = useSelector(selectUser);

  const handleLogOut = () => {
    dispatch(logOut());
  };

  return (
    <div>
      <p className={s.titleUser}>Welcome, {user?.name || "Guest"}</p>
      <button className={s.btnLogOut} type="button" onClick={handleLogOut}>
        Logout
      </button>
    </div>
  );
};
