import { useDispatch, useSelector } from "react-redux";
import { selectIsRefreshing } from "../redux/tokenAuth/selectors";
import { refreshUser } from "../redux/tokenAuth/operation";
import { Suspense, useEffect, lazy } from "react";
import { TokenBar } from "../components/TokenBar/TokenBar";
import { Route, Routes } from "react-router-dom";
import { TokenPrivateRoute } from "../components/TokenPrivateRoute";
import { TokenRestrictedRoute } from "../components/TokenRestrictedRoute";
// import TokenHomePage from "../pages/TokenHomePage/TokenHomePage";
// import TokenRegisterPage from "../pages/TokenRegisterPage/TokenRegisterPage";
// import TokenLoginPage from "../pages/TokenLoginPage/TokenLoginPage";
// import TokenTaskPage from "../pages/TokenTaskPage/TokenTaskPage";

const TokenHomePage = lazy(() =>
  import("../pages/TokenHomePage/TokenHomePage")
);
const TokenRegisterPage = lazy(() =>
  import("../pages/TokenRegisterPage/TokenRegisterPage")
);
const TokenLoginPage = lazy(() =>
  import("../pages/TokenLoginPage/TokenLoginPage")
);
const TokenTaskPage = lazy(() =>
  import("../pages/TokenTaskPage/TokenTaskPage")
);

export default function Token() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  return isRefreshing ? (
    <strong>Refreshing user...</strong>
  ) : (
    <div>
      <TokenBar />
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<TokenHomePage />} />
          <Route
            path="register"
            element={
              <TokenRestrictedRoute
                redirectTo="/tasks"
                element={<TokenRegisterPage />}
              />
            }
          />
          <Route
            path="/login"
            element={
              <TokenRestrictedRoute
                redirectTo="/tasks"
                element={<TokenLoginPage />}
              />
            }
          />
          <Route
            path="/tasks"
            element={
              <TokenPrivateRoute
                redirectTo="/login"
                element={<TokenTaskPage />}
              />
            }
          />
        </Routes>
      </Suspense>
    </div>
  );
}
