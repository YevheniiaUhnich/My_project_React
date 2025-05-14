import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "../../redux/contacts/operation";
import {
  selectIsLoggedIn,
  selectIsRefreshing,
} from "../../redux/contactAuth/selectors";
import { Navigate } from "react-router-dom";
import ContactList from "../../components/ContactList/ContactList";
import ContactForm from "../../components/ContactForm/ContactForm";
import { ContactEdit } from "../../components/ContactEdit/ContactEdit";
import { selectEditContact } from "../../redux/contacts/selectors";
import { ContactSearchBox } from "../../components/ContactSearchBox/ContactSearchBox";
import { ContactConfirmDeleteModal } from "../../components/ContactConfirmDeleteModal/ContactConfirmDeleteModal";

export default function ContactsPage() {
  const dispatch = useDispatch();

  const isLoggedIn = useSelector(selectIsLoggedIn);

  const isRefreshing = useSelector(selectIsRefreshing);

  const editingContact = useSelector(selectEditContact);

  useEffect(() => {
    if (isLoggedIn && !isRefreshing) {
      dispatch(fetchContacts());
    }
  }, [dispatch, isLoggedIn, isRefreshing]);

  useEffect(() => {
    document.title = "Your contacts";
  }, []);

  if (!isLoggedIn && !isRefreshing) {
    return <Navigate to="/login" />;
  }

  return (
    <>
      <h2>Your Contacts</h2>
      <ContactForm />

      {editingContact ? (
        <ContactEdit />
      ) : (
        <div>
          {isRefreshing ? (
            <p>Loading...</p>
          ) : (
            <>
              <ContactSearchBox />
              <ContactList />
            </>
          )}
        </div>
      )}
      <ContactConfirmDeleteModal />
    </>
  );
}
