import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
const Body = () => {
  const [resNumber, setResNumber] = useState([]);
  const [filteredResttaurant, setfilteredResttaurant] = useState([]);
  const [searchResult, setSearchResult] = useState("");

  console.log("body rendered");

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
    setfilteredResttaurant(newResMap);
  };

  //conditional rendering
  return resNumber.length === 0 ? (
    <Shimmer></Shimmer>
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchResult}
            onChange={(e) => {
              setSearchResult(e.target.value);
            }}
          ></input>
          <button
            onClick={() => {
              //filter the restaurant cards and update the UI
              //searchText
              console.log(searchResult);

              const filteredResttaurant = resNumber.filter((res) =>
                res.name.toLowerCase().includes(searchResult.toLowerCase())
              );
              setfilteredResttaurant(filteredResttaurant);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = resNumber.filter((list) => list.avgRating > 4);
            setfilteredResttaurant(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {filteredResttaurant.map((list) => (
          <RestaurantCard key={list.id} resData={list} />
        ))}
      </div>
    </div>
  );
};
export default Body;
