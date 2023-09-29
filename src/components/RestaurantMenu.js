import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategories from "./RestaurantCategories";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  console.log(resInfo);

  const [showIndex, setShowIndex] = useState(0);

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

  const categories =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  console.log(categories);

  return resInfo === null ? (
    <Shimmer />
  ) : (
    <div className="text-center ">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <p className="font-bold text-lg">
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      {/* categories accordian*/}
      {categories.map((c, i) => {
        return (
          <RestaurantCategories
            key={c?.card?.card?.title}
            data={c?.card?.card}
            showItem={i === showIndex && true}
            setShowItem={(value) => {
              // setShowIndex(i);
              setShowIndex(value ? i : null);
            }}
          />
        );
      })}
    </div>
  );
};

export default RestaurantMenu;
