import { addtocart } from "../features/cartSlice";
import { useFetchAllProductsQuery } from "../features/prodectapi";
import { useDispatch } from "react-redux";
import { Product as ProductType } from "../types/product";


const Product = () => {
  const { data } = useFetchAllProductsQuery();
  const dispatch = useDispatch();

  const handleAddToCart = (product: ProductType) => {
   dispatch(addtocart(product));
  };

  return (
    <>
      {data?.map((product: ProductType) => (
        <div className="col-md-4" key={product.id}>
          <div className="bg-slate-200 shadow-md rounded-lg overflow-hidden flex flex-col justify-between h-full">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4 flex flex-col justify-between flex-grow">
              <div>
                <h5 className="text-lg font-bold mb-2">{product.name}</h5>
                <p className="text-yellow-700 font-bold">${product.price}</p>
              </div>
              <button
                onClick={() => handleAddToCart(product)}
                className="bg-red-700 w-32 text-white px-4 py-2 rounded hover:bg-red-500 transition duration-300 mt-4 ml-32"
              >
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Product;
