"use client";
import { useEffect, useState } from "react";
import Productcard from "./Productcard";

const url = "https://nrmpgakohbffwagdkvpz.supabase.co/rest/v1/";
const key = "sb_publishable_5CdrCx6J36n2qJrs6sBwiA_bvTRTQ4a";

const ProductSection = ({ category = "glas", title = "Glasværker", limit = 20 }) => {
  const [artworks, setArtworks] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArtworks = async () => {
      try {
        const response = await fetch(`${url}artworks?select=id,thumbnail_url,name,price,description&category=eq.${category}&order=id.desc&limit=${limit}`, {
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
  }, [category, limit]);

  if (loading) return <p>Henter artworks...</p>;
  if (error) return <p>Fejl: {error}</p>;

  return (
    <div className="">
      <h4 className="mb-6 mt-6">{title}</h4>
      <div className="flex flex-wrap gap-4">
        {artworks.map((artwork) => (
          <Productcard key={artwork.id} artwork={artwork} />
        ))}
      </div>
    </div>
  );
};

export default ProductSection;
