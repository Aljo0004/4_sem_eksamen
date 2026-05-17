import Image from "next/image";
import Nav from "../../components/Nav";
import Hero from "../../components/Hero";
import ArtistSection from "../../components/ArtistSection";
import Footer from "../../components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <main className="page">
        <ArtistSection name="Kunstnere hos KÆNTT"/>
        <Footer />
      </main>
    </>
  );
}
