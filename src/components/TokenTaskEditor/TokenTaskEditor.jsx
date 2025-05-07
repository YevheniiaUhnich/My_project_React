import { useDispatch } from "react-redux";
import { addTask } from "../../redux/tokenTasks/operations";

export const TokenTaskEditor = () => {
  const dispatch = useDispatch();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const form = evt.currentTarget;
    const text = form.elements.text.value;

    if (text !== "") {
      dispatch(addTask(text));
      form.reset;
    }
    alert("Task cannot be empty. Enter some text!");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input name="text" />
      <button type="submit">Add Task</button>
    </form>
  );
};
