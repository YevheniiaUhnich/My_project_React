import { StatusFilter } from "../StatusFilter/StatusFilter";
import { TaskCounter } from "../TaskCounter/TaskCounter";
import s from "./HeaderBar.module.css";

const HeaderBar = () => {
  return (
    <header className={s.headerBar}>
      <section className={s.sectionTitleOne}>
        <h2 className={s.title}>TodoList</h2>
        <TaskCounter />
      </section>

      <section className={s.sectionTitleTwo}>
        <h2 className={s.title}>Filter by status</h2>
        <StatusFilter />
      </section>
    </header>
  );
};
export default HeaderBar;
