import { useEffect } from "react";

export default function ContactHomePage() {
  useEffect(() => {
    document.title = "Contact Manager";
  }, []);
  return (
    <div>
      <h1>Welcome to the Contact Manager!</h1>
    </div>
  );
}
