import { useFetchAllProductsQuery } from "../features/prodectapi";

const Product  = () => {
    const { data } = useFetchAllProductsQuery();

    return (  <>
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
    
    </>);
}
 
export default Product ;