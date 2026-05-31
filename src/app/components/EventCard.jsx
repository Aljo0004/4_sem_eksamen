"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

const url = "https://nrmpgakohbffwagdkvpz.supabase.co/rest/v1/";
const key = "sb_publishable_5CdrCx6J36n2qJrs6sBwiA_bvTRTQ4a";

const EventCard = ({ excludeEventId = null }) => {
  const [events, setEvents] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await fetch(`${url}events?select=id,eventname,description,events_url&order=id.asc&limit=6`, {
          headers: {
            apikey: key,
            Authorization: `Bearer ${key}`,
          },
        });

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data?.message || "Kunne ikke hente events");
        }

        if (Array.isArray(data)) {
          setEvents(data);
        } else {
          setEvents([]);
          setError("API returnerede ikke en liste");
        }
      } catch (err) {
        setEvents([]);
        setError(err.message || "Ukendt fejl ved hentning af events");
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  if (loading) return <p>Henter events...</p>;
  if (error) return <p>Fejl: {error}</p>;

  const filteredEvents = excludeEventId ? events.filter((event) => String(event.id) !== String(excludeEventId)) : events;

  return (
    <article className="mb-12 mt-12">
      <h1 className="mb-4 t-h2">Se vores events</h1>
      <div className="event-scrollbar overflow-x-auto">
        <div className="grid mb-8 min-w-full grid-flow-col auto-cols-[calc((100%-3rem)/4.2)] gap-4 bg-white max-sm:grid-cols-2 max-sm:grid-rows-3">
          {filteredEvents.map((event) => (
            <Link href={`/events/${event.id}`} key={event.id} className="block group w-full max-sm:flex max-sm:flex-col max-sm:justify-between">
              <div className="w-full overflow-hidden bg-white">
                <div className="aspect-square w-full">
                  <img src={event.events_url} alt={event.eventname} className="h-full aspect-square mb-4 w-full object-cover transition-transform duration-300 ease-out group-hover:scale-95" />
                </div>
                <div className="">
                  <div className="bg-(--primary-blue) h-2 w-28 mt-4 mb-4 group-hover:w-full duration-300 ease-inOut"></div>
                  <div className="flex justify-between">
                    <p className="mb-2 capitalize t-card">{event.eventname}</p>
                  </div>
                  <p className="mt-2 t-small">{event.description?.slice(0, 200)}...</p>
                </div>
              </div>
              <div className="pt-2 md:hidden">
                <span className="border-b-2 t-p text-(--secondary-blue)">LÆS MERE</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </article>
  );
};

export default EventCard;
