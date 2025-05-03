import s from "./Layout.module.css";

const Layout = ({ children }) => {
  return <main className={s.container}>{children}</main>;
};
export default Layout;
