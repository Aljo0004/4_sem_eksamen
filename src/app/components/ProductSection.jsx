"use client";
import { useEffect, useState } from "react";
import Productcard from "./Productcard";

const url = "https://nrmpgakohbffwagdkvpz.supabase.co/rest/v1/";
const key = "sb_publishable_5CdrCx6J36n2qJrs6sBwiA_bvTRTQ4a";

const ProductSection = ({ category = "glas", title = "Glasvaerker", limit = 20, artistId = null, horizontal = false, hideTitle = false }) => {
  const [artworks, setArtworks] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArtworks = async () => {
      try {
        setLoading(true);
        setError("");

        const filter = artistId ? `artist_id=eq.${artistId}` : `category=eq.${category}`;
        const response = await fetch(`${url}artworks?select=id,thumbnail_url,name,price,description&${filter}&order=id.desc&limit=${limit}`, {
          headers: {
            apikey: key,
            Authorization: `Bearer ${key}`,
          },
        });

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data?.message || "Kunne ikke hente artworks");
        }

        if (Array.isArray(data)) {
          setArtworks(data);
        } else {
          setArtworks([]);
          setError("API returnerede ikke en liste");
        }
      } catch (err) {
        setArtworks([]);
        setError(err.message || "Ukendt fejl ved hentning af artworks");
      } finally {
        setLoading(false);
      }
    };

    fetchArtworks();
  }, [category, limit, artistId]);

  if (loading) return <p>Henter artworks...</p>;
  if (error) return <p>Fejl: {error}</p>;

  return (
    <div className="">
      {!hideTitle && <h4 className="">{title}</h4>}

      {horizontal ? (
        <div className="overflow-x-auto pb-2">
          <div className="flex gap-4">
            {artworks.map((artwork) => (
              <div key={artwork.id} className="min-w-[calc(50%-0.5rem)] shrink-0 basis-[calc(50%-0.5rem)]">
                <Productcard artwork={artwork} pinDetailsToBottom />
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="flex flex-wrap gap-4">
          {artworks.map((artwork) => (
            <Productcard key={artwork.id} artwork={artwork} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductSection;
