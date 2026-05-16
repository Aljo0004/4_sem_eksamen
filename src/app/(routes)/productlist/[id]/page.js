import Image from "next/image";
import Nav from "../../../components/Nav";
import ProductInfo from "../../../components/ProductInfo";
import ProductSection from "../../../components/ProductSection";
import InfoCard from "../../../components/InfoCard";
import Footer from "../../../components/Footer";

export default async function Home({ params }) {
  const { id } = await params;

  return (
    <main>
      <Nav />
      <ProductInfo id={id} />
      <ProductSection category="keramik" title="Relaterede produkter" limit={4} />
      <InfoCard />
      <Footer />
    </main>
  );
}
