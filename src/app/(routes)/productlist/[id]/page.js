import Image from "next/image";
import Nav from "../../../components/Nav";
import ProductInfo from "../../../components/ProductInfo";
import ProductSection from "../../../components/ProductSection";
import InfoCard from "../../../components/InfoCard";
import Footer from "../../../components/Footer";

export default async function Home({ params, searchParams }) {
  const { id } = await params;
  const { artistName } = await searchParams;

  return (
    <>
      <Nav />
      <main className="page">
        <ProductInfo id={id} artistName={artistName} />
        <ProductSection category="keramik" title="Relaterede produkter" limit={4} />
        <InfoCard />
      </main>
      <Footer />
    </>
  );
}
