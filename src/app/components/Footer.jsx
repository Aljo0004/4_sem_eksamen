import { FaTiktok } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer sm:footer-horizontal text-base-content p-10 font-(--font-montserrat) bg-[#B0B8FF]">
      <div className="w-full pb-6 mb-6">
        <div className="max-w-6xl mx-auto flex flex-col items-center justify-center gap-2">
          <img src="/images/logo.svg" alt="Logo" className="h-12 object-contain" />

          <div className="flex items-center gap-4 mt-2">
            <a href="#" aria-label="Facebook" className="hover:text-primary transition">
              <FaFacebook />
            </a>

            <a href="#" aria-label="Instagram" className="hover:text-primary transition">
              <FaInstagram />
            </a>

            <a href="#" aria-label="TikTok" className="hover:text-primary transition">
              <FaTiktok />
            </a>
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col md:flex-row md:gap-8 gap-6">
        <nav className="flex-1">
          <h6>Adresse -</h6>
          <p>St. Kongensgade 3, 1264 København K</p>
        </nav>

        <nav className="flex-1">
          <h6>Åbningstider - </h6>
          <p>
            Man-fre: 08:00 - 16:00 <br></br>Lørdag & søndag: 12:00 - 15:00
          </p>
        </nav>

        <nav className="flex-1">
          <h6>Nyhedsbrev -</h6>
          <p>
            Nyhedsbrevet er til dig, der gerne vil holde sig opdateret om Dansk kvindesamfunds events og nyheder. <br></br>
            <br></br> <b>Du kan til enhver tid framelde dig igen!</b>
          </p>
          <div className=" space-y-3">
            <fieldset className="fieldset w-full px-3 py-2 bg-white">
              <p>Fuldt navn</p>
              <input type="text" className="input input-sm w-full" placeholder="skriv her" />
            </fieldset>
            <fieldset className="fieldset w-full px-3 py-2 bg-white">
              <p>E-mail</p>
              <input type="text" className="input input-sm w-full" placeholder="Skriv her" />
            </fieldset>
          </div>
        </nav>

        <nav className="flex-1 flex flex-col gap-1">
          <h6>Godt at vide</h6>
          <a className="link link-hover text-[14px] underline">Handelsbetingelser</a>
          <a className="link link-hover text-[14px] underline">Cookie Informationer</a>
          <a className="link link-hover text-[14px] underline">Persondatapolitik</a>
        </nav>

        <nav className="flex-1 flex flex-col gap-1">
          <h6>Kontakt os</h6>
          <a className="link link-hover text-[14px] underline">Adresse</a>
          <a className="link link-hover text-[14px] underline">Mail</a>
          <a className="link link-hover text-[14px] underline">Galleri ansvarlig</a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
