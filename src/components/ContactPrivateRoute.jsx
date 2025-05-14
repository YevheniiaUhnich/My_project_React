import { Navigate } from "react-router-dom";
import { selectIsLoggedIn } from "../redux/contactAuth/selectors";
import { useSelector } from "react-redux";

export const ContactPrivateRoute = ({ element, redirectTo = "/login" }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return isLoggedIn ? element : <Navigate to={redirectTo} />;
};
