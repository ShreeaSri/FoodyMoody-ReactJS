import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
const Body = () => {
  const [resNumber, setResNumber] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const res = await data.json();

    console.log(res);

    const newRes =
      res?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    const newResMap = newRes.map((ele) => ele.info);
    console.log(newRes);
    console.log(newResMap);

    setResNumber(newResMap);
  };

  //conditional rendering
  return resNumber.length === 0 ? (
    <Shimmer></Shimmer>
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input type="text" className="search-box"></input>
          <button>Search</button>
        </div>
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
