import HeaderBar from "../components/HeaderBar/HeaderBar";
import TaskForm from "../components/TaskForm/TaskForm";
import { TaskList } from "../components/TaskList/TaskList";
import Layout from "../components/Layout/Layout";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchTasks } from "../redux/operations";
import { selectIsLoading, selectError } from "../redux/tasksSlice";

export default function Todos() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);
  return (
    <div>
      <Layout>
        <HeaderBar />
        <TaskForm />
        {isLoading && !error && <b>Request in progress...</b>}
        <TaskList />
      </Layout>
    </div>
  );
}
