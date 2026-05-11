import Image from "next/image";
import Nav from "../../components/Nav";
import ArtistInfo from "../../components/ArtistInfo";
import ProductSection from "../../components/ProductSection";
import Footer from "../../components/Footer";

export default function Home() {
  return (
    <main>
      <Nav />
<ArtistInfo />
<ProductSection />
      <Footer />
    </main>
  );
}
