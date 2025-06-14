import s from "./TaskForm.module.css";
import { useDispatch } from "react-redux";
import { Button } from "../../components/Button/Button";
import { addTasks } from "../../redux/operations";
import { FcTodoList } from "react-icons/fc";

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
      <div>
        <FcTodoList size={30} className={s.iconAddTodos} />
        <input
          type="text"
          name="text"
          className={s.input}
          placeholder="Edd todo text..."
        />
      </div>
      <button type="submit" className={s.btnAddTodo}>
        Add task
      </button>
    </form>
  );
};
export default TaskForm;
