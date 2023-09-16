import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://img.freepik.com/premium-vector/simple-minimalist-food-bag-restaurant-delivery-service-logo-design-vector_493994-1029.jpg"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const styleCard = {
  backgroundColor: "#f0f0f0",
};

const resList = [
  {
    id: 1,
    name: "KFC",
    cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
    costForTwo: 40000,
    costForTwoString: "₹400 FOR TWO",
    cloudinaryImageId: "bdcd233971b7c81bf77e1fa4471280eb",
    deliveryTime: 36,
    avgRating: 4.4,
    minDeliveryTime: 36,
    maxDeliveryTime: 36,
    deliveryTime: "36 MINS",
    lastMileTravel: 3.5,
    address: "KFC restaurants, 942,SV Tower, 16th Main, BTM 2nd Stage ,560076",
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
    address: "KFC restaurants, 942,SV Tower, 16th Main, BTM 2nd Stage ,560076",
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
    avgRating: 4.4,
    minDeliveryTime: 36,
    maxDeliveryTime: 36,
    deliveryTime: "36 MINS",
    lastMileTravel: 3.5,
    address: "KFC restaurants, 942,SV Tower, 16th Main, BTM 2nd Stage ,560076",
    locality: "2nd Stage",
    parentId: 547,
    unserviceable: false,
    veg: false,
  },
  {
    id: 4,
    name: "City Ghar :(",
    cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
    costForTwo: 40000,
    costForTwoString: "₹400 FOR TWO",
    cloudinaryImageId: "rmnzl74nmlldrsv9bnvk",
    deliveryTime: 36,
    avgRating: 4.4,
    minDeliveryTime: 36,
    maxDeliveryTime: 36,
    deliveryTime: "36 MINS",
    lastMileTravel: 3.5,
    address: "KFC restaurants, 942,SV Tower, 16th Main, BTM 2nd Stage ,560076",
    locality: "2nd Stage",
    parentId: 547,
    unserviceable: false,
    veg: false,
  },
];
const RestaurantCard = (props) => {
  const { resData } = props;
  const {
    name,
    cuisines,
    avgRating,
    costForTwo,
    deliveryTime,
    cloudinaryImageId,
  } = resData;

  return (
    <div className="res-cards" style={styleCard}>
      <img
        className="res-logo"
        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating}</h4>
      <h4>{costForTwo / 100}</h4>
      <h4>{deliveryTime}</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">search</div>
      <div className="res-container">
        {resList.map((list) => (
          <RestaurantCard key={list.id} resData={list} />
        ))}
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
