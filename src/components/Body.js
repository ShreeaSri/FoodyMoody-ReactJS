import RestaurantCard, { withDiscountLabel } from "./RestaurantCard";
import { useEffect, useState, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [resNumber, setResNumber] = useState([]);
  const [filteredResttaurant, setfilteredResttaurant] = useState([]);
  const [searchResult, setSearchResult] = useState("");

  const RestaurantCardDiscount = withDiscountLabel(RestaurantCard);

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

    // console.log(newRes);
    const newResMap = newRes.map((ele) => ele.info);
    // console.log(newRes);
    console.log(newResMap);

    setResNumber(newResMap);
    setfilteredResttaurant(newResMap);
  };

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false)
    return <h1>Looks like you are not connected to internet!</h1>;

  const { loggedInuser, setuserInfo } = useContext(UserContext);

  //conditional rendering
  return resNumber.length === 0 ? (
    <Shimmer></Shimmer>
  ) : (
    <div className="body px-40">
      <div className="filter flex justify-between ">
        <div className="flex justify-between search m-4 p-4 ">
          <div>
            <input
              type="text"
              className="border border-solid border-black"
              value={searchResult}
              onChange={(e) => {
                setSearchResult(e.target.value);
              }}
            ></input>
            <button
              className="px-6 py-0.5 shadow-lg bg-slate-50 ml-2 mr-0 rounded-2xl"
              onClick={() => {
                //filter the restaurant cards and update the UI
                //searchText
                // console.log(searchResult);

                const filteredResttaurant = resNumber.filter((res) =>
                  res.name.toLowerCase().includes(searchResult.toLowerCase())
                );
                setfilteredResttaurant(filteredResttaurant);
              }}
            >
              Search
            </button>
          </div>
          <div className=" mx-4">
            <input
              className="border border-black "
              value={loggedInuser}
              onChange={(e) => setuserInfo(e.target.value)}
            />
            <label className="mx-4">User Name</label>
          </div>
        </div>

        <div className="search m-4 p-4">
          <button
            className="px-4 py-0.5 shadow-lg bg-slate-50 rounded-2xl"
            onClick={() => {
              const filteredList = resNumber.filter(
                (list) => list.avgRating > 4
              );
              setfilteredResttaurant(filteredList);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 m-2 p-2">
        {filteredResttaurant.map((list) => (
          <Link key={list.id} to={"/restaurants/" + list.id}>
            {list &&
            list.aggregatedDiscountInfoV3 &&
            list.aggregatedDiscountInfoV3.header ? (
              <RestaurantCardDiscount resData={list} />
            ) : (
              <RestaurantCard resData={list} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Body;
