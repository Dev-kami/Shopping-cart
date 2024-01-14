import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

function CartProvider({ children }) {
  const [notification, setNotification] = useState(false);
  const [showAddedCart, setShowAddedCart] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);
  // const [newCart, setNewCart] = useState([]);
  const [newCart, setNewCart] = useState(() => {
    const storedValue = localStorage.getItem("addedCart");

    return JSON.parse(storedValue);
  });

  const handleClick = () => {
    setShowAddedCart(true);
  };

  const handleCloseCart = () => {
    setShowAddedCart(false);
  };
  const handleAddCart = (cartDetails) => {
    const isAlreadyAdded = newCart
      .map((cart) => cart.id)
      .includes(cartDetails.id);

    if (!isAlreadyAdded) {
      setNewCart((prevCart) => [...prevCart, cartDetails]);
    } else if (isAlreadyAdded) {
      return;
      // return <Notification>Product already exists in your cart</Notification>;
    }

    setNotification((notification) => !notification);
    setTimeout(() => {
      setNotification((notification) => !notification);
    }, 2000);
  };
  const handleDeleteCart = (id) => {
    setNewCart((prevCart) =>
      prevCart.filter((cartDetails) => cartDetails.id !== id)
    );
  };
  const updateTotalPrice = (price) => {
    setTotalPrice(price);
  };

  useEffect(() => {
    const storedValue = localStorage.setItem(
      "addedCart",
      JSON.stringify(newCart)
    );

    return storedValue;
  }, [newCart]);

  return (
    <CartContext.Provider
      value={{
        handleAddCart,
        handleClick,
        handleCloseCart,
        handleDeleteCart,
        newCart,
        notification,
        setNotification,
        setNewCart,
        setShowAddedCart,
        showAddedCart,
        updateTotalPrice,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

function useCart() {
  const context = useContext(CartContext);
  if (context === "undefined")
    throw new Error("Context was used outside the context provider");

  return context;
}

export { CartProvider, useCart };
