import { useDispatch, useSelector } from "react-redux";
import s from "./ContactSearchBox.module.css";
import { selectNameFilter } from "../../redux/contactFilters/selectors";
import { LiaSearchSolid } from "react-icons/lia";
import { setNameFilter } from "../../redux/contactFilters/slice";

export const ContactSearchBox = () => {
  const dispatch = useDispatch();
  const nameFilter = useSelector(selectNameFilter);

  const handleChange = (e) => {
    dispatch(setNameFilter(e.target.value));
  };

  return (
    <div className={s.searchWrapper}>
      <p className={s.titleSearch}>Find contacts by name or number</p>
      <div className={s.inputForIcon}>
        <LiaSearchSolid className={s.iconFilter} />
        <input
          value={nameFilter}
          onChange={handleChange}
          className={s.input}
          placeholder="Search for name or number"
        />
      </div>
    </div>
  );
};
