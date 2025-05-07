import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectIsLoggedIn } from "../redux/tokenAuth/selectors";

/**
 * -if the route is private and the user is logged in, render the component
 * - Otherwise render <Navigate> to redirectTo
 */

export const TokenPrivateRoute = ({
  component: Component,
  redirectTo = "/",
}) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return isLoggedIn ? Component : <Navigate to={redirectTo} />;
};
