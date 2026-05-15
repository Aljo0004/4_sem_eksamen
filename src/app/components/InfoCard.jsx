const InfoCard = () => {
  return (
    <div className="bg-(--primary-blue) mb-10 md:flex md:items-stretch mt-10">
      <div className="flex-1 p-5 md:p-6">
        <div className="bg-(--primary-blue) h-1 w-26 mb-3 mt-4 md:mt-3"></div>
        <p className="text-sm mb-2">Om KÆNTT</p>
        <h3 className="text-lg md:text-sm mb-2 lg:!text-3xl">Hvem er Kæntt?</h3>
        <h5 className="text-sm mb-3 leading-snug lg:!text-lg lg:pb-10">Lær historien bag galleriet, vores mission og de kunstnere vi samarbejder med..</h5>
        <a href="#" className="underline text-primary text-(--secondary-blue)">
          Læs mere →
        </a>
      </div>

      <div className="md:w-1/2">
        <img src="/images/InfoCard_Img.jpg" alt="InfoCard Image" className="h-full w-full object-cover" />
      </div>
    </div>
  );
};

export default InfoCard;
