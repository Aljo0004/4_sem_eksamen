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

  try {
    const response = await fetch(`${url}artworks?select=category&id=eq.${id}&limit=1`, {
      headers: {
        apikey: key,
        Authorization: `Bearer ${key}`,
      },
      cache: "no-store",
    });

    const data = await response.json();
    if (response.ok && Array.isArray(data) && data[0]?.category) {
      relatedCategory = data[0].category;
    }
  } catch {
    // Keep default fallback category if the request fails.
  }

  return (
    <>
      <Nav />
      <main className="page">
        <ProductInfo id={id} artistName={artistName} />
        <ProductSection category={relatedCategory} title="Relaterede produkter" limit={4} />
        <InfoCard />
      </main>
      <Footer />
    </>
  );
}
