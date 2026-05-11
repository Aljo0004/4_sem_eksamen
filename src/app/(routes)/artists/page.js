import Image from "next/image";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import ArtistSection from "./components/ArtistSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <ArtistSection />
      <ArtistSection />
      <ArtistSection />
      <ArtistSection />
      <ArtistSection />
      <Footer />
    </main>
  );
}
