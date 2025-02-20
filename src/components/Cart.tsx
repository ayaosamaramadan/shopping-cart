import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../main";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import { removefromcart } from "../features/cartSlice";

type itemprop = {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
};

const Cart = () => {
  const items = useSelector((state: RootState) => state.cart.items);
  // const items = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")!) : [];
  // console.log(items);
 const navigate = useNavigate();
 const dispatch = useDispatch();
  useEffect(() => 
    {
    document.body.classList.add(`xl:overflow-y-hidden`);
    
  }, []);

function handleremove(cartitem:itemprop){
  dispatch(removefromcart(cartitem.id));
}



  return (
    <div className="container mx-auto p-4">
      {items.length === 0 ? (
        <h1 className="text-2xl font-bold text-center mt-20">Cart is empty</h1>
      ) : (
        <>
          <button className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700 mt-4">
            Clear All
          </button>
          <div className="overflow-x-auto mt-10 h-[50vh] border-gray-100 rounded-xl border-2">
            <table className="min-w-full bg-white border border-gray-200">
              <thead>
                <tr>
                  <th className="px-4 py-2 border-b text-center">PRODUCT</th>
                  <th className="px-4 py-2 border-b text-center">NAME</th>
                  <th className="px-4 py-2 border-b text-center">PRICE</th>
                  <th className="px-4 py-2 border-b text-center">QUANTITY</th>
                  <th className="px-4 py-2 border-b text-center">TOTAL</th>
                  <th className="px-4 py-2 border-b text-center"></th>
                </tr>
              </thead>
              <tbody>
                {items.map((item: itemprop) => (
                  <tr key={item.id} className="hover:bg-gray-100">
                    <td className="px-4 py-2 border-b text-center">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-20 h-20 object-cover rounded-lg mx-auto"
                      />
                    </td>
                    <td className="px-4 py-2 border-b text-center">
                      <h5 className="text-lg font-bold">{item.name}</h5>
                    </td>
                    <td className="px-4 py-2 border-b text-center">
                      <p className="text-yellow-700 font-bold">${item.price}</p>
                    </td>
                    <td className="px-4 py-2 border-b text-center">
                      <div className="flex justify-center items-center space-x-2">
                        <button className="px-2 py-1 bg-gray-200 rounded">
                          -
                        </button>
                        <span className="text-lg">{item.quantity}</span>
                        <button className="px-2 py-1 bg-gray-200 rounded">
                          +
                        </button>
                      </div>
                    </td>
                    <td className="px-4 py-2 border-b text-center">
                      <p className="text-yellow-700 font-bold">
                        ${item.price*item.quantity}
                      </p>
                    </td>
                    <td className="px-4 py-2 border-b text-center">
                    <i onClick={()=>handleremove(item)} className="fa-solid fa-circle-xmark text-red-600"></i>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="text-center mt-5">
            <h2 className="text-2xl font-bold">Total: ${items.reduce((total, item) => total + item.price * item.quantity, 0)}</h2>

            <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700 transition duration-300 mt-3">
              Checkout
            </button>
            <p onClick={() => navigate('/')}
             className="mt-3 text-blue-500 cursor-pointer hover:underline">
              Continue Shopping
            </p>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
