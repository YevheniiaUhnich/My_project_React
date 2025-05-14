import { useDispatch, useSelector } from "react-redux";
import { TokenTaskEditor } from "../../components/TokenTaskEditor/TokenTaskEditor";
import { TokenTaskList } from "../../components/TokenTaskList/TokenTaskList";
import { useEffect } from "react";
import { fetchTask } from "../../redux/tokenTasks/operations";
import { selectLoading } from "../../redux/tokenTasks/selectors";

export default function TokenTaskPage() {
  const dispatch = useDispatch();

  const isLoading = useSelector(selectLoading);
  useEffect(() => {
    dispatch(fetchTask());
  }, [dispatch]);

  useEffect(() => {
    document.title = "Your tasks";
  }, []);

  return (
    <>
      <TokenTaskEditor />
      <div>{isLoading && "Request in progress"}</div>
      <TokenTaskList />
    </>
  );
}
