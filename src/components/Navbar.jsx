import React from 'react';
import carticon from '../components/cart-24.png';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const { cart } = useSelector((state) => state);
  

  return (
    <div className='bg-richblack-900'>
      <nav className="flex flex-wrap md:flex-nowrap bg-richblack-900 justify-between items-center w-11/12 max-w-[1160px] py-4 mx-auto">
        <NavLink to="/" className="flex-shrink-0">
          <img src="../shoplogog.png" className="h-14" alt="Shop Logo" />
        </NavLink>

        <div className="flex items-center font-medium text-slate-100 space-x-6 ml-auto mt-4 md:mt-0">
          <NavLink to="/" className="nav-link">
            Home
          </NavLink>
          <NavLink to="/login" className="nav-link">
            Login
          </NavLink>
          <NavLink to="/signup" className="nav-link">
            Sign up
          </NavLink>
          <NavLink to="/cart" className="relative nav-link">
            <div className="relative">
              <img src={carticon} className='h-7 w-7' alt="Cart" />
              {cart.length > 0 && (
                <span
                  className="absolute -top-1 -right-2 bg-green-600 text-xs w-5 h-5 flex justify-center items-center animate-bounce rounded-full text-white"
                >
                  {cart.length}
                </span>
              )}
            </div>
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
