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
      className="text-(--primary-blue) cursor-pointer bg-white md:hover:scale-110 md:hover:duration-300 md:hover:bg-(--primary-blue) md:hover:text-white ease-in-out transition-transform"
    >
      <span className="hidden max-sm:inline-block mt-4 t-small text-sm uppercase text-(--secondary-blue) border-b-2 border-(--secondary-blue) ">{isInCart ? "Fjern fra kurv" : "Læg i kurv"}</span>
      <span className="hidden md:block">{isInCart ? <FiMinus size={60} /> : <FiPlus size={60} />}</span>
    </button>
  );
};

export default AddToCart;
