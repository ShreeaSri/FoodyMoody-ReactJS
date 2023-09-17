import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";
const Body = () => {
  const [resNumber, setResNumber] = useState([
    {
      id: 1,
      name: "KFC",
      cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
      costForTwo: 40000,
      costForTwoString: "₹400 FOR TWO",
      cloudinaryImageId: "bdcd233971b7c81bf77e1fa4471280eb",
      deliveryTime: 36,
      avgRating: 3.3,
      minDeliveryTime: 36,
      maxDeliveryTime: 36,
      deliveryTime: "36 MINS",
      lastMileTravel: 3.5,
      address:
        "KFC restaurants, 942,SV Tower, 16th Main, BTM 2nd Stage ,560076",
      locality: "2nd Stage",
      parentId: 547,
      unserviceable: false,
      veg: false,
    },
    {
      id: 2,
      name: "The Mom's Kitchen",
      cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
      costForTwo: 40000,
      costForTwoString: "₹400 FOR TWO",
      cloudinaryImageId: "aizb6uyem2jb1hcrhxac",
      deliveryTime: 36,
      avgRating: 4.4,
      minDeliveryTime: 36,
      maxDeliveryTime: 36,
      deliveryTime: "36 MINS",
      lastMileTravel: 3.5,
      address:
        "KFC restaurants, 942,SV Tower, 16th Main, BTM 2nd Stage ,560076",
      locality: "2nd Stage",
      parentId: 547,
      unserviceable: false,
      veg: false,
    },
    {
      id: 3,
      name: "Varsha Anand",
      cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
      costForTwo: 40000,
      costForTwoString: "₹400 FOR TWO",
      cloudinaryImageId: "a2ec5418246b622ec4baa3bd051ef6ab",
      deliveryTime: 36,
      avgRating: 4.2,
      minDeliveryTime: 36,
      maxDeliveryTime: 36,
      deliveryTime: "36 MINS",
      lastMileTravel: 3.5,
      address:
        "KFC restaurants, 942,SV Tower, 16th Main, BTM 2nd Stage ,560076",
      locality: "2nd Stage",
      parentId: 547,
      unserviceable: false,
      veg: false,
    },
  ]);

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
