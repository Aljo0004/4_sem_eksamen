import Image from "next/image";
import Nav from "../../components/Nav";
import Hero from "../../components/Hero";
import EventInfo from "../../components/EventInfo";
import CampaignSection from "../../components/CampaignSection";
import Footer from "../../components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <main className="page">
        <EventInfo />
        <CampaignSection />
      </main>
      <Footer />
    </>
  );
}
