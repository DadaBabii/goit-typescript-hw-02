import css from "./LoadMoreBtn.module.css";

type LoadMoreBtnProps = {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void; 

}

const LoadMoreBtn = ({ onClick } :LoadMoreBtnProps) => {
  return (
    <button className={css.button} onClick={onClick} type="button">
      load more
    </button>
  );
};

export default LoadMoreBtn;