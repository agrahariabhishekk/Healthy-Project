import { useState } from "react";
import List from "./List";

const Foodlist = ({ Foodlist, bought }) => {
  let [activeItems, setActiveItems] = useState([]);

  let onBuyButton = (fooditem, event) => {
    let newItem = [...activeItems, fooditem];
    setActiveItems(newItem);
  };
  return (
    <>
      <ul className="list-group">
        {Foodlist.map((fooditem) => (
          <List
            key={fooditem}
            fooditem={fooditem}
            bought={activeItems.includes(fooditem)}
            handleBuyClick={(event) => onBuyButton(fooditem, event)}
          ></List>
        ))}
      </ul>
    </>
  );
};
export default Foodlist;
