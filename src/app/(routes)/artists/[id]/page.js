import Image from "next/image";
import Nav from "../../../components/Nav";
import ProductSection from "../../../components/ProductSection";
import Footer from "../../../components/Footer";
import ArtistPage from "@/app/components/ArtistPage";

export default async function Home({ params }) {
  const { id } = await params;

  return (
    <>
      <Nav />
      <main className="page">
        <ArtistPage id={id} />
        <ProductSection artistId={id} limit={8} title="Kunstnerens værker" />
        <Footer />
      </main>
    </>
  );
}
