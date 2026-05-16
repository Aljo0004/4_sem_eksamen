import Image from "next/image";
import Nav from "../../components/Nav";
import CheckoutSection from "../../components/CheckoutSection";
import CampaignSection from "../../components/CampaignSection";
import Footer from "../../components/Footer";

export default function Home() {
  return (
    <main>
      <Nav />
      <CheckoutSection />
      <CampaignSection />
      <Footer />
    </main>
  );
}
