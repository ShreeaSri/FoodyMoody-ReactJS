import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useEffect, useState } from "react";
const Body = () => {
  const [resNumber, setResNumber] = useState(resList);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.093211&lng=80.236398&page_type=DESKTOP_WEB_LISTING"
    );

    const res = await data.json();

    console.log(res);
  };

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
