import { useEffect } from "react";
import { TokenRegisterForm } from "../../components/TokenRegisterForm/TokenRegisterForm";

export default function TokenRegisterPage() {
  useEffect(() => {
    document.title = "Register";
  }, []);
  return <TokenRegisterForm />;
}
