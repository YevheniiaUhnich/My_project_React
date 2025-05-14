import { ContactNavigation } from "../ContactNavigation/ContactNavigation";
import { selectIsLoggedIn } from "../../redux/contactAuth/selectors";
import { useSelector } from "react-redux";
import { ContactAuthNav } from "../ContactAuthNav/ContactAuthNav";
import { ContactUserMenu } from "../ContactUserMenu/ContactUserMenu";

export const ContactAppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <header>
      <ContactNavigation />
      {isLoggedIn ? <ContactUserMenu /> : <ContactAuthNav />}
    </header>
  );
};
