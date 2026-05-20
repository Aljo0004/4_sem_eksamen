"use client";

import useStore from "./favorit";
import { PiMinusThin } from "react-icons/pi";
import { PiXThin } from "react-icons/pi";
import Link from "next/link";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";


const Kurv = ({ isPage = false }) => {
  const { favorite, toggleFavorite } = useStore();

  const totalPrice = favorite.reduce((sum, item) => sum + item.price, 0);
  const sectionClassName = isPage ? "mt-8 mb-8 rounded-none bg-(--primary-color)" : "h-screen mt-8 rounded-none mb-8 bg-(--primary-color) p-6";

  return (
    <section className={sectionClassName}>
      {isPage && <h2 className="mb-16 t-h2">Din kurv</h2>}
      {favorite.length === 0 ? (
        <p>Din kurv er tom.</p>
      ) : (
        <div className={`flex flex-col ${isPage ? "flex-row max-sm:flex-col " : ""} justify-between`}>
          <div className={`flex flex-col ${isPage ? "w-2/3 max-sm:w-full" : ""}`}>
            {favorite.map((item) => (
              <div key={item.id} className={`flex items-center justify-between border-b border-black/10 pb-2 ${isPage ? "w-" : ""}`}>
                <div className="flex items-center gap-3">
                  <img src={item.thumbnail} alt={item.title} className="h-14 w-14 object-cover" />
                  <div className="flex flex-col">
                    <p className="t-p capitalize">{item.title}</p>
                    <p className="text-sm">{item.price} kr.</p>
                  </div>
                </div>
                <button type="button" onClick={() => toggleFavorite(item)} className="text-black group hover:scale-120 ease-in-out transition-transform cursor-pointer">
                  <PiMinusThin size={50} className="group-hover:hidden" />
                  <PiXThin size={50} className="hidden group-hover:block" />
                </button>
              </div>
            ))}
            <p className={`${isPage ? "hidden" : "place-self-end mt-4 border-b-2"}`}>{totalPrice} kr.</p>
          </div>
          <div className={`flex flex-col ${isPage ? "w-1/3 pl-16 max-sm:w-full max-sm:pl-0 max-sm:pt-8" : ""}`}>
            <div className={`flex items-center ${isPage ? " mb-2 border-t-1 t-p justify-between pt-2" : "hidden"}`}>
              <p>Tilføj rabatkode</p>
              <MdOutlineKeyboardArrowDown color="grey" />
            </div>
            <div className={`flex items-center ${isPage ? " mb-2 border-t-1 t-p justify-between pt-2" : "hidden"}`}>
              <p>Fragt</p>
              <MdOutlineKeyboardArrowDown color="grey" />
            </div>
            <div className={`flex items-center ${isPage ? "border-b-1 pb-2 border-t-1" : "hidden"} justify-between pt-2 t-p`}>
              <p>Total</p>
              <p>{totalPrice} kr.</p>
            </div>

            <Link href="/" className={`${isPage ? "--border-width-sm flex place-self-end max-sm:place-self-start text-center w-42 mt-8 inline-block  bg-[var(--secondary-blue)] px-6 py-3 t-s uppercase text-[var(--primary-color)] transition-colors duration-300 ease-out hover:scale-105 transition-transform" : "hidden"}`}>
              Gå til kassen
            </Link>

            {!isPage && (
              <Link href="/checkout" className="mt-8 max-w-50 text-center inline-block bg-(--secondary-blue) px-6 py-3 text-sm uppercase text-(--primary-color) transition-all duration-300 ease-out hover:scale-105">
                Gå til kurv
              </Link>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default Kurv;
