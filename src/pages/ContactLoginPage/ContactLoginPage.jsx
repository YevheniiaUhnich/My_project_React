import { useEffect } from "react";
import { ContactLoginForm } from "../../components/ContactLoginForm/ContactLoginForm";

export default function ContactLoginPage() {
  useEffect(() => {
    document.title = "Login";
  }, []);
  return <ContactLoginForm />;
}
