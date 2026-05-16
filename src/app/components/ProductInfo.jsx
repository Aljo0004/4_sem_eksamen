"use client";

import { useEffect, useState } from "react";

const url = "https://nrmpgakohbffwagdkvpz.supabase.co/rest/v1/";
const key = "sb_publishable_5CdrCx6J36n2qJrs6sBwiA_bvTRTQ4a";

const ProductInfo = ({ id }) => {
  const [product, setProduct] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`${url}artworks?select=id,artist_id,name,description,price,dimensions,thumbnail_url,picture_2,picture_3,picture_4,category&id=eq.${id}&limit=1`, {
          headers: {
            apikey: key,
            Authorization: `Bearer ${key}`,
          },
        });

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data?.message || "Kunne ikke hente produktet");
        }

        setProduct(data[0] || null);
      } catch (err) {
        setProduct(null);
        setError(err.message || "Ukendt fejl ved hentning af produkt");
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchProduct();
    } else {
      setLoading(false);
      setError("Mangler produkt-id");
    }
  }, [id]);

  if (loading) return <p>Henter produkt...</p>;
  if (error) return <p>Fejl: {error}</p>;
  if (!product) return <p>Intet produkt fundet.</p>;

  return (
    <section className="mb-12 mt-12">
      <h2 className="mb-6">{product.name}</h2>

      <div className="grid gap-8 md:grid-cols-2">
        <div>
          <img src={product.thumbnail_url} alt={product.name} className="w-full object-cover" />
        </div>

        <div>
          <p className="mb-2 font-semibold">Pris: {product.price} kr.</p>
          <p className="mb-2">Kategori: {product.category}</p>
          <p className="mb-2">Artist ID: {product.artist_id}</p>
          <p className="mb-4">Mål: {product.dimensions}</p>
          <p className="mb-4">{product.description}</p>
        </div>
      </div>
    </section>
  );
};

export default ProductInfo;
