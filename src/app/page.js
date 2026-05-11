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
    <main>
      <Nav />
      <Hero />
      <EventSection />
      <Location />
      <ProductSection />
      <LearnMore />
      <InfoCard />
      <Footer />
    </main>
  );
}
