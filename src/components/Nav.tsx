// import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { Link } from "react-router";
import { RootState } from "../main";

const Nav = () => {
  const items = useSelector((state: RootState) => state.cart.items);
  const cartItemCount = items.reduce((total, item) => total + item.quantity, 0);

  const auth = useSelector((state: RootState) => state.auth);
  return (
    <>
      <nav className="flex bg-gray-300 p-4 justify-between items-center shadow-md">
        <Link
          to="/"
          className="text-2xl font-bold text-white hover:text-red-500"
        >
          <h1>SHOPPING</h1>
        </Link>

        <div className="flex items-center space-x-8 mr-5">
          {auth._id ? (
            <Link to="/logout" className="text-white hover:text-red-500">
              Log out
            </Link>
          ) : (
            <>
              <Link to="/login" className="text-white hover:text-red-500">
                Log in
              </Link>
              <Link to="/register" className="text-white hover:text-red-500">
                Sign up
              </Link>
            </>
          )}

          <Link to="/cart" className="text-white hover:text-red-500 relative">
            <i className="fa-solid fa-bag-shopping text-2xl"></i>
            <span className="bg-red-500 text-white p-1 rounded-full w-5 h-5 flex items-center justify-center absolute top-0 right-[-0.8rem] text-[0.8rem] pb-[0.4rem]">
              {cartItemCount}
            </span>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Nav;
