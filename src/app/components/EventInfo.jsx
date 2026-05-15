const EventInfo = () => {
  return (
    <div>
      <h3 className="mt-10 font-medium">Kommende events</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
        {/* første card */}
        <div className="flex flex-col">
          <img src="/images/EventInfo-reception_img.jpg" alt="Indvielsesreception" className="w-full h-full object-cover" />
          <div className="bg-(--primary-blue) h-1 w-26 mb-2 mt-5"></div>
          <div className="mb-6 space-y-2">
            <h4 className="font-medium text-base md:text-sm lg:text-base">Indvielsesreception</h4>
            <p className="text-sm md:text-xs lg:text-sm">En eksklusiv åbningsaften med udvalgte værker, bobler og en introduktion til KÆNTTs kunstneriske univers. Oplev galleriet i en stemningsfuld og kurateret setting.</p>
            <a href="#" className="mt-3 inline-block underline hover:text-primary text-(--secondary-blue)">
              Læs mere
            </a>
          </div>
        </div>

        {/* Næste card */}
        <div className="flex flex-col">
          <img src="/images/EventInfo_mod-kunstnerne_img.jpg" alt="Kunstner" className="w-full h-full object-cover" />
          <div className="bg-(--primary-blue) h-1 w-26 mb-2 mt-5"></div>
          <div className="mb-6 space-y-2">
            <h4 className="font-medium text-base md:text-sm lg:text-base">Mød kunstnerne</h4>
            <p className="text-sm md:text-xs lg:text-sm">Mød kunstnerne bag værkerne og få indblik i processer, materialer og inspiration. En intim samtale, der bringer dig tættere på kunsten.</p>
            <a href="#" className="mt-3 inline-block underline hover:text-primary text-(--secondary-blue)">
              Læs mere
            </a>
          </div>
        </div>

        {/* Næste card */}
        <div className="flex flex-col">
          <img src="/images/EventInfo-Fernisering_img.jpg" alt="Kunstner" className="w-full h-full object-cover" />
          <div className="bg-(--primary-blue) h-1 w-26 mb-2 mt-5"></div>
          <div className="mb-6 space-y-2">
            <h4 className="font-medium text-base md:text-sm lg:text-base">Privat fernisering</h4>
            <p className="text-sm md:text-xs lg:text-sm">En lukket visning i rolige omgivelser, hvor du kan opleve værkerne uden forstyrrelser.</p>
            <a href="#" className="mt-3 inline-block underline hover:text-primary text-(--secondary-blue)">
              Læs mere
            </a>
          </div>
        </div>

        {/* Næste card */}
        <div className="flex flex-col">
          <img src="/images/EventInfo-Vin_img.jpg" alt="Kunstner" className="w-full h-full object-cover" />
          <div className="bg-(--primary-blue) h-1 w-26 mb-2 mt-5"></div>
          <div className="mb-6 space-y-2">
            <h4 className="font-medium text-base md:text-sm lg:text-base">Kunst og vin i harmoni</h4>
            <p className="text-sm md:text-xs lg:text-sm">En sanselig oplevelse, hvor kunst og vin går hånd i hånd. Udvalgte værker præsenteres sammen med nøje udvalgte vine.</p>
            <a href="#" className="mt-3 inline-block underline hover:text-primary text-(--secondary-blue)">
              Læs mere
            </a>
          </div>
        </div>

        {/* Næste card */}
        <div className="flex flex-col">
          <img src="/images/EventInfo-Rundvisning_img.jpg" alt="Kunstner" className="w-full h-full object-cover" />
          <div className="bg-(--primary-blue) h-1 w-26 mb-2 mt-5"></div>
          <div className="mb-6 space-y-2">
            <h4 className="font-medium text-base md:text-sm lg:text-base">Kureret rundvisning</h4>
            <p className="text-sm md:text-xs lg:text-sm">En guidet rundvisning i galleriets aktuelle kollektion med fokus på fortælling, æstetik og kuratering.</p>
            <a href="#" className="mt-3 inline-block underline hover:text-primary text-(--secondary-blue)">
              Læs mere
            </a>
          </div>
        </div>

        {/* Næste card */}
        <div className="flex flex-col">
          <img src="/images/EventInfo-Lukketid-img.jpg" alt="Kunstner" className="w-full h-full object-cover" />
          <div className="bg-(--primary-blue) h-1 w-26 mb-2 mt-5"></div>
          <div className="mb-6 space-y-2">
            <h4 className="font-medium text-base md:text-sm lg:text-base">Efter lukketid på KÆNTT</h4>
            <p className="text-sm md:text-xs lg:text-sm">En aften med kunst, musik og atmosfære. Galleriet åbner op efter lukketid og skaber en mere eksperimenterende og levende oplevelse.</p>
            <a href="#" className="mt-3 inline-block underline hover:text-primary text-(--secondary-blue)">
              Læs mere
            </a>
          </div>
        </div>
      </div>
      {/* Næste Sektion: 4 små cards samlet i én række på desktop */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-10 mb-10">
        <div>
          <img src="/images/Gulerod_img.jpg" alt="InfoCard Image" className="w-full object-cover" />
          <div className="bg-(--primary-blue) h-1 w-26 mb-2 mt-5"></div>
          <h4 className="font-bold text-base lg:!text-sm">KÆNTT-gulerod</h4>
          <p>Besøg galleriet under åbningsugen og modtag en symbolsk “gulerod” – en lille gave som tak for din interesse i kunsten.</p>
        </div>

        <div>
          <img src="/images/tote-bag_img.jpg" alt="InfoCard Image" className="w-full object-cover" />
          <div className="bg-(--primary-blue) h-1 w-26 mb-2 mt-5"></div>
          <h4 className="font-bold text-base lg:!text-sm">Limited tote drop</h4>
          <p>Få en eksklusiv KÆNTT mulepose ved fysisk fremmøde. Kun et begrænset antal – først til mølle.</p>
        </div>

        <div>
          <img src="/images/Samlefordele_img.jpg" alt="InfoCard Image" className="w-full object-cover" />
          <div className="bg-(--primary-blue) h-1 w-26 mb-2 mt-5"></div>
          <h4 className="font-bold text-base lg:!text-sm">Samlerfordel</h4>
          <p>Ved køb af et værk under åbningen modtager du en særlig gave fra galleriet – kurateret til at komplementere din investering.</p>
        </div>

        <div>
          <img src="/images/walknwine_img.jpg" alt="InfoCard Image" className="w-full object-cover" />
          <div className="bg-(--primary-blue) h-1 w-26 mb-2 mt-5"></div>
          <h4 className="font-bold text-base lg:!text-sm">Walk-in & vin</h4>
          <p>Kig forbi galleriet og nyd et glas vin, mens du oplever udstillingen i rolige og eksklusive rammer.</p>
        </div>
      </div>
    </div>
  );
};

export default EventInfo;
