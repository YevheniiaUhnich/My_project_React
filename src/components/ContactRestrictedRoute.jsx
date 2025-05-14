import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectIsLoggedIn } from "../redux/contactAuth/selectors";

export const ContactRestrictedRoute = ({
  element,
  redirectTo = "/contacts",
}) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return isLoggedIn ? <Navigate to={redirectTo} /> : element;
};
