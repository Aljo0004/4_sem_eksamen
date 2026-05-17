"use client";

import { useEffect, useState } from "react";
import AddToCartProduct from "./AddToCartProduct";

const url = "https://nrmpgakohbffwagdkvpz.supabase.co/rest/v1/";
const key = "sb_publishable_5CdrCx6J36n2qJrs6sBwiA_bvTRTQ4a";

const ProductInfo = ({ id, artistName = "" }) => {
  const [product, setProduct] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`${url}artworks?select=id,artist_id,name,description,price,dimensions,thumbnail_url,picture_2,picture_3,picture_4,category,artists(name)&id=eq.${id}&limit=1`, {
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

  const displayArtistName = artistName || product?.artists?.name || `ID: ${product.artist_id}`;
  const galleryImages = [product?.picture_2, product?.picture_3, product?.picture_4].filter(Boolean);

  return (
    <section className="mb-12 mt-12">
      <div className="flex gap-8">
        <div>
          <img src={product.thumbnail_url} alt={product.name} className="w-full object-cover" />
          {galleryImages.length > 0 && (
            <div className="mt-4 flex justify-between">
              {galleryImages.map((imageUrl, index) => (
                <img key={imageUrl} src={imageUrl} alt={`${product.name} billede ${index + 2}`} className="h-42 w-42 object-cover" />
              ))}
            </div>
          )}
        </div>

        <div>
          <div className="bg-(--primary-blue) h-3 w-36 mb-6 mt-6"></div>
          <p className="t-p"> {displayArtistName}</p>
          <h2 className="mb-6 mt-10 uppercase t-h2">{product.name}</h2>
          <p className="mb-2 mt-12 t-h3">Pris: {product.price} kr.</p>
          <p className="mb-4 mt-12 t-h4">Mål: {product.dimensions}</p>
          <AddToCartProduct id={product?.id} title={product?.name} price={product?.price} thumbnail={product?.thumbnail_url} />
          <p className="mb-4 leading-8">{product.description}</p>
        </div>
      </div>
    </section>
  );
};

export default ProductInfo;
