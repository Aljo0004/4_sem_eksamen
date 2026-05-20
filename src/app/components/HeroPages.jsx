import Image from "next/image";
import Headline from "./Headline";
import Link from "next/link";
import { FaTiktok } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const HeroPages = ({ title, description, imageUrl }) => {
  return (
    <section className="pb-8">
      <div className="ml-[50px] mr-[50px]">
        <h1 className="t-h1 uppercase max-w-5/7 ">{title}</h1>
        <p className="t-manchet max-w-3/5 ">{description}</p>
      </div>
      <img src={imageUrl} alt="Hero Image" className="mt-8 w-full p-0" />
    </section>
  );
};

export default HeroPages;
