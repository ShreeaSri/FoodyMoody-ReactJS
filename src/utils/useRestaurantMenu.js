import { useEffect, useState } from "react";
import { MENU_URL } from "./constants";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  //fetchdata
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const req = await fetch(MENU_URL + resId);
    const res = await req.json();
    console.log(res);
    setResInfo(res.data);
  };
  return resInfo;
};
export default useRestaurantMenu;
