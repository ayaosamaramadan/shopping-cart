import { Link } from "react-router";

const Nav = () => {
  return (
    <>
      <nav className="flex bg-gray-200 p-4 justify-between items-center shadow-md">
        <Link to="/" className="text-xl font-bold text-gray-800 hover:text-red-900">
          <h1>SHOPPING</h1>
        </Link>
        <Link to="/cart" className="text-gray-800 hover:text-red-900 pr-4">
          <div className="flex items-center relative">
            <i className="fa-solid fa-bag-shopping text-2xl"></i>
            <p className="bg-red-500 text-white p-1 rounded-full w-5 h-5 flex items-center justify-center absolute top-4 right-[-0.8rem] text-[0.8rem] pb-[0.4rem]">8</p>
          </div>
        </Link>
      </nav>
    </>
  );
};

export default Nav;
