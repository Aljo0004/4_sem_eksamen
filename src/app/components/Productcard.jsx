"use client";

import Link from "next/link";
import AddToCart from "./AddToCart";

const Productcard = ({ artwork, pinDetailsToBottom = false }) => {
  const artistName = artwork?.artists?.name || "";

  return (
    <div className="group relative w-full max-w-xs overflow-hidden mb-12 bg-white">
      <article className={`w-full max-w-xs overflow-hidden bg-white ${pinDetailsToBottom ? "flex h-full min-h-140 flex-col" : ""}`}>
        <div className="relative w-full">
          <div className="absolute z-10 right-5 bottom-5 opacity-0 transition-opacity duration-200 ease-out group-hover:opacity-100 group-focus-within:opacity-100">
            <AddToCart id={artwork?.id} title={artwork?.name} price={artwork?.price} thumbnail={artwork?.thumbnail_url} />
          </div>
          <Link href={{ pathname: `/productlist/${artwork.id}`, query: artistName ? { artistName } : undefined }} className="block w-full max-w-xs">
            <div className="relative w-full"></div>
            <img src={artwork?.thumbnail_url} alt={artwork?.name || "Artwork"} className="h-full w-full aspect-squared object-cover transition-transform duration-300 ease-out group-hover:scale-95" />
          </Link>
        </div>

        <div className={pinDetailsToBottom ? "mt-auto" : ""}>
          <div className="bg-(--primary-blue) h-2 w-28 mt-4 mb-4 group-hover:w-full duration-300 ease-in-out"></div>
          <div className="flex justify-between">
            <p className="t-card capitalize">{artwork?.name}</p>
            <p className="t-card font-semibold">{artwork?.price} kr.</p>
          </div>
          <p className="mt-2 t-p">{artwork?.description?.substring(0, 60)}...</p>
        </div>
      </article>
    </div>
  );
};

export default Productcard;
