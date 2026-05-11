import Image from "next/image";
import Nav from "../../components/Nav";
import Hero from "../../components/Hero";
import LearnMoreSection from "../../components/LearnMoreSection";
import Vision from "../../components/Vision";
import Location from "../../components/Location";
import Footer from "../../components/Footer";

export default function Home() {
  return (
    <main>
      <Nav />
<Hero />
<LearnMoreSection />
<Vision />
<Location />
<LearnMoreSection />
      <Footer />
    </main>
  );
}
