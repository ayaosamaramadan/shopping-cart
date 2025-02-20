import React from 'react';

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

interface TotalProps {
  items: CartItem[];
}

const Total: React.FC<TotalProps> = ({ items }) => {
  const totalAmount = items.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div>
      <h2>Total Amount: ${totalAmount}</h2>
    </div>
  );
};

export default Total;