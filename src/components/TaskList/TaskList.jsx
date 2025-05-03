import { Task } from "../../components/Task/Task";
import { useSelector } from "react-redux";
import s from "./TaskList.module.css";
// import { selectStatusFilter } from "../../redux/filtersSlice";
import { selectVisibleTasks } from "../../redux/tasksSlice";

// const getVisibleTasks = (tasks, statusFilter) => {
//   switch (statusFilter) {
//     case "active":
//       return tasks.filter((task) => !task.completed);
//     case "completed":
//       return tasks.filter((task) => task.completed);
//     default:
//       return tasks;
//   }
// };

export const TaskList = () => {
  const tasks = useSelector(selectVisibleTasks);
  // const statusFilter = useSelector(selectStatusFilter);
  // const visibleTasks = getVisibleTasks(tasks, statusFilter);
  return (
    <ul>
      {tasks.map((task) => (
        <li className={s.listTask} key={task.id}>
          <Task task={task} />
        </li>
      ))}
    </ul>
  );
};
