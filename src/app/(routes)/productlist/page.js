import Image from "next/image";
import Nav from "../../components/Nav";
import Hero from "../../components/Hero";
import ProductSection from "../../components/ProductSection";
import InfoCard from "../../components/InfoCard";
import Footer from "../../components/Footer";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <ProductSection category="painting" title="Plakater"/>
      <InfoCard />
      <ProductSection category="keramik" title="Keramik"/>
      <ProductSection category="glas" title="Glasværker"/>
      <Footer />
    </main>
  );
}
