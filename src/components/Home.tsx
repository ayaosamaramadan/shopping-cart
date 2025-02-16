import { useFetchAllProductsQuery } from "../features/prodectapi";

const Home = () => {
  const { data, error, isLoading } = useFetchAllProductsQuery();

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
            {data?.map((product) => (
              <div className="col-md-4" key={product.id}>
                <div className="bg-slate-200 shadow-md rounded-lg overflow-hidden flex flex-col justify-between h-full">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full object-cover"
                  />
                  <div className="p-4 flex flex-col justify-between flex-grow">
                    <div>
                      <h5 className="text-lg font-bold mb-2">{product.name}</h5>
                      <p className="text-yellow-700 font-bold">
                        ${product.price}
                      </p>
                    </div>
                    <button className="bg-red-700 w-32 text-white px-4 py-2 rounded hover:bg-red-500 transition duration-300 mt-4 ml-32">
                      Add To Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
