

const HeroPages = ({ title, description, imageUrl }) => {
  return (
    <section className="pb-8">
      <div className="ml-[50px] mr-[50px] max-sm:ml-[15px] max-sm:mr-[15px]">
        <h1 className="t-h1 uppercase max-w-6/7 ">{title}</h1>
        <p className="t-manchet max-w-4/5 max-sm:mt-4">{description}</p>
      </div>
      <img src={imageUrl} alt="Hero Image" className="mt-8 w-full p-0" />
    </section>
  );
};

export default HeroPages;
