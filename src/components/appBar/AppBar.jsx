import useSelector from "../../hookUseAuth/HookUseAuth";
import Navigation from "../navigation/Navigation";
import UserMenu from "../userMenu/UserMenu";
import AuthNav from "../authNav/AuthNav";
import css from "./AppBar.module.css";

const AppBar = () => {
  const { isLoggedIn } = useSelector();

  return (
    <header className={css.header}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};

export default AppBar;