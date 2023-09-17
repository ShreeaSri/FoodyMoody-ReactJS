import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";
const Body = () => {
  const [resNumber, setResNumber] = useState(resList);

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            filteredList = resNumber.filter((list) => list.avgRating > 4);
            setResNumber(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {resNumber.map((list) => (
          <RestaurantCard key={list.id} resData={list} />
        ))}
      </div>
    </div>
  );
};
export default Body;
