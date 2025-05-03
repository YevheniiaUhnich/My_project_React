import s from "./TaskForm.module.css";
import { useDispatch } from "react-redux";
import { Button } from "../../components/Button/Button";
import { addTasks } from "../../redux/operations";

export const TaskForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const form = evt.target;

    dispatch(addTasks(evt.target.elements.text.value));
    form.reset();
  };
  return (
    <form onSubmit={handleSubmit} className={s.form}>
      <input
        type="text"
        name="text"
        className={s.input}
        placeholder="Enter task text..."
      />
      <button type="submit">Add task</button>
    </form>
  );
};
export default TaskForm;
