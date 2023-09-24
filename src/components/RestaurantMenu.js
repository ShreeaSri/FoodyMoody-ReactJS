import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_URL } from "../utils/constants";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);
  const fetchMenu = async () => {
    const data = await fetch(MENU_URL + resId);

    const res = await data.json();
    console.log(res);
    setResInfo(res.data);
  };

  if (resInfo === null) {
    return <Shimmer />;
  }
  const { name, cuisines, costForTwoMessage, avgRating, cloudinaryImage } =
    resInfo?.cards[0]?.card?.card?.info;
  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
  const itemCardsMap = itemCards.map((ele) => ele.card.info);
  console.log(itemCards);
  console.log(itemCardsMap);
  return resInfo === null ? (
    <Shimmer />
  ) : (
    <div className="Menu">
      <h1>{name}</h1>
      <p>
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      <h2>{avgRating}</h2>
      <h2>Menu</h2>
      <ul>
        {itemCardsMap.map((ele) => (
          <li key={ele.id}>
            {ele.name} - {ele.price / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
