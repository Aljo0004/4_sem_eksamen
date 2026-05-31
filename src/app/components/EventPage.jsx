"use client";
import Image from "next/image";
import Location from "./Location";
import { useEffect, useState } from "react";
import { LuCalendar } from "react-icons/lu";
import { LuClock } from "react-icons/lu";
import { LuTicket } from "react-icons/lu";
import { PiXThin } from "react-icons/pi";

const url = "https://nrmpgakohbffwagdkvpz.supabase.co/rest/v1/";
const key = "sb_publishable_5CdrCx6J36n2qJrs6sBwiA_bvTRTQ4a";

const EventPage = ({ id }) => {
  const [event, setEvent] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const [isSignupOpen, setIsSignupOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSignupSuccess, setShowSignupSuccess] = useState(false);
  const [isSignupSuccessFading, setIsSignupSuccessFading] = useState(false);

  const handleSignupSubmit = async (e) => {
    e.preventDefault();
    setShowSignupSuccess(false);
    setIsSignupSuccessFading(false);
    setIsSubmitting(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setShowSignupSuccess(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    if (!showSignupSuccess) {
      setIsSignupSuccessFading(false);
      return;
    }

    const fadeTimer = setTimeout(() => {
      setIsSignupSuccessFading(true);
    }, 1500);

    const hideTimer = setTimeout(() => {
      setShowSignupSuccess(false);
      setIsSignupSuccessFading(false);
    }, 2000);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
    };
  }, [showSignupSuccess]);

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const response = await fetch(`${url}events?select=id,date,eventname,description,price,fromtime,totime,events_url&id=eq.${id}&limit=1`, {
          headers: {
            apikey: key,
            Authorization: `Bearer ${key}`,
          },
        });

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data?.message || "Kunne ikke hente eventet");
        }

        setEvent(data[0] || null);
      } catch (err) {
        setEvent(null);
        setError(err.message || "Ukendt fejl ved hentning af event");
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchEvent();
    } else {
      setLoading(false);
      setError("Mangler event-id");
    }
  }, [id]);

  if (loading) return <p>Henter event...</p>;
  if (error) return <p>Fejl: {error}</p>;
  if (!event) return <p>Intet event fundet.</p>;

  return (
    <>
      <section className="mb-12 mt-12">
        <div className="flex gap-8 flex-col">
          <h1 className="mb-6 uppercase t-h1 max-sm:w-2/4">{event.eventname}</h1>
          <div className="w-full grid grid-cols-4 gap-8 max-sm:gap-0 max-sm:flex max-sm:flex-col">
            <Image src={event.events_url} alt={event.eventname} className="w-full max-sm:w-screen max-sm:max-w-screen max-sm:ml-[calc(50%-50vw)] max-sm:mr-[calc(50%-50vw)]  col-span-3 object-cover max-sm:aspect-4/3" width={1920} height={1080} />
            <div className="col-span-1 max-sm:pt-0">
              <div className=" bg-(--secondary-blue) self-start pb-8 pt-6 pl-4 pr-4 gap-4 flex flex-col max-sm:w-screen max-sm:max-w-none max-sm:ml-[calc(50%-50vw)] max-sm:mr-[calc(50%-50vw)]">
                <h4 className="t-h4 max-sm:pb-3 text-white text-center">Event afholdes</h4>

                <div className="flex gap-2 h-12 max-sm:ml-14 max-sm:mr-14 bg-white">
                  <LuCalendar className="text-(--secondary-blue) mt-auto mb-auto ml-2 w-8 h-8" />
                  <div className="w-px mt-auto mb-auto h-6 bg-black"></div>
                  <p className="t-p mt-auto mb-auto ">{event.date}</p>
                </div>
                <div className="flex gap-2 h-12 max-sm:ml-14 max-sm:mr-14 bg-white">
                  <LuClock className="text-(--secondary-blue) mt-auto mb-auto ml-2 w-8 h-8" />
                  <div className="w-px h-6 mt-auto mb-auto bg-black"></div>
                  <p className="mt-auto mb-auto t-p">
                    Tid: {event.fromtime.slice(0, 5)} - {event.totime.slice(0, 5)}
                  </p>
                </div>
                <div className="flex gap-2 h-12 max-sm:ml-14 max-sm:mr-14 bg-white">
                  <LuTicket className="text-(--secondary-blue) mt-auto mb-auto ml-2 w-8 h-8" />
                  <div className="w-px mt-auto mb-auto h-6 bg-black"></div>
                  <p className="mt-auto mb-auto t-p"> {event.price == null ? "Gratis" : `Pris: ${event.price} kr.`} </p>
                </div>
              </div>
              <div className="bg-(--secondary-blue) h-16 w-full mt-8 flex items-center justify-center hover:scale-105 transition-transform duration-300 ease-inOut cursor-pointer max-sm:m-auto max-sm:mt-8 max-sm:w-[50%]" onClick={() => setIsSignupOpen(true)}>
                <h4 className="t-h4 text-white">Tilmeld dig</h4>
              </div>
            </div>
          </div>

          <div className="w-full flex max-sm:flex-col">
            <div className=" w-[50%] max-sm:w-full pt-14 max-sm:pt-2">
              <h2 className="t-h2"> Om begivenheden</h2>
              <p className="mt-6 t-p" style={{ lineHeight: "1.7" }}>
                {event.description}
              </p>
            </div>
            <div className="w-[40%] max-sm:w-full ml-auto">
              <Location columnLayout />
            </div>
          </div>
        </div>
      </section>

      {isSignupOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-(--primary-blue)/40 backdrop-blur-sm p-4" onClick={() => setIsSignupOpen(false)}>
          <div className="relative w-2/3 flex flex-col gap-4 ml-12 mr-8 bg-white p-6" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between">
              <div className="bg-(--primary-blue) mt-auto mb-auto h-3 w-36 mb-6"></div>
              <div className="" onClick={() => setIsSignupOpen(false)}>
                <PiXThin size={30} className="place-self-start cursor-pointer hover:scale-125 transition-transform duration-300 ease-inOut" />
              </div>
            </div>
            <h4 className="t-h4 mb-2">Tilmeld dig eventet</h4>
            <p className="t-p mb-4">Indtast din e-mailadresse for at reservere din plads til arrangementet. Vi sender en bekræftelse med alle praktiske informationer om eventet.</p>
            <form className="flex flex-col gap-6" onSubmit={handleSignupSubmit}>
              <input id="event-signup-email" type="email" placeholder="din@email.dk" className="border border-(--secondary-blue) px-3 py-2 t-p" />
              <button type="submit" disabled={isSubmitting} className="bg-(--secondary-blue) w-1/4 h-12 text-white py-2 px-4 t-p cursor-pointer hover:opacity-90 transition-opacity disabled:cursor-not-allowed disabled:opacity-60">
                {isSubmitting ? "Tilmelder..." : "Send"}
              </button>
            </form>

            {showSignupSuccess && <p className={`absolute bottom-4 right-6 t-p text-(--secondary-blue) transition-opacity duration-500 ${isSignupSuccessFading ? "opacity-0" : "opacity-100"}`}>Succesfuld tilmelding</p>}
          </div>
        </div>
      )}
    </>
  );
};

export default EventPage;
