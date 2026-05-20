import Image from "next/image";
import Nav from "../../components/Nav";
import HeroPages from "../../components/HeroPages";
import EventInfo from "../../components/EventInfo";
import CampaignSection from "../../components/CampaignSection";
import Footer from "../../components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <HeroPages title="hvilke events har vi" description="Få overblik over kommende events, udstillinger og særlige oplevelser hos KÆNTT." imageUrl="/Images/Forside_Hero_img.jpg" />
      <main className="page">
        <EventInfo />
        <CampaignSection />
      </main>
      <Footer />
    </>
  );
}
