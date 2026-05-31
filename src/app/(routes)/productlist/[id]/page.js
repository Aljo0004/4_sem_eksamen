import Nav from "../../../components/Nav";
import ProductInfo from "../../../components/ProductInfo";
import ProductSection from "../../../components/ProductSection";
import InfoCard from "../../../components/InfoCard";
import Footer from "../../../components/Footer";

const url = "https://nrmpgakohbffwagdkvpz.supabase.co/rest/v1/";
const key = "sb_publishable_5CdrCx6J36n2qJrs6sBwiA_bvTRTQ4a";

export default async function Home({ params, searchParams }) {
  const { id } = await params;
  const { artistName } = await searchParams;

  let relatedCategory = "keramik";
  let artistId = null;
  let infoCardArtistName = artistName || "kunstneren";
  let infoCardArtistDescription = "Læs mere om kunstneren bag dette værk.";
  let infoCardArtistImage = "/Images/Infocard_productlist.jpg";

  try {
    const response = await fetch(`${url}artworks?select=category,artist_id,artists(name,description,image_url)&id=eq.${id}&limit=1`, {
      headers: {
        apikey: key,
        Authorization: `Bearer ${key}`,
      },
      cache: "no-store",
    });

    const data = await response.json();
    if (response.ok && Array.isArray(data) && data[0]) {
      const artwork = data[0];
      if (artwork?.category) {
        relatedCategory = artwork.category;
      }

      if (artwork?.artist_id) {
        artistId = artwork.artist_id;
      }

      const artist = artwork?.artists;
      if (artist?.name) {
        infoCardArtistName = artist.name;
      }
      if (artist?.description) {
        infoCardArtistDescription = artist.description;
      }
      if (artist?.image_url) {
        infoCardArtistImage = artist.image_url;
      }
    }
  } catch {
    // Keep default fallback category if the request fails.
  }

  return (
    <>
      <Nav />
      <main className="page">
        <ProductInfo id={id} artistName={artistName} />
        <ProductSection category={relatedCategory} title="Relaterede værker" limit={4} />
        <InfoCard title={`Hvem er ${infoCardArtistName}?`} subtitle="Kunstnere" description={infoCardArtistDescription} imageUrl={infoCardArtistImage} link={artistId ? `/artists/${artistId}` : "/artists"} />
      </main>
      <Footer />
    </>
  );
}
