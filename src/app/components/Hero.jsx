import Image from "next/image";
import Headline from "./Headline";
import Link from "next/link";
import { FaTiktok } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const Hero = () => {
    return (
      <section className="">
        <div>
          <h1 className="uppercase leading-28 ">kæntt - kunst der skiller sig ud</h1>
          <h6 className="tracking-wider font-light">
            Opdag unika værker fra nøje udvalgte kunstnere - <br /> og oplev dem helt tæt på i galleriet
          </h6>
          <Link href="/productlist" className="--border-width-sm mt-8 inline-block  bg-[var(--secondary-blue)] px-6 py-3 text-sm uppercase text-[var(--primary-color)] transition-colors duration-300 ease-out hover:scale-105 transition-transform">
            Udforsk Værker
          </Link>
        </div>
        <div>
          <h6 className="tracking-wider font-light">
            Find os på sociale medier:
            <div className="flex space-x-4 mt-2">
              <FaFacebook className="" />
              <FaInstagram className="" />
              <FaTiktok className="" />
            </div>
          </h6>
        </div>
      </section>
    );
}
 
export default Hero;