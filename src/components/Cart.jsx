import AddedCart from "./AddedCart";
import { useCart } from "../contexts/CartContext";
import { formatCurrency } from "../utils/helpers";

const Cart = () => {
  const { showAddedCart, handleCloseCart, newCart, totalPrice } = useCart();

  return (
    <div
      className={`bg-black w-full sm:w-[22rem] h-[100vh] fixed top-0 right-0 transition ease-in-out duration-500 ${
        !showAddedCart && "translate-x-[100%]"
      }`}
    >
      <h2 className="text-white font-bold m-2 text-xl">Your Cart</h2>
      {newCart.length > 0 ? (
        <AddedCart />
      ) : (
        <>
          <p className="text-center text-xl  sm:text-2xl text-white flex items-center justify-center -translate-y-14 h-full">
            Add a product to your cart
          </p>
        </>
      )}
      <div className="flex w-full absolute bottom-0">
        <button className="bg-darkishYellow flex-1 py-2 text-primary">
          {newCart.length ? (
            <span>Total: {formatCurrency(newCart?.length && totalPrice)}</span>
          ) : (
            "--"
          )}
        </button>
        <button
          onClick={() => handleCloseCart()}
          className="bg-primary flex-1 py-2 text-white"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Cart;
