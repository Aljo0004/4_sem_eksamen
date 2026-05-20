import Image from "next/image";
import Nav from "../../components/Nav";
import HeroPages from "../../components/HeroPages";
import ArtistSection from "../../components/ArtistSection";
import Footer from "../../components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <HeroPages title="lær om kunstnerne bag værkerne hos kæntt" description="Læs mere om de aktuelle kunstnere der står bag værkerne der fremvises hos KÆNTT" imageUrl="/Images/Artist_Hero_img.jpg" />
      <main className="page">
        <ArtistSection name="Kunstnere hos KÆNTT" />
        <Footer />
      </main>
    </>
  );
}
