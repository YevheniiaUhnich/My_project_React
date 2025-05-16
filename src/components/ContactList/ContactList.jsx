import s from "./ContactList.module.css";
import Contact from "../Contact/Contact";
import { useSelector } from "react-redux";
import { selectFilteredContacts } from "../../redux/contactFilters/selectors";
import { selectAllContacts } from "../../redux/contacts/selectors";

const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);
  const allContacts = useSelector(selectAllContacts);

  console.log("All contacts from store:", allContacts);
  console.log("Filtered contacts:", filteredContacts);

  if (filteredContacts.length === 0) {
    return <p>No contacts found...</p>;
  }

  return (
    <ul className={s.contactList}>
      {filteredContacts.map((contact) => (
        <li className={s.contactLi} key={contact.id}>
          <Contact contact={contact} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
