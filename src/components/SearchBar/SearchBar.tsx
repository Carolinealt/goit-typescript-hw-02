import toast from "react-hot-toast";
import css from "./SearchBar.module.css";
import React, { FC } from "react";

interface SearchBarProps {
  func: (query: string) => void;
}

const SearchBar: FC<SearchBarProps> = ({ func }) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const queryInput = e.currentTarget.elements.namedItem(
      "query"
    ) as HTMLInputElement;
    const query = queryInput.value.trim();
    if (query === "") {
      toast("enter valid value");
      return;
    }

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
