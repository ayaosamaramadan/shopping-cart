import { Link } from "react-router";
import sad from '../assets/tenor.gif'
const Nopage = () => {
  return (
    <>
    <div className="flex flex-col items-center justify-center mt-20">
      <img src={sad} alt="emoj" className="w-[200px]" />
      <p className="text-2xl text-gray-800 mt-5 mb-1">Page not found</p>
      <Link to="/" className="text-lg text-blue-500 no-underline hover:text-blue-700 hover:text-[1.2rem]">
        Go back to Home
      </Link>
    </div>
    </>
    
  );
};

export default Nopage;
