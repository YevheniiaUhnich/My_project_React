import Text from "../components/Text/Text";
// import { GoCodescanCheckmark } from "react-icons/go";
import { selectIsLoggedIn } from "../redux/contactAuth/selectors";
import { selectIsRefreshing } from "../redux/contactAuth/selectors";
import { ContactAppBar } from "../components/ContactAppBar/ContactAppBar";
import ContactHomePage from "../pages/ContactHomePage/ContactHomePage";
import ContactRegistrationPage from "../pages/ContactRegistrationPage/ContactRegistrationPage";
import ContactsPage from "../pages/ContactsPage/ContactsPage";
import ContactLoginPage from "../pages/ContactLoginPage/ContactLoginPage";
import { ContactRestrictedRoute } from "../components/ContactRestrictedRoute";
import { ContactPrivateRoute } from "../components/ContactPrivateRoute";
import "../App.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { refreshUser } from "../redux/contactAuth/operation";
import { fetchContacts } from "../redux/contacts/operation";
import Layout from "../components/Layout/Layout";
import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";

export default function Contacts() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);
  const isLoggedIn = useSelector(selectIsLoggedIn);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(fetchContacts());
    }
  }, [dispatch, isLoggedIn]);

  return isRefreshing ? (
    <strong className="refresh">Refreshing user...</strong>
  ) : (
    <Layout>
      <ContactAppBar />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<ContactHomePage />} />

          <Route
            path="/login"
            element={
              <ContactRestrictedRoute
                redirectTo="/contacts"
                element={<ContactLoginPage />}
              />
            }
          />

          <Route
            path="/register"
            element={
              <ContactRestrictedRoute
                redirectTo="/contacts"
                element={<ContactRegistrationPage />}
              />
            }
          />

          <Route
            path="/contacts"
            element={
              <ContactPrivateRoute
                redirectTo="/login"
                element={<ContactsPage />}
              />
            }
          />
        </Routes>
      </Suspense>
    </Layout>
  );
}
