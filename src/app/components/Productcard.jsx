"use client";

import Link from "next/link";

const Productcard = ({ artwork }) => {
  return (
    <Link href={`/productlist/${artwork.id}`} className="w-full max-w-xs overflow-hidden mb-12 bg-white">
      <article className="w-full max-w-xs overflow-hidden mb-12 bg-white">
        <div className="aspect-squared w-full">
          <img src={artwork?.thumbnail_url} alt={artwork?.name || "Artwork"} className="h-full mb-4 w-full object-cover" />
        </div>
        <div className="">
          <div className="bg-(--primary-blue) h-2 w-28 mt-4 mb-4"></div>
          <div className="flex justify-between">
            <p className="text-xl capitalize font-bold leading-tight">{artwork?.name}</p>
            <p className="font-semibold">{artwork?.price} kr.</p>
          </div>
          <p className="mt-2 line-clamp-3 text-sm">{artwork?.description?.substring(0, 75)}...</p>
        </div>
      </article>
    </Link>
  );
};

export default Productcard;
