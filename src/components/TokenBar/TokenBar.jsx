import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/tokenAuth/selectors";
import { TokenUserMenu } from "../TokenUserMenu/TokenUserMenu";
import { TokenAuthNav } from "../TokenAuthNav/TokenAuthNav";
import { TokenNavigation } from "../TokenNavigation/TokenNavigation";

export const TokenBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <header>
      <TokenNavigation />
      {isLoggedIn ? <TokenUserMenu /> : <TokenAuthNav />}
    </header>
  );
};
