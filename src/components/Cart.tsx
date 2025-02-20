import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../main";
import { useEffect } from "react";
import {
  addtocart,
  removefromcart,
  decrem,
  removeallincart,
} from "../features/cartSlice";
import Total from "./Total";

type itemprop = {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
};

const Cart = () => {
  const items = useSelector((state: RootState) => state.cart.items);

  const dispatch = useDispatch();
  useEffect(() => {
    document.body.classList.add(`xl:overflow-y-hidden`);
  }, []);

  function handleremove(cartitem: itemprop) {
    dispatch(removefromcart(cartitem.id));
  }

  function inc(cartitem: itemprop) {
    dispatch(addtocart(cartitem));
  }

  function dec(cartitem: itemprop) {
    dispatch(decrem(cartitem.id));
  }

  function handleclearall() {
    dispatch(removeallincart());
  }

  return (
    <div className="container mx-auto p-4">
      {items.length === 0 ? (
        <h1 className="text-2xl font-bold text-center mt-20">Cart is empty</h1>
      ) : (
        <>
          <button
            onClick={() => handleclearall()}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700 mt-4"
          >
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
                        <button
                          onClick={() => dec(item)}
                          className="px-2 py-1 bg-gray-200 rounded"
                        >
                          -
                        </button>
                        <span className="text-lg">{item.quantity}</span>
                        <button
                          onClick={() => inc(item)}
                          className="px-2 py-1 bg-gray-200 rounded"
                        >
                          +
                        </button>
                      </div>
                    </td>
                    <td className="px-4 py-2 border-b text-center">
                      <p className="text-yellow-700 font-bold">
                        ${item.price * item.quantity}
                      </p>
                    </td>
                    <td className="px-4 py-2 border-b text-center">
                      <i
                        onClick={() => handleremove(item)}
                        className="fa-solid fa-circle-xmark text-red-600"
                      ></i>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <Total items={items} />
        </>
      )}
    </div>
  );
};

export default Cart;
