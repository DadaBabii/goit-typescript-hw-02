import toast, { Toaster } from "react-hot-toast";
import css from "./SearchBar.module.css";
import { FormEvent } from "react";
const notify = () => toast("Please enter something!");

type SearchBarProps = {
  onSearch: (inputValue: string) => void;
}

const SearchBar = ({ onSearch }:SearchBarProps) => {
  const handleSubmit = (evt:FormEvent<HTMLFormElement>):void => {
    evt.preventDefault();
    console.log(evt.currentTarget);
    console.log(evt.target);
        const searchInput = (evt.currentTarget.elements.namedItem('searchvalue') as HTMLInputElement)?.value.trim();
    if (searchInput === "") {
      notify();
      console.log("nothing");

      return;
    }
    onSearch(searchInput);
  };

  return (
    <header className={css.section}>
      <form className={css.form} onSubmit={handleSubmit}>
        <input
          className={css.input}
          type="text"
          name="searchvalue"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button className={css.button} type="submit">
          Search
        </button>
        <Toaster
          toastOptions={{
            className: "",
            style: {
              border: "1px solid #713200",
              backgroundColor: "tomato",
              padding: "16px",
              color: "#713200",
            },
          }}
        />
      </form>
    </header>
  );
};

export default SearchBar;