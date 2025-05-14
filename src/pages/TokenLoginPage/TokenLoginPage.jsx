import { useEffect } from "react";
import { TokenLoginForm } from "../../components/TokenLoginForm/TokenLoginForm";

export default function TokenLoginPage() {
  useEffect(() => {
    document.title = "Login";
  }, []);
  return <TokenLoginForm />;
}
