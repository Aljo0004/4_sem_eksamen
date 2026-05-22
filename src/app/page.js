import Image from "next/image";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import EventSection from "./components/EventSection";
import Location from "./components/Location";
import ProductSection from "./components/ProductSection";
import LearnMore from "./components/LearnMore";
import InfoCard from "./components/InfoCard";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <main className="page">
        <EventSection />
        <Location />
        <ProductSection category="keramik" title="Håndplukkede produkter" limit={4} />
        <LearnMore />
        <InfoCard title="Hvem er KÆNTT" subtitle="Om KÆNTT" description="Lær historien bag galleriet, vores mission og de kunstnere vi samarbejder med." imageUrl="/Images/InfoCard_Img.jpg" link="#" />
      </main>
      <Footer />
    </>
  );
}
