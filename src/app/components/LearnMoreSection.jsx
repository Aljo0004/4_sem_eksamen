const LearnMoreSection = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row gap-6 items-stretch mt-10">
        <div className="w-full md:w-1/2 order-2 md:order-1">
          <div className="bg-(--primary-blue) h-1 w-26 mb-2"></div>
          <h3>Hvem er Kæntt?</h3>
          <h5>
            KÆNTT er et kurateret kunstgalleri i København, skabt som et nyt projekt fra Kræss på Nørrebro. Vi arbejder med unika værker i form af plakater og keramik, udvalgt med fokus på æstetik, kvalitet og en stærk visuel identitet. Hos KÆNTT handler det ikke om at fylde vægge ud, men om at finde kunst, der faktisk betyder noget. Vi tror på, at de ting, du omgiver dig med, er med til at fortælle, hvem du er – og derfor skal de føles rigtige. Vi samarbejder med både upcoming og etablerede kunstnere, som alle har deres eget udtryk. Fælles for dem er, at de skaber noget, der skiller sig ud – og som ikke bare kan kopieres. KÆNTT er til dig, der går op i detaljen, og som gerne vil have noget i dit hjem, der ikke ligner alle andres. Et sted, hvor du kan opdage kunst, der føles personlig – og
            som du kan tage med dig videre.
          </h5>
        </div>

        <div className="w-full md:w-1/2 order-1 md:order-2">
          <img src="/images/LearnMore-hvem-er_img.jpg" alt="Hvem er" className="w-full h-full object-cover" />
        </div>
      </div>
      <div className="mt-20 mb-10 flex flex-col md:flex-row gap-6 items-stretch">
        <div className="w-full md:w-1/2">
          <img src="/images/Vision_img.jpg" alt="Vision" className="w-full h-full object-cover" />
        </div>
        <div className="w-full md:w-1/2">
          <div className="bg-(--primary-blue) h-1 w-26 mb-2"></div>
          <h3>Hvad er vores vision?</h3>
          <h5>
            KÆNTT er skabt med en vision om at bringe unika kunst tættere på en ny generation af kunstkøbere i København. Som et high-end galleri og et nyt projekt fra Kræss på Nørrebro, er ambitionen at skabe et kurateret univers, hvor kvalitet, æstetik og personlighed går hånd i hånd. Hos KÆNTT handler det ikke kun om at købe kunst, men om at finde værker, der kan leve med dig og være med til at definere dit rum. Galleriet præsenterer unika værker i form af plakater og keramik, nøje udvalgt fra både upcoming og etablerede kunstnere. Fælles for dem er en stærk visuel identitet og en evne til at skabe noget, der føles personligt og vedkommende. Visionen er at gøre kunst til en naturlig del af hverdagen – ikke som noget utilgængeligt, men som en integreret del af den måde, vi indretter og
            udtrykker os på.
          </h5>
        </div>
      </div>
    </div>
  );
};

export default LearnMoreSection;
