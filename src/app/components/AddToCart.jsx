"use client";
import useStore from "./favorit";
import { FiMinus } from "react-icons/fi";
import { FiPlus } from "react-icons/fi";

const AddToCart = ({ id, title, price, thumbnail }) => {
  const { favorite, toggleFavorite, openCart } = useStore();

  const isInCart = favorite.find((fav) => fav.id === id);

  const product = {
    id,
    title,
    price,
    thumbnail,
  };
  return (
    <button
      type="button"
      onClick={(event) => {
        event.preventDefault();
        event.stopPropagation();
        if (!isInCart) {
          openCart();
        }
        toggleFavorite(product);
      }}
      className="text-(--primary-blue) cursor-pointer bg-white hover:scale-110 hover:duration-300 hover:bg-(--primary-blue) hover:text-white ease-in-out transition-transform"
    >
      {isInCart ? <FiMinus size={60} /> : <FiPlus size={60} />}
    </button>
  );
};

export default AddToCart;
