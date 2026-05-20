import Nav from "../../components/Nav";
import CheckoutSection from "../../components/CheckoutSection";
import CampaignSection from "../../components/CampaignSection";
import Footer from "../../components/Footer";

export default function Home() {
  return (
  <div>
      <Nav />
       <main className="page">
      <CheckoutSection />
      <CampaignSection />
          </main>
      <Footer />
  </div>
  );
}
