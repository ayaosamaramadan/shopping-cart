// import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { Link } from "react-router";
import { RootState } from "../main";

const Nav = () => {
// const [cartItemCount, setCartItemCount] = useState(0);

  // useEffect(() => {
  //   const data = localStorage.getItem("cart");
  //   if (data) {
  //     const cartItems = JSON.parse(data);
  //     setCartItemCount(cartItems.length);
  //   }
  // }, []);

// const [cartItemCount, setCartItemCount] = useState(0);

  // useEffect(() => {
  //   const data = localStorage.getItem("cart");
  //   if (data) {
  //     const cartItems = JSON.parse(data);
  //     setCartItemCount(cartItems.length);
  //   }
  // }, []);

  const items = useSelector((state: RootState) => state.cart.items);
 const cartItemCount = items.reduce((total, item) => total + item.quantity, 0);

  return (
    <>
      <nav className="flex bg-gray-200 p-4 justify-between items-center shadow-md">
        <Link to="/" className="text-xl font-bold text-gray-800 hover:text-red-900">
          <h1>SHOPPING</h1>
        </Link>
        <Link to="/cart" className="text-gray-800 hover:text-red-900 pr-4">
          <div className="flex items-center relative">
            <i className="fa-solid fa-bag-shopping text-2xl"></i>
            <p className="bg-red-500 text-white p-1 rounded-full w-5 h-5 flex items-center justify-center absolute top-4 right-[-0.8rem] text-[0.8rem] pb-[0.4rem]">{cartItemCount}</p>
          </div>
        </Link>
      </nav>
    </>
  );
};

export default Nav;
