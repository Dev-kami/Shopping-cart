import { useCart } from "../contexts/CartContext";

const Notification = ({ children }) => {
  const { notification } = useCart();
  return (
    <div
      className={`fixed left-1/2 "-top-10 -translate-x-1/2 bg-primary text-white text-sm text-center py-2 px-4 rounded-lg transition ease-in-out duration-500 ${
        notification && "top-5"
      }`}
    >
      <span>{children}</span>
    </div>
  );
};

export default Notification;
