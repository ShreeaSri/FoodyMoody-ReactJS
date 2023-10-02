import { CDN_URL } from "../utils/constants";
const RestaurantCard = (props) => {
  // console.log(props);
  const { resData } = props;
  console.log(resData);
  const { name, cuisines, avgRating, costForTwo, locality, cloudinaryImageId } =
    resData;

  return (
    <div
      data-testid="resCard"
      className="m-4 p-4 w-[290px] rounded-2xl h-[450] shadow-md hover:shadow-2xl"
    >
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

export const withDiscountLabel = (RestaurantCard) => {
  return (props) => {
    const { header, subHeader } = props.resData.aggregatedDiscountInfoV3;

    return (
      <div>
        <label className="absolute bg-yellow-500 text-white m-1 p-1 rounded-lg ">{`${header} ${subHeader}`}</label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};
export default RestaurantCard;
