"use client";

import { useEffect, useState } from "react";
import { FaTiktok } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const url = "https://nrmpgakohbffwagdkvpz.supabase.co/rest/v1/";
const key = "sb_publishable_5CdrCx6J36n2qJrs6sBwiA_bvTRTQ4a";

const ArtistPage = ({ id }) => {
  const [artists, setArtists] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArtist = async () => {
      try {
        const response = await fetch(`${url}artists?select=id,name,description,image_url,igsome_url,tiktoksome_url&id=eq.${id}&limit=1`, {
          headers: {
            apikey: key,
            Authorization: `Bearer ${key}`,
          },
        });

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data?.message || "Kunne ikke hente produktet");
        }

        setArtists(data[0] || null);
      } catch (err) {
        setArtists(null);
        setError(err.message || "Ukendt fejl ved hentning af kunstner");
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchArtist();
    } else {
      setLoading(false);
      setError("Mangler kunstner-id");
    }
  }, [id]);

  if (loading) return <p>Henter kunstner...</p>;
  if (error) return <p>Fejl: {error}</p>;
  if (!artists) return <p>Intet kunstner fundet.</p>;

  const hasTikTok = Boolean(artists.tiktoksome_url);
  const hasInstagram = Boolean(artists.igsome_url);

  return (
    <section className="mb-12 gap-4 mt-12 flex max-sm:flex-col">
      <div className="w-full pb-4 pr-4">
        <img src={artists.image_url} alt={artists.name} className="w-full object-cover" />
      </div>

      <div className="w-full max-sm:flex max-sm:flex-col">
        <div className="bg-(--primary-blue) h-2 w-28 max-sm:mt-4 mb-4"></div>
        <p className="pb-4 t-p">Kunstner</p>
        <h1 className="mb-6 t-h2">{artists.name}</h1>
        <div className={`flex gap-12 pb-6 max-sm:pt-4 max-sm:order-last ${hasTikTok || hasInstagram ? "" : "hidden"}`}>
          <a href={hasTikTok ? artists.tiktoksome_url : "#"} target="_blank" className={hasTikTok ? "" : "hidden"}>
            <FaTiktok size={40} className="cursor-pointer hover:scale-110 transition-transform" />
          </a>
          <a href={hasInstagram ? artists.igsome_url : "#"} target="_blank" className={hasInstagram ? "" : "hidden"}>
            <FaInstagram size={40} className="cursor-pointer hover:scale-110 transition-transform" />
          </a>
        </div>
        <div>
          <p className="mb-4">{artists.description}</p>
        </div>
      </div>
    </section>
  );
};

export default ArtistPage;
