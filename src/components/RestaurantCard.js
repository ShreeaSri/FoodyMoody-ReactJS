import { CDN_URL } from "../utils/constants";
const RestaurantCard = (props) => {
  // console.log(props);
  const { resData } = props;
  const { name, cuisines, avgRating, costForTwo, locality, cloudinaryImageId } =
    resData;

  return (
    <div className="m-4 p-4 w-[290px] rounded-2xl h-[450] shadow-md hover:shadow-2xl">
      <img
        className="rounded-2xl h-[200] w-[500]"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="font-bold py-2 text-lg">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating}</h4>
      <h4>{costForTwo}</h4>
      <h4>{locality}</h4>
    </div>
  );
};
export default RestaurantCard;
