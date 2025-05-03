import { MdClose } from "react-icons/md";
import s from "./Task.module.css";
import { useDispatch } from "react-redux";
import { deleteTasks, toggleCompleted } from "../../redux/operations";

export const Task = ({ task }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteTasks(task.id));
  };

  const handleToggle = () => {
    dispatch(toggleCompleted(task));
  };

  return (
    <div className={s.wrapper}>
      <input
        type="checkbox"
        onChange={handleToggle}
        className={s.checkbox}
        checked={task.completed}
      />
      <p className={task.text}>{task.text}</p>
      <button type="button" className={s.btnTask} onClick={handleDelete}>
        <MdClose size={24} />
      </button>
    </div>
  );
};
