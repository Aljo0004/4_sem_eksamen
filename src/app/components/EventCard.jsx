import Link from "next/link";

const EventCard = () => {
  return (
    <article className="mb-12 mt-12">
      <h4 className="mb-4">Se vores events</h4>
      <div className="event-scrollbar overflow-x-auto">
        <div className="grid mb-8 min-w-full grid-flow-col auto-cols-[calc((100%-3rem)/4)] gap-4 bg-white">
          <Link href="/events" className="block group w-full">
            <div className="w-full overflow-hidden bg-white">
              <div className="aspect-square w-full">
                <img src="/Images/EventInfo_mod-kunstnerne_img.jpg" alt="event Image" className="h-full aspect-square mb-4 w-full object-cover transition-transform duration-300 ease-out group-hover:scale-95" />
              </div>
              <div className="">
                <div className="bg-(--primary-blue) h-2 w-28 mt-4 mb-4 group-hover:w-full duration-300 ease-inOut"></div>
                <div className="flex justify-between">
                  <p className="text-xl mb-2 capitalize font-bold leading-tight">Mød kunstnerne</p>
                </div>
                <p className="mt-2 line-clamp-3 text-sm">Mød kunstneren bag værkerne og få indblik i processer, materialer og inspiration. En intim samtale, der bringer dig tættere på kunsten.</p>
              </div>
            </div>
          </Link>

          <Link href="/events" className="block group w-full">
            <div className="w-full overflow-hidden bg-white">
              <div className="aspect-square w-full">
                <img src="/Images/EventInfo-Fernisering_img.jpg" alt="event Image" className="aspect-square mb-4 w-full object-top-left object-cover transition-transform duration-300 ease-out group-hover:scale-95" />
              </div>
              <div className="">
                <div className="bg-(--primary-blue) h-2 w-28 mt-4 mb-4 group-hover:w-full duration-300 ease-inOut"></div>
                <div className="flex justify-between">
                  <p className="text-xl mb-2 capitalize font-bold leading-tight">Privat fernisering</p>
                </div>
                <p className="mt-2 line-clamp-3 text-sm">En lukket visning i rolige omgivelser, hvor du kan opleve værkerne uden forstyrrelser. Ideel for samlere og særligt inviterede gæster.</p>
              </div>
            </div>
          </Link>

          <Link href="/events" className="block group w-full">
            <div className="w-full overflow-hidden bg-white">
              <div className="aspect-square w-full">
                <img src="/Images/EventInfo-Lukketid-img.jpg" alt="event Image" className="h-full aspect-square mb-4 w-full object-cover transition-transform duration-300 ease-out group-hover:scale-95" />
              </div>
              <div className="">
                <div className="bg-(--primary-blue) h-2 w-28 mt-4 mb-4 group-hover:w-full duration-300 ease-inOut"></div>
                <div className="flex justify-between">
                  <p className="text-xl mb-2 capitalize font-bold leading-tight">Efter lukketid på KÆNTT</p>
                </div>
                <p className="mt-2 line-clamp-3 text-sm">En aften med kunst, musik og atmosfære. Galleriet åbner op efter lukketid og skaber en mere eksperimenterende og levende oplevelse.</p>
              </div>
            </div>
          </Link>

          <Link href="/events" className="block group w-full">
            <div className="w-full overflow-hidden bg-white">
              <div className="aspect-square w-full">
                <img src="/Images/EventInfo-Rundvisning_img.jpg" alt="event Image" className="h-full aspect-square mb-4 w-full object-cover transition-transform duration-300 ease-out group-hover:scale-95" />
              </div>
              <div className="">
                <div className="bg-(--primary-blue) h-2 w-28 mt-4 mb-4 group-hover:w-full duration-300 ease-inOut"></div>
                <div className="flex justify-between">
                  <p className="text-xl mb-2 capitalize font-bold leading-tight">Kureret rundvisning</p>
                </div>
                <p className="mt-2 line-clamp-3 text-sm">En guidet rundvisning i galleriets aktuelle kollektion med fokus på fortælling, æstetik og kuratering.</p>
              </div>
            </div>
          </Link>

          <Link href="/events" className="block group w-full">
            <div className="w-full overflow-hidden bg-white">
              <div className="aspect-square w-full">
                <img src="/Images/EventInfo-Vin_img.jpg" alt="event Image" className="h-full aspect-square mb-4 w-full object-cover transition-transform duration-300 ease-out group-hover:scale-95" />
              </div>
              <div className="">
                <div className="bg-(--primary-blue) h-2 w-28 mt-4 mb-4 group-hover:w-full duration-300 ease-inOut"></div>
                <div className="flex justify-between">
                  <p className="text-xl mb-2 capitalize font-bold leading-tight">Kunst og vin i harmoni</p>
                </div>
                <p className="mt-2 line-clamp-3 text-sm">En sanselig oplevelse, hvor kunst og vin går hånd i hånd. Udvalgte værker præsenteres sammen med nøje udvalgte vine.</p>
              </div>
            </div>
          </Link>

          <Link href="/events" className="block group w-full">
            <div className="w-full overflow-hidden bg-white">
              <div className="aspect-square w-full">
                <img src="/Images/EventInfo-reception_img.jpg" alt="event Image" className="h-full aspect-square mb-4 w-full object-cover transition-transform duration-300 ease-out group-hover:scale-95" />
              </div>
              <div className="">
                <div className="bg-(--primary-blue) h-2 w-28 mt-4 mb-4 group-hover:w-full duration-300 ease-inOut"></div>
                <div className="flex justify-between">
                  <p className="text-xl mb-2 capitalize font-bold leading-tight">Indvielsesreception</p>
                </div>
                <p className="mt-2 line-clamp-3 text-sm">En eksklusiv åbningsaften med udvalgte værker, bobler og en introduktion til KÆNTTs kunstneriske univers. Oplev galleriet i en stemningsfuld og kurateret setting.</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </article>
  );
};

export default EventCard;
