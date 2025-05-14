import { useEffect } from "react";
import { ContactRegistrationForm } from "../../components/ContactRegistrationForm/ContactRegistrationForm";

export default function ContactRegistrationPage() {
  useEffect(() => {
    document.title = "Register";
  }, []);
  return <ContactRegistrationForm />;
}
