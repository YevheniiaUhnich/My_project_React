import toast from "react-hot-toast";
import s from "./SearchForm.module.css";
import { FcSearch } from "react-icons/fc";

const initialValues = {
  query: "",
};

export const SearchForm = ({ onSubmit }) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    const form = evt.target;
    const query = form.elements.query.value.trim();
    if (!query) {
      toast.error("The field cannot be empty");
      return;
    }

    onSubmit(query);
    form.reset();
  };
  return (
    <header className={s.searchBarStyle}>
      <form
        onSubmit={handleSubmit}
        initialValues={initialValues}
        className={s.form}>
        <div className={s.containerInput}>
          <FcSearch className={s.iconInput} />
          <input
            className={s.input}
            type="text"
            name="query"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </div>

        <button className={s.button} type="submit">
          Search
        </button>
      </form>
    </header>
  );
};
export default SearchForm;
