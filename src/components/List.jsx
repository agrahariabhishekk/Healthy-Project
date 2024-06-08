import style from "./List.module.css";
const List = ({ fooditem, bought, handleBuyClick }) => {
  return (
    <>
      <li className={`list-group-item ${bought && "active"}`}>
        {fooditem}
        <button
          className={`${style.Button} btn btn-info `}
          onClick={handleBuyClick}
        >
          buy
        </button>
      </li>
    </>
  );
};
export default List;
