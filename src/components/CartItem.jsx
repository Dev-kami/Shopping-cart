import { useEffect, useState } from "react";
import { useCart } from "../contexts/CartContext";
import { formatCurrency } from "../utils/helpers";

const CartItem = ({ cart }) => {
  const [value, setValue] = useState(1);
  const { newCart, handleDeleteCart, updateTotalPrice } = useCart();

  useEffect(() => {
    const cartsprice = newCart.map((cart) => Number(cart.price));
    const totalPriceForAllItems = cartsprice.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0
    );
    updateTotalPrice(totalPriceForAllItems);
  }, [value, newCart, updateTotalPrice]);

  return (
    <div
      key={cart.id}
      className="flex items-center justify-between mb-5 p-1 space-x-3 hover:bg-gray-900 rounded-full"
    >
      <div className="flex items-center flex-[1.6] p-1">
        <img
          src={cart.imgUrl}
          alt={cart.productName}
          className="h-10 w-10 rounded-full mr-2"
        />
        <p
          title={cart.productName}
          className="text-sm font-bold truncate cursor-default"
        >
          {cart.productName}
        </p>
      </div>
      <div className="flex-[1.2] text-center text-sm">
        <span>{formatCurrency(Number(cart.price) * value)}</span>
      </div>
      <div className="flex items-center justify-center flex-[1.2]">
        <button
          className="text-black font-bold h-5 w-5 flex items-center justify-center bg-slate-400"
          onClick={() => setValue((val) => (val > 1 ? val - 1 : val))}
        >
          -
        </button>
        <p className="text-sm px-2">{value}</p>
        <button
          className="text-black font-bold h-5 w-5 flex items-center justify-center bg-slate-400"
          onClick={() => setValue((val) => val + 1)}
        >
          +
        </button>
      </div>
      <button
        className="text-red-600 text-xl hover:text-2xl font-bold"
        onClick={() => handleDeleteCart(cart.id)}
      >
        &times;
      </button>
    </div>
  );
};

export default CartItem;
