import Image from "next/image";
import Nav from "../../components/Nav";
import HeroPages from "../../components/HeroPages";
import LearnMoreSection from "../../components/LearnMoreSection";
import Vision from "../../components/Vision";
import Location from "../../components/Location";
import Footer from "../../components/Footer";
import Kvalitet from "../../components/Kvalitet";

export default function Home() {
  return (
    <>
      <Nav />
      <HeroPages title="lær mere om hvem kæntt er" description="Dyk ned i fortællingen bag KÆNTT og vores passion for unika kunst." imageUrl="/Images/About_Hero_img.jpg" />
      <main className="page">
        <LearnMoreSection />
        <Vision />
        <Location />
        <Kvalitet />
      </main>
      <Footer />
    </>
  );
}
