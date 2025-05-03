import s from "./TaskCounter.module.css";
import { useSelector } from "react-redux";
import { selectTaskCount } from "../../redux/tasksSlice";

export const TaskCounter = () => {
  const count = useSelector(selectTaskCount);

  return (
    <div>
      <p className={s.textCounter}>Active: {count.active}</p>
      <p className={s.textCounter}>Completed: {count.completed}</p>
    </div>
  );
};
