import s from "./StatusFilter.module.css";
import { Button } from "../Button/Button";
import { useSelector, useDispatch } from "react-redux";
import { selectStatusFilter, setStatusFilter } from "../../redux/filtersSlice";

export const StatusFilter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectStatusFilter);

  const handleFilterChange = (filter) => dispatch(setStatusFilter(filter));

  return (
    <div className={s.wrapper}>
      <button
        onClick={() => handleFilterChange("all")}
        selected={filter === "all"}>
        All
      </button>
      <button
        onClick={() => handleFilterChange("active")}
        selected={filter === "active"}>
        Active
      </button>
      <button
        onClick={() => handleFilterChange("completed")}
        selected={filter === "completed"}>
        Completed
      </button>
    </div>
  );
};
