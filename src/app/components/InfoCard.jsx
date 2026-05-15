const InfoCard = () => {
  return (
    <div className="bg-(--primary-blue) mb-10">
      <div className="mb-3 ml-5">
        <div className="bg-(--primary-blue) h-1 w-26 mb-2 mt-10"></div>
        <p className="">Om KÆNTT</p>
      </div>
      <div className="ml-5">
        <h3>Hvem er Kæntt?</h3>
        <h5>
          Lær historien bag galleriet, vores <br></br> mission og de kunstnere vi <br></br>samarbejder med.
        </h5>
        <a href="#" className="mt-3 inline-block underline hover:text-primary text-(--secondary-blue)">
          Læs mere →
        </a>
      </div>
      <div>
        <img src="/images/InfoCard_Img.jpg" alt="InfoCard Image" className="mt-6 w-full object-cover" />
      </div>
    </div>
  );
};

export default InfoCard;
