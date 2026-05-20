const CampaignSection = () => {
  return (
    <div>
      <h2 className="t-h2">Tilbud</h2>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
        <div className="overflow-hidden pb-5">
          <img src="/images/Gulerod_img.jpg" alt="Event" className="w-full aspect-square object-cover" />
          <div className="pt-4">
            <div className="bg-(--primary-blue) h-2 w-24 mb-2 mt-0"></div>
            <h3 className="t-card mb-2">KÆNTT-guleroden</h3>
            <p className="t-p pb-2">Besøg galleriet under åbningsugen og modtag en symbolsk “gulerod” – en lille gave som tak for din interesse i kunsten.</p>
            <a className="t-p text-(--secondary-blue) underline" href="">
              Læs mere
            </a>
          </div>
        </div>

        <div className="overflow-hidden pb-5">
          <img src="/images/tote-bag_img.jpg" alt="Event" className="w-full aspect-square object-cover" />
          <div className="pt-4">
            <div className="bg-(--primary-blue) h-2 w-24 mb-2 mt-0"></div>
            <h3 className="t-card mb-2">Limited Tote Drop</h3>
            <p className="t-p pb-2">Få en eksklusiv KÆNTT mulepose ved fysisk fremmøde. Kun et begrænset antal – først til mølle.</p>
            <a className="t-p text-(--secondary-blue) underline" href="">
              Læs mere
            </a>
          </div>
        </div>

        <div className="overflow-hidden pb-5">
          <img src="/images/Samlefordele_img.jpg" alt="Event" className="w-full aspect-square object-cover" />
          <div className="pt-4">
            <div className="bg-(--primary-blue) h-2 w-24 mb-2 mt-0"></div>
            <h3 className="t-card mb-2">Samlerfordel</h3>
            <p className="t-p pb-2">Ved køb af et værk under åbningen modtager du en særlig gave fra galleriet – kurateret til at komplementere din investering.</p>
            <a className="t-p text-(--secondary-blue) underline" href="">
              Læs mere
            </a>
          </div>
        </div>

        <div className="overflow-hidden pb-5">
          <img src="/images/walknwine_img.jpg" alt="Event" className="w-full aspect-square object-cover" />
          <div className="pt-4">
            <div className="bg-(--primary-blue) h-2 w-24 mb-2 mt-0"></div>
            <h3 className="t-card mb-2">Walk-In & Vin</h3>
            <p className="t-p pb-2">Kig forbi galleriet og nyd et glas vin, mens du oplever udstillingen i rolige og eksklusive rammer.</p>
            <a className="t-p text-(--secondary-blue) underline" href="">
              Læs mere
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CampaignSection;
