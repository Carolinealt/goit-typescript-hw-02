import toast from "react-hot-toast";
import css from "./SearchBar.module.css";
import { FormEvent } from "react";

const SearchBar = ({ func }) => {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (e.target.elements.query.value.trim() === "") {
      toast("enter valid value");
      return;
    }
    const query: string = e.target.elements.query.value.trim();
    func(query);
  };
  return (
    <>
      <header className={css.header}>
        <form onSubmit={handleSubmit} className={css.form}>
          <input
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            name="query"
            className={css.input}
          />
          <button className={css.searchBtn} type="submit">
            Search
          </button>
        </form>
      </header>
    </>
  );
};

export default SearchBar;
