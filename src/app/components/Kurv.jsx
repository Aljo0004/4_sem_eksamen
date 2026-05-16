"use client";

import useStore from "./favorit";
import { PiMinusThin } from "react-icons/pi";
import { PiXThin } from "react-icons/pi";  
import Link from "next/link";

const Kurv = () => {
  const { favorite, toggleFavorite } = useStore();

  const totalPrice = favorite.reduce((sum, item) => sum + item.price, 0);

  return (
    <section className=" h-screen mt-8 rounded-none mb-8 bg-(--primary-color) p-6">
      {favorite.length === 0 ? (
        <p>Din kurv er tom.</p>
      ) : (
        <div className=" flex flex-col justify-between">
          {favorite.map((item) => (
            <div key={item.id} className="flex items-center justify-between border-b border-black/10 pb-2">
              <div className="flex items-center gap-3">
                <img src={item.thumbnail} alt={item.title} className="h-14 w-14 object-cover" />
                <div className="flex flex-col">
                  <p className="font-semibold capitalize">{item.title}</p>
                  <p className="text-sm">{item.price} kr.</p>
                </div>
              </div>
              <button type="button" onClick={() => toggleFavorite(item)} className="text-black group hover:scale-120 ease-in-out transition-transform cursor-pointer">
                <PiMinusThin size={50} className="group-hover:hidden" />
                <PiXThin size={50} className="hidden group-hover:block" />
              </button>
            </div>
          ))}
          <div className="bottom-0">
            <div className="flex items-center justify-between pt-2 font-bold">
              <p>Total</p>
              <p>{totalPrice} kr.</p>
            </div>
            <Link href="/productlist" className="mt-8 inline-block bg-(--secondary-blue) px-6 py-3 text-sm uppercase text-(--primary-color) transition-all duration-300 ease-out hover:scale-105">
              Gå til kurv
            </Link>
          </div>
        </div>
      )}
    </section>
  );
};

export default Kurv;
