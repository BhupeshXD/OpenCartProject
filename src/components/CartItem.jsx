import { FcDeleteDatabase } from "react-icons/fc";
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";
import { toast } from "react-hot-toast";

const CartItem = ({ item, itemIndex }) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.success("Item Removed");
  };

  return (
    <div className="flex items-center mb-4 text-white ">
      <div className="w-1/4">
        <img src={item.image} alt={item.title} />
      </div>
      <div className="w-3/4 ml-4">
        <h1 className="text-xl  font-semibold">{item.title}</h1>
        <p className=" mb-2">{item.description}</p>
        <div className="flex items-center justify-between text-white">
          <p className="text-lg">${item.price}</p>
          <div onClick={removeFromCart} className="cursor-pointer">
            <FcDeleteDatabase />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
