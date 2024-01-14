import { useCart } from "../contexts/CartContext";

const Products = ({ product }) => {
  const { id, imgUrl, productName, price } = product;

  const newCart = {
    id,
    imgUrl,
    productName,
    price,
  };

  const { handleAddCart } = useCart();

  return (
    <div key={id} className="flex w-full h-full text-center">
      <div className="flex flex-col items-center w-full h-full p-3 bg-white shadow-2xl rounded">
        <img
          src={imgUrl}
          className="sm:w-32 sm:h-32 w-20 h-20 rounded-full"
          alt=""
        />
        <h4 className="font-semibold tracking-wider mt-3 text-sm md:text-base">
          {productName}
        </h4>
        <p className="text-darkGray tracking-wide">₦{price}</p>
        <button
          onClick={() => handleAddCart(newCart)}
          className="bg-primary rounded w-full py-[5px] mb-3 mt-2 text-white text-sm sm:text-base hover:bg-darkishYellow hover:scale-105 transition ease duration-300"
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default Products;
