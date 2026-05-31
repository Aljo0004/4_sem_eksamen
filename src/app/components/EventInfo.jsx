import Link from "next/link";
import Image from "next/image";

const url = "https://nrmpgakohbffwagdkvpz.supabase.co/rest/v1/";
const key = "sb_publishable_5CdrCx6J36n2qJrs6sBwiA_bvTRTQ4a";

const EventInfo = async () => {
  let events = [];
  let error = "";

  try {
    const response = await fetch(`${url}events?select=id,eventname,description,events_url&order=id.asc&limit=6`, {
      headers: {
        apikey: key,
        Authorization: `Bearer ${key}`,
      },
      next: { revalidate: 60 },
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data?.message || "Kunne ikke hente events");
    }

    if (Array.isArray(data)) {
      events = data;
    } else {
      error = "API returnerede ikke en liste";
    }
  } catch (err) {
    error = err.message || "Ukendt fejl ved hentning af events";
  }

  if (error) return <p>Fejl: {error}</p>;

  return (
    <div>
      <h2 className="t-h2 mt-10">Kommende events</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {events.map((event) => (
          <Link href={`/events/${event.id}`} key={event.id} className="group">
            <div className="overflow-hidden pb-5">
              <Image src={event.events_url} alt={event.eventname} className="w-full h-48 object-cover transition-transform duration-300 ease-out group-hover:scale-95" width={1920} height={1080} />
              <div className="pt-4">
                <div className="bg-(--primary-blue) h-2 w-24 mb-2 mt-0 group-hover:w-full duration-300 ease-inOut"></div>
                <h3 className="t-card mb-2">{event.eventname}</h3>
                <p className="t-p pb-2">{event.description?.slice(0, 200)}...</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default EventInfo;
