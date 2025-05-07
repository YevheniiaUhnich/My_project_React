import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../redux/tokenAuth/operation";
import { selectUser } from "../../redux/tokenAuth/selectors";

export const TokenUserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  return (
    <div>
      <p>Welcome, {user.name}</p>
      <button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </button>
    </div>
  );
};
