"use client";
import { useEffect, useState } from "react";
import ArtistInfo from "./ArtistInfo";
import ProductSection from "./ProductSection";

const url = "https://nrmpgakohbffwagdkvpz.supabase.co/rest/v1/";
const key = "sb_publishable_5CdrCx6J36n2qJrs6sBwiA_bvTRTQ4a";

const ArtistSection = ({ name = "glas", limit = 20 }) => {
  const [artworks, setArtworks] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArtworks = async () => {
      try {
        const response = await fetch(`${url}artists?select=id,name,description,image_url&order=id.desc&limit=${limit}`, {
          headers: {
            apikey: key,
            Authorization: `Bearer ${key}`,
          },
        });

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data?.message || "Kunne ikke hente artists");
        }

        if (Array.isArray(data)) {
          setArtworks(data);
        } else {
          setArtworks([]);
          setError("API returnerede ikke en liste");
        }
      } catch (err) {
        setArtworks([]);
        setError(err.message || "Ukendt fejl ved hentning af artists");
      } finally {
        setLoading(false);
      }
    };

    fetchArtworks();
  }, [name, limit]);

  if (loading) return <p>Henter artists...</p>;
  if (error) return <p>Fejl: {error}</p>;

  return (
    <div className="">
      <h2 className="mb-6 t-h2 pt-6">{name}</h2>
      <div className="flex flex-col gap-4">
        {artworks.map((artists) => (
          <section key={artists.id} className="mb-12 flex gap-8 max-sm:gap-0 max-sm:flex-col items-start  max-sm:border-t-2 pt-6 border-black">
            <ArtistInfo artists={artists} />
            <h3 className="t-h3 min-md:hidden border-b-2 inline-block pb-1">Kunstnerens værker</h3>
            <ProductSection artistId={artists.id} limit={4} title="" horizontal />
          </section>
        ))}
      </div>
    </div>
  );
};

export default ArtistSection;
