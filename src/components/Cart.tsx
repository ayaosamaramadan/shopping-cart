import { useSelector } from "react-redux";
import { RootState } from "../main";

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
  return (
    <div className="container mx-auto p-4">

      <h2 className="text-3xl font-bold text-center mt-10">Your Cart</h2>
      {items.length === 0 ? (

        <h1 className="text-2xl font-bold text-center mt-20">Cart is empty</h1>) : 
        (
        <div className="overflow-x-auto mt-10">
          <table className="min-w-full bg-white border border-gray-200">
            <thead>
              <tr><th className="px-4 py-2 border-b text-center">PRODUCT</th><th className="px-4 py-2 border-b text-center">NAME</th><th className="px-4 py-2 border-b text-center">PRICE</th>
                <th className="px-4 py-2 border-b text-center">QUANTATY</th>
                <th className="px-4 py-2 border-b text-center">TOTAL</th>
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
                      <button className="px-2 py-1 bg-gray-200 rounded" > - </button>
                      <span className="text-lg">{item.quantity}</span>
                      <button className="px-2 py-1 bg-gray-200 rounded">
                        +
                      </button>
                    </div>
                  </td>
                  <td className="px-4 py-2 border-b text-center">
                    <p className="text-yellow-700 font-bold">${item.price * item.quantity}</p>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Cart;
