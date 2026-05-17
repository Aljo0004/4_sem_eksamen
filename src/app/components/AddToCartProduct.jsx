"use client";
import useStore from "./favorit";

const AddToCartProduct = ({ id, title, price, thumbnail }) => {
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
      className="--border-width-sm mt-8 t-p cursor-pointer mb-8 inline-block  bg-[var(--secondary-blue)] px-6 py-3 text-sm uppercase text-[var(--primary-color)] transition-colors duration-300 ease-out hover:scale-105 transition-transform"
    >
      {isInCart ? "Fjern fra kurv" : "Tilføj til kurv"}
    </button>
  );
};

export default AddToCartProduct;
