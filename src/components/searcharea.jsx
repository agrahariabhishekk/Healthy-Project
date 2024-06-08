import style from "./searcharea.module.css";

const SearchArea = ({ handleOnChange }) => {
  return (
    <>
      <input
        type="text"
        placeholder="please  enter new item"
        className={style.SearchArea}
        onKeyDown={handleOnChange}
      />
      <button className={`${style.button} btn btn-danger`}>Add</button>
    </>
  );
};
export default SearchArea;
