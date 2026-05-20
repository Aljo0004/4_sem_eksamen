import Image from "next/image";
import Nav from "../../components/Nav";
import HeroPages from "../../components/HeroPages";
import ProductSection from "../../components/ProductSection";
import InfoCard from "../../components/InfoCard";
import Footer from "../../components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <HeroPages title="find unika værker - kun til dig!" description="Unikke værker, håndplukket til dig, der vil have noget særligt i dit hjem." imageUrl="/Images/productlist_Hero_img.jpg" />
      <main className="page">
        <ProductSection category="painting" title="Plakater" />
        <InfoCard />
        <ProductSection category="keramik" title="Keramik" />
        <ProductSection category="glas" title="Glasværker" />
      </main>
      <Footer />
    </>
  );
}
