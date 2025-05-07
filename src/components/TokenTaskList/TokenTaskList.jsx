import { useSelector } from "react-redux";
import { TokenTask } from "../TokenTask/TokenTask";
import { selectAllTasks } from "../../redux/tokenTasks/selectors";

export const TokenTaskList = () => {
  const tasks = useSelector(selectAllTasks);

  return (
    <ul>
      {tasks.map(({ id, text }) => (
        <li key={id}>
          <TokenTask id={id} text={text} />
        </li>
      ))}
    </ul>
  );
};
