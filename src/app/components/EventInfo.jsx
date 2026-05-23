const EventInfo = () => {
  return (
    <div>
      <h2 className="t-h2 mt-10">Kommende events</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {/* Card 1 */}
        <div className="overflow-hidden pb-5">
          <img src="/Images/EventInfo-reception_img.jpg" alt="Event" className="w-full h-48 object-cover" />
          <div className="pt-4">
            <div className="bg-(--primary-blue) h-2 w-24 mb-2 mt-0"></div>
            <h3 className="t-card mb-2">Indvielsesreception</h3>
            <p className="t-p pb-2">En eksklusiv åbningsaften med udvalgte værker, bobler og en introduktion til KÆNTTs kunstneriske univers. Oplev galleriet i en stemningsfuld og kurateret setting.</p>
            <a className="t-p text-(--secondary-blue) underline" href="">
              Læs mere
            </a>
          </div>
        </div>

        {/* Card 2 */}
        <div className="overflow-hidden pb-5">
          <img src="/Images/EventInfo_mod-kunstnerne_img.jpg" alt="Event" className="w-full h-48 object-cover" />
          <div className="pt-4">
            <div className="bg-(--primary-blue) h-2 w-24 mb-2 mt-0"></div>
            <h3 className="t-card mb-2">Mød kunstnerne</h3>
            <p className="t-p pb-2">Mød kunstnerne bag værkerne og få indblik i processer, materialer og inspiration. En intim samtale, der bringer dig tættere på kunsten.</p>
            <a className="t-p text-(--secondary-blue) underline" href="">
              Læs mere
            </a>
          </div>
        </div>

        {/* Card 3 */}
        <div className="overflow-hidden pb-5">
          <img src="/Images/EventInfo-Fernisering_img.jpg" alt="Event" className="w-full h-48 object-cover" />
          <div className="pt-4">
            <div className="bg-(--primary-blue) h-2 w-24 mb-2 mt-0"></div>
            <h3 className="t-card mb-2">Privat fernisering</h3>
            <p className="t-p pb-2">En lukket visning i rolige omgivelser, hvor du kan opleve værkerne uden forstyrrelser.</p>
            <a className="t-p text-(--secondary-blue) underline" href="">
              Læs mere
            </a>
          </div>
        </div>
        {/* Card 4 */}
        <div className="overflow-hidden pb-5">
          <img src="/Images/EventInfo-Vin_img.jpg" alt="Event" className="w-full h-48 object-cover" />
          <div className="pt-4">
            <div className="bg-(--primary-blue) h-2 w-24 mb-2 mt-0"></div>
            <h3 className="t-card mb-2">Kunst og vin i harmoni</h3>
            <p className="t-p pb-2">En sanselig oplevelse, hvor kunst og vin går hånd i hånd. Udvalgte værker præsenteres sammen med nøje udvalgte vine.</p>
            <a className="t-p text-(--secondary-blue) underline" href="">
              Læs mere
            </a>
          </div>
        </div>
        {/* Card 5 */}
        <div className="overflow-hidden pb-5">
          <img src="/Images/EventInfo-Rundvisning_img.jpg" alt="Event" className="w-full h-48 object-cover" />
          <div className="pt-4">
            <div className="bg-(--primary-blue) h-2 w-24 mb-2 mt-0"></div>
            <h3 className="t-card mb-2">Kureret rundvisning</h3>
            <p className="t-p pb-2">En guidet rundvisning i galleriets aktuelle kollektion med fokus på fortælling, æstetik og kuratering.</p>
            <a className="t-p text-(--secondary-blue) underline" href="">
              Læs mere
            </a>
          </div>
        </div>
        {/* Card 6 */}
        <div className="overflow-hidden pb-5">
          <img src="/Images/EventInfo-Lukketid-img.jpg" alt="Event" className="w-full h-48 object-cover" />
          <div className="pt-4">
            <div className="bg-(--primary-blue) h-2 w-24 mb-2 mt-0"></div>
            <h3 className="t-card mb-2">Efter lukketid på KÆNTT</h3>
            <p className="t-p pb-2">En aften med kunst, musik og atmosfære. Galleriet åbner op efter lukketid og skaber en mere eksperimenterende og levende oplevelse.</p>
            <a className="t-p text-(--secondary-blue) underline" href="">
              Læs mere
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventInfo;
