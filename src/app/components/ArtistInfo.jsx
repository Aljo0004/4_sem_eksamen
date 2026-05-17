"use client";
import Link from "next/link";

const ArtistInfo = ({ artists }) => {
  return (
    <div className="relative w-full overflow-hidden mb-12 bg-white">
      <article className="">
        <Link href={`/artists/${artists.id}`} className="block ">
          <img src={artists?.image_url} alt={artists?.name || "Artwork"} className="w-full h-full aspect-3/2 object-cover transition-transform duration-300 ease-out hover:scale-95" />
          <div className="">
            <div className="bg-(--primary-blue) max-w-sm h-2 w-28 mt-4 mb-4"></div>
            <div className="flex flex-col justify-between">
              <p className="t-h2">{artists?.name}</p>
              {/* <p className="t-p max-w-md">{artists?.description?.substring(0, 100)}...</p> */}
            </div>
          </div>
        </Link>
      </article>
    </div>
  );
};

export default ArtistInfo;
