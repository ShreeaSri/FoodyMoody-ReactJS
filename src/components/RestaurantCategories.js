import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategories = ({ data, showItem, setShowItem, closeItem }) => {
  //   console.log(data);
  const handleClick = (e) => {
    e.preventDefault();
    setShowItem(!showItem);
  };

  return (
    <div>
      {/**header */}
      <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow p-4 ">
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
