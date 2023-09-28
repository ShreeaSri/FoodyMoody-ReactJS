import ItemList from "./ItemList";

const RestaurantCategories = ({ data }) => {
  console.log(data);
  return (
    <div>
      {/**header */}
      <div className="w-6/12 mx-auto my-4 bg-gray shadow p-4 ">
        <div className="flex justify-between">
          <span className="text-lg">
            {`${data.title} (${data.itemCards.length})`}
          </span>
          <span>⌄</span>
        </div>
        {/**accordian body */}
        <ItemList items={data.itemCards} />
      </div>
    </div>
  );
};

export default RestaurantCategories;
