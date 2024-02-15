import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import CartItem from "../components/CartItem";


const Cart = () => {

  const navigate = useNavigate();
  const { cart } = useSelector((state) => state);
  const [totalAmount, setTotalAmount] = useState(0);

  const checkoutHandler =()=>{
    navigate("/checkout")
  }

  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

  return (
    <div className="flex justify-center mt-10 text-white">
      {cart.length > 0 ? (
        <div className="w-3/4 flex">
          <div className="w-3/4 pr-8">
            {cart.map((item, index) => {
              return <CartItem key={item.id} item={item} itemIndex={index} />;
            })}
          </div>

          <div className="w-1/4">
            <div className="border-b-2 border-gray-300 mb-4 pb-4">
              <h1 className="text-2xl font-semibold">Your Cart</h1>
              <h1 className="text-xl font-semibold mt-4">Summary</h1>
              <p>
                <span>Total Items: {cart.length}</span>
              </p>
            </div>

            <div className="flex justify-between items-center">
              <p className="text-xl font-semibold">Total Amount:</p>
              <p className="text-xl font-semibold">${totalAmount}</p>
            </div>
            <button onClick={checkoutHandler}
            className="w-full bg-blue-500 text-white px-4 py-2 rounded mt-4">
              CheckOut Now
            </button>
          </div>
        </div>
      ) : (
        <div>
          <h1 className="text-2xl font-semibold">Cart Empty</h1>
          <Link to={"/"}>
            <button className="w-full bg-blue-500 text-white px-4 py-2 rounded mt-4">
              Shop Now
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
