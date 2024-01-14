import { FaCartShopping } from "react-icons/fa6";
import { useCart } from "../contexts/CartContext";

const Header = () => {
  const { handleClick, newCart } = useCart();
  return (
    <div
      className={
        "w-[95%] md:w-[85%] lg:w-[70%] mx-auto flex justify-between items-center py-4 px-2 transition ease-in-out duration-500"
      }
    >
      <h1 className="text-xl font-semibold">Shopping Cart</h1>
      <div
        onClick={handleClick}
        className="flex relative p-2 rounded-lg hover:bg-gray-300 cursor-pointer transition ease duration-300"
      >
        {/* Added to cart */}
        <FaCartShopping className="w-6 h-6" />
        {newCart?.length > 0 && (
          <div className="absolute top-0 right-0 h-4 w-4 flex items-center justify-center  text-xs text-white rounded-full bg-red-600">
            {newCart?.length}
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
