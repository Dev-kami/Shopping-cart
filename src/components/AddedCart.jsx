import { useCart } from "../contexts/CartContext";
import CartItem from "./CartItem";

const AddedCart = () => {
  const { newCart } = useCart();
  return (
    <div className="text-white h-full py-3 px-5">
      {newCart.map((cart) => (
        <CartItem key={cart.id} cart={cart} />
      ))}
    </div>
  );
};

export default AddedCart;
