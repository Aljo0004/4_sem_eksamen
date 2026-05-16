"use client";
import Link from "next/link";

const ArtistInfo = ({ artists }) => {
  return (
    <div className="group relative w-full overflow-hidden mb-12 bg-white">
      <Link href={`/artists/${artists.id}`} className="block w-full ">
        <article className="w-full bg-white ml-16">
          <div className="aspect-3/2 w-full max-w-sm">
            <img src={artists?.image_url} alt={artists?.name || "Artwork"} className="h-full mb-4 w-full object-cover transition-transform duration-300 ease-out group-hover:scale-95" />
          </div>
          <div className="">
            <div className="bg-(--primary-blue) max-w-sm h-2 w-28 mt-4 mb-4"></div>
            <div className="flex flex-col justify-between">
              <p className="text-xl capitalize font-bold leading-tight">{artists?.name}</p>
              <p className="font-semibold">{artists?.description?.substring(0, 100)}...</p>
            </div>
          </div>
        </article>
      </Link>
    </div>
  );
};

export default ArtistInfo;
