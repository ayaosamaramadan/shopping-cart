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
    <>
      <div>
        <h2 className="text-2xl font-bold text-center mt-20">Your cart</h2>
        {items.length === 0 ? (
          <h1 className="text-2xl font-bold text-center mt-20">
            Cart is empty
          </h1>
        ) : (
          <div>
            {items.map((item: itemprop) => (
              <div
                className="flex items-center justify-between mt-4"
                key={item.id}
              >
                <div className="flex items-center">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-cover"
                  />
                  <h3 className="text-xl font-bold ml-4">{item.name}</h3>
                </div>
                <div>
                  <h3 className="text-xl font-bold">${item.price}</h3>
                  <h3 className="text-xl font-bold">
                    Quantity: {item.quantity}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;
