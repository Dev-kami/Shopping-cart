import Header from "./components/Header";
import Products from "./components/Products";
import Cart from "./components/Cart";
import Notification from "./components/Notification";

import { products } from "./data";
import { useCart } from "./contexts/CartContext";

function App() {
  const { notification, showAddedCart, handleCloseCart } = useCart();
  return (
    <div className="h-full w-full transition ease-in-out duration-500 relative">
      {notification && (
        <Notification>Product has been added to your cart</Notification>
      )}
      <div>
        <Header />
        <div className="grid place-content-center grid-cols-2 md:grid-cols-3 lg:grid-col-3 w-[95%] md:w-[85%] lg:w-[70%] h-[100%] mx-auto px-2 gap-3">
          {products.map((product) => {
            return <Products key={product.id} product={product} />;
          })}
        </div>

        {/* Skeleton Loading */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-5 w-[70%] mx-auto animate-pulse">
          {!products.length &&
            Array.from({ length: 20 }).map((_, i) => (
              <div key={i} className="w-64 h-64 bg-gray-200" />
            ))}
        </div>
      </div>

      {showAddedCart && (
        <div
          onClick={handleCloseCart}
          className="bg-black/50 h-screen w-full absolute top-0 left-0"
        />
      )}
      <Cart />
    </div>
  );
}

export default App;
