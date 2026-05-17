import Image from "next/image";
import Headline from "./Headline";
import Link from "next/link";
import { FaTiktok } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const Hero = () => {
    return (
      <section className="pb-8">
        <div className="flex flex-row ml-[50px] mr-[50px]">
          <div>
            <h1 className="t-h1 uppercase max-w-[75%] ">kæntt - kunst der skiller sig ud</h1>
            <h6 className="t-manchet">
              Opdag unika værker fra nøje udvalgte kunstnere - <br /> og oplev dem helt tæt på i galleriet
            </h6>
            <Link href="/productlist" className="--border-width-sm mt-8 inline-block  bg-[var(--secondary-blue)] px-6 py-3 text-sm uppercase text-[var(--primary-color)] transition-colors duration-300 ease-out hover:scale-105 transition-transform">
              Udforsk Værker
            </Link>
          </div>
          <div className="place-self-end">
            <h6 className="tracking-wider text-right font-light t-p">
              Find os på <br /> sociale medier:
              <div className="flex space-x-4 place-content-end gap-3.5 mt-4">
                <FaFacebook size={25} className="" />
                <FaInstagram size={25} className="" />
                <FaTiktok size={25} className="" />
              </div>
            </h6>
            <div className="bg-(--primary-blue) h-3 w-36 ml-24 mt-6"></div>
          </div>
        </div>
        <img src="/Images/Events_Hero_img.jpg" alt="Hero Image" className="mt-8 w-full p-0"/>
      </section>
    );
}
 
export default Hero;