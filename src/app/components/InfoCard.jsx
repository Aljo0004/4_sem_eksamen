const InfoCard = ({ title, subtitle, description, imageUrl, link }) => {
  return (
    <div className="bg-(--primary-blue) mb-10 md:flex md:items-stretch mt-10">
      <div className="flex-1 p-5 md:p-6">
        <div className="bg-(--primary-blue) h-1 w-26 mb-3 mt-4 md:mt-3"></div>
        <p className="t-card mb-2">{subtitle}</p>

        <h2 className="t-h2 mb-2">{title}</h2>

        <p className="t-p mb-3">{description}</p>
        <a href={link} className="underline text-primary text-(--secondary-blue)">
          Læs mere →
        </a>
      </div>

      <div className="md:w-1/2">
        <img src={imageUrl} alt="InfoCard Image" className="h-full w-full object-cover" />
      </div>
    </div>
  );
};

export default InfoCard;
