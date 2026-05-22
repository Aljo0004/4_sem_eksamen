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
        <InfoCard title="Hvem er kunstnerne bag KÆNTT?" subtitle="Kunstnere" description="Få mere information om de aktuelle kunstnere bag de værker du finder hos Kæntt" imageUrl="/Images/Infocard_productlist.jpg" link="/artists" />
        <ProductSection category="keramik" title="Keramik" />
        <ProductSection category="glas" title="Glasværker" />
      </main>
      <Footer />
    </>
  );
}
