import Image from "next/image";

const HeroPages = ({ title, description, imageUrl }) => {
  return (
    <section className="pb-8">
      <div className="ml-[50px] mr-[50px] max-sm:ml-[15px] max-sm:mr-[15px]">
        <h1 className="t-h1 uppercase max-w-6/7 ">{title}</h1>
        <p className="t-manchet max-w-4/5 max-sm:mt-4">{description}</p>
      </div>
      <Image src={imageUrl} alt="Hero Image" className="mt-8 w-[100%] p-0 object-cover" width={1920} height={1080} priority/>
    </section>
  );
};

export default HeroPages;
