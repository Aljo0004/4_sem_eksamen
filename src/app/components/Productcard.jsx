"use client";

import Link from "next/link";
import AddToCart from "./AddToCart";

const Productcard = ({ artwork }) => {
  return (
    <div className="group relative w-full max-w-xs overflow-hidden mb-12 bg-white">
      <Link href={`/productlist/${artwork.id}`} className="block w-full max-w-xs">
        <article className="w-full max-w-xs overflow-hidden bg-white ">
          <div className="relative aspect-squared w-full">
            <div className="absolute z-10 right-5 bottom-5 opacity-0 transition-opacity duration-200 ease-out group-hover:opacity-100 group-focus-within:opacity-100">
              <AddToCart id={artwork?.id} title={artwork?.name} price={artwork?.price} thumbnail={artwork?.thumbnail_url} />
            </div>
            <img src={artwork?.thumbnail_url} alt={artwork?.name || "Artwork"} className="h-full mb-4 w-full object-cover transition-transform duration-300 ease-out group-hover:scale-95" />
          </div>
          <div className="">
            <div className="bg-(--primary-blue) h-2 w-28 mt-4 mb-4 group-hover:w-full duration-300 ease-inOut"></div>
            <div className="flex justify-between">
              <p className="text-xl capitalize font-bold leading-tight">{artwork?.name}</p>
              <p className="font-semibold">{artwork?.price} kr.</p>
            </div>
            <p className="mt-2 line-clamp-3 text-sm">{artwork?.description?.substring(0, 75)}...</p>
          </div>
        </article>
      </Link>
    </div>
  );
};

export default Productcard;
