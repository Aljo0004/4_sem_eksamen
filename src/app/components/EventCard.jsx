import Link from "next/link";

const EventCard = () => {
  return (
    <article className="mb-12 mt-12">
      <h1 className="mb-4 t-h2">Se vores events</h1>
      <div className="event-scrollbar overflow-x-auto">
        <div className="grid mb-8 min-w-full grid-flow-col auto-cols-[calc((100%-3rem)/4.2)] gap-4 bg-white max-sm:grid-cols-2 max-sm:grid-rows-3">
          <Link href="/events" className="block group w-full max-sm:flex max-sm:flex-col max-sm:justify-between">
            <div className="w-full overflow-hidden bg-white">
              <div className="aspect-square w-full">
                <img src="/Images/EventInfo_mod-kunstnerne_img.jpg" alt="event Image" className="h-full aspect-square mb-4 w-full object-cover transition-transform duration-300 ease-out group-hover:scale-95" />
              </div>
              <div className="">
                <div className="bg-(--primary-blue) h-2 w-28 mt-4 mb-4 group-hover:w-full duration-300 ease-inOut"></div>
                <div className="flex justify-between">
                  <p className="mb-2 capitalize t-card">Mød kunstnerne</p>
                </div>
                <p className="mt-2 t-small">Mød kunstneren bag værkerne og få indblik i processer, materialer og inspiration. En intim samtale, der bringer dig tættere på kunsten.</p>
              </div>
            </div>
            <div className="pt-2 min-md:hidden">
              <span className="border-b-2 t-p text-(--secondary-blue)">LÆS MERE</span>
            </div>
          </Link>

          <Link href="/events" className="block group w-full max-sm:flex max-sm:flex-col max-sm:justify-between">
            <div className="w-full overflow-hidden bg-white">
              <div className="aspect-square w-full">
                <img src="/Images/EventInfo-Fernisering_img.jpg" alt="event Image" className="aspect-square mb-4 w-full object-top-left object-cover transition-transform duration-300 ease-out group-hover:scale-95" />
              </div>
              <div className="">
                <div className="bg-(--primary-blue) h-2 w-28 mt-4 mb-4 group-hover:w-full duration-300 ease-inOut"></div>
                <div className="flex justify-between">
                  <p className="mb-2 capitalize t-card">Privat fernisering</p>
                </div>
                <p className="mt-2 t-small">En lukket visning i rolige omgivelser, hvor du kan opleve værkerne uden forstyrrelser. Ideel for samlere og særligt inviterede gæster.</p>
              </div>
            </div>
            <div className="pt-2 min-md:hidden">
              <span className="border-b-2 t-p text-(--secondary-blue)">LÆS MERE</span>
            </div>
          </Link>

          <Link href="/events" className="block group w-full max-sm:flex max-sm:flex-col max-sm:justify-between">
            <div className="w-full overflow-hidden bg-white">
              <div className="aspect-square w-full">
                <img src="/Images/EventInfo-Lukketid-img.jpg" alt="event Image" className="h-full aspect-square mb-4 w-full object-cover transition-transform duration-300 ease-out group-hover:scale-95" />
              </div>
              <div className="">
                <div className="bg-(--primary-blue) h-2 w-28 mt-4 mb-4 group-hover:w-full duration-300 ease-inOut"></div>
                <div className="flex justify-between">
                  <p className="mb-2 capitalize t-card">Efter lukketid på KÆNTT</p>
                </div>
                <p className="mt-2 t-small">En aften med kunst, musik og atmosfære. Galleriet åbner op efter lukketid og skaber en mere eksperimenterende og levende oplevelse.</p>
              </div>
            </div>
            <div className="pt-2 min-md:hidden">
              <span className="border-b-2 t-p text-(--secondary-blue)">LÆS MERE</span>
            </div>
          </Link>

          <Link href="/events" className="block group w-full max-sm:flex max-sm:flex-col max-sm:justify-between">
            <div className="w-full overflow-hidden bg-white">
              <div className="aspect-square w-full">
                <img src="/Images/EventInfo-Rundvisning_img.jpg" alt="event Image" className="h-full aspect-square mb-4 w-full object-cover transition-transform duration-300 ease-out group-hover:scale-95" />
              </div>
              <div className="">
                <div className="bg-(--primary-blue) h-2 w-28 mt-4 mb-4 group-hover:w-full duration-300 ease-inOut"></div>
                <div className="flex justify-between">
                  <p className="mb-2 capitalize t-card">Kureret rundvisning</p>
                </div>
                <p className="mt-2 t-small">En guidet rundvisning i galleriets aktuelle kollektion med fokus på fortælling, æstetik og kuratering.</p>
              </div>
            </div>
            <div className="pt-2 min-md:hidden">
              <span className="border-b-2 t-p text-(--secondary-blue)">LÆS MERE</span>
            </div>
          </Link>

          <Link href="/events" className="block group w-full max-sm:flex max-sm:flex-col max-sm:justify-between">
            <div className="w-full overflow-hidden bg-white">
              <div className="aspect-square w-full">
                <img src="/Images/EventInfo-Vin_img.jpg" alt="event Image" className="h-full aspect-square mb-4 w-full object-cover transition-transform duration-300 ease-out group-hover:scale-95" />
              </div>
              <div className="">
                <div className="bg-(--primary-blue) h-2 w-28 mt-4 mb-4 group-hover:w-full duration-300 ease-inOut"></div>
                <div className="flex justify-between">
                  <p className="mb-2 capitalize t-card">Kunst og vin i harmoni</p>
                </div>
                <p className="mt-2 t-small">En sanselig oplevelse, hvor kunst og vin går hånd i hånd. Udvalgte værker præsenteres sammen med nøje udvalgte vine.</p>
              </div>
            </div>
            <div className="pt-2 min-md:hidden">
              <span className="border-b-2 t-p text-(--secondary-blue)">LÆS MERE</span>
            </div>
          </Link>

          <Link href="/events" className="block group w-full max-sm:flex max-sm:flex-col max-sm:justify-between">
            <div className="w-full overflow-hidden bg-white">
              <div className="aspect-square w-full">
                <img src="/Images/EventInfo-reception_img.jpg" alt="event Image" className="h-full aspect-square mb-4 w-full object-cover transition-transform duration-300 ease-out group-hover:scale-95" />
              </div>
              <div className="">
                <div className="bg-(--primary-blue) h-2 w-28 mt-4 mb-4 group-hover:w-full duration-300 ease-inOut"></div>
                <div className="flex justify-between">
                  <p className="mb-2 capitalize t-card">Indvielsesreception</p>
                </div>
                <p className="mt-2 t-small">En eksklusiv åbningsaften med udvalgte værker, bobler og en introduktion til KÆNTTs kunstneriske univers. Oplev galleriet i en stemningsfuld og kurateret setting.</p>
              </div>
            </div>
            <div className="pt-2 min-md:hidden">
              <span className="border-b-2 t-p text-(--secondary-blue)">LÆS MERE</span>
            </div>
          </Link>
        </div>
      </div>
    </article>
  );
};

export default EventCard;
