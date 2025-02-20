import { useFetchAllProductsQuery } from "../features/prodectapi";
import Product from "./Product";
// import { useNavigate } from "react-router-dom";

const Home = () => {
    const { error, isLoading } = useFetchAllProductsQuery();
 

  return (
    <>
      {isLoading ? (
        <h1 className="text-2xl font-bold text-center mt-20">Loading...</h1>
      ) : error ? (
        <h1 className="text-2xl font-bold text-center mt-20 text-red-500">
          Error: {JSON.stringify(error)}
        </h1>
      ) : (
        <div className="flex flex-col items-center justify-center mt-14 ml-10 mr-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7">
           <Product/>
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
