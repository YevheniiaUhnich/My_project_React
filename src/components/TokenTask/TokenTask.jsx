import { useDispatch } from "react-redux";
import { deleteTask } from "../../redux/tokenTasks/operations";

export const TokenTask = ({ id, text }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteTask(id));
  };
  return (
    <div>
      <p>{text}</p>
      <button onClick={handleDelete} type="button">
        Delete
      </button>
    </div>
  );
};
