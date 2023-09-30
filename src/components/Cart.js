import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div className="text-center m-5 p-5">
      <h1 className="text-2xl font-bold">Cart</h1>
      <div className="w-6/12 m-auto">
        <button
          className="p-2 m-2 bg-orange-400 rounded text-white"
          onClick={handleClearCart}
        >
          Clear cart
        </button>
        <ItemList items={cartItems}></ItemList>
        {cartItems.length === 0 && (
          <h1>Your Cart is empty. Please Add items😇 </h1>
        )}
      </div>
    </div>
  );
};

export default Cart;
