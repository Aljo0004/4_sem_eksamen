import Nav from "../../../components/Nav";
import Footer from "../../../components/Footer";
import EventPage from "../../../components/EventPage";
import EventCard from "@/app/components/EventCard";


export default async function Home({ params }) {
  const { id } = await params;

  return (
    <>
      <Nav />
      <main className="page">
        <EventPage id={id} />
        <EventCard excludeEventId={id} />
      </main>
      <Footer />
    </>
  );
}
