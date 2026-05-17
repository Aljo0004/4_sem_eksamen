const LearnMoreSection = () => {
  return (
    <div className=" pt-10">
      <div className="flex flex-col lg:flex-row lg:justify-between items-start">
        {/* Text column: stays above image on mobile, left on desktop */}
        <div className="order-2 w-full lg:w-480px lg:order-1">
          <div className="">
            <div className="bg-(--primary-blue) h-2 w-24 mb-2 mt-5"></div>
            <h2 className="t-h2 pb-5">Hvem er KÆNTT</h2>
            <p className="t-p lg:pr-45">
              KÆNTT er et kurateret kunstgalleri i København, skabt som et nyt projekt fra Kræss på Nørrebro. Vi arbejder med unika værker i form af plakater og keramik, udvalgt med fokus på æstetik, kvalitet og en stærk visuel identitet.
              <br />
              <br /> Hos KÆNTT handler det ikke om at fylde vægge ud, men om at finde kunst, der faktisk betyder noget. Vi tror på, at de ting, du omgiver dig med, er med til at fortælle, hvem du er – og derfor skal de føles rigtige.
              <br />
              <br /> Vi samarbejder med både upcoming og etablerede kunstnere, som alle har deres eget udtryk. Fælles for dem er, at de skaber noget, der skiller sig ud – og som ikke bare kan kopieres.
              <br />
              <br />
              KÆNTT er til dig, der går op i detaljen, og som gerne vil have noget i dit hjem, der ikke ligner alle andres. Et sted, hvor du kan opdage kunst, der føles personlig – og som du kan tage med dig videre.
            </p>
          </div>
        </div>

        <div className="w-full lg:w-1/2 lg:order-2 lg:flex">
          <img src="/images/LearnMore-hvem-er_img.jpg" alt="Learn more" className="" />
        </div>
      </div>

      <div className="flex flex-col pt-20 lg:flex-row items-start gap-8">
        {/* Text column: stays above image on mobile, left on desktop */}
        <div className="order-2 w-full lg:w-480px lg:order-2">
          <div className="">
            <div className="bg-(--primary-blue) h-2 w-24 mb-2 mt-5"></div>
            <h2 className="t-h2 pb-5">Hvad er vores vision?</h2>
            <p className="t-p lg:pr-45">
              KÆNTT er skabt med en vision om at bringe unika kunst tættere på en ny generation af kunstkøbere i København. Som et high-end galleri og et nyt projekt fra Kræss på Nørrebro, er ambitionen at skabe et kurateret univers, hvor kvalitet, æstetik og personlighed går hånd i hånd.<br></br>
              <br></br> Hos KÆNTT handler det ikke kun om at købe kunst, men om at finde værker, der kan leve med dig og være med til at definere dit rum. Galleriet præsenterer unika værker i form af plakater og keramik, nøje udvalgt fra både upcoming og etablerede kunstnere.<br></br>
              <br></br> Fælles for dem er en stærk visuel identitet og en evne til at skabe noget, der føles personligt og vedkommende. Visionen er at gøre kunst til en naturlig del af hverdagen – ikke som noget utilgængeligt, men som en integreret del af den måde, vi indretter og udtrykker os på.
            </p>
          </div>
        </div>

        {/* Image column: stays below text on mobile, moves to right on desktop */}
        <div className="w-full lg:w-1/2 lg:order-1">
          <img src="/images/Vision_img.jpg" alt="Learn more" className="w-full h-auto object-cover" />
        </div>
      </div>
    </div>
  );
};

export default LearnMoreSection;
