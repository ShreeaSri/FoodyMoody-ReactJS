import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategories = ({ data }) => {
  //   console.log(data);
  const [showItem, setShowItem] = useState(false);
  const handleClick = () => {
    setShowItem(!showItem);
  };
  return (
    <div>
      {/**header */}
      <div className="w-6/12 mx-auto my-4 bg-slate-50 shadow p-4 ">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="text-lg">
            {`${data.title} (${data.itemCards.length})`}
          </span>
          <span>⌄</span>
        </div>
        {/**accordian body */}
        {showItem && <ItemList items={data.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategories;
