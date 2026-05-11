import Image from "next/image";
import Nav from "../../components/Nav";
import ProductInfo from "../../components/ProductInfo";
import ProductSection from "../../components/ProductSection";
import InfoCard from "../../components/InfoCard";
import Footer from "../../components/Footer";

export default function Home() {
  return (
    <main>
    <Nav />
    <ProductInfo />
    <ProductSection />
    <InfoCard />
    <Footer />
    </main>
  );
}
