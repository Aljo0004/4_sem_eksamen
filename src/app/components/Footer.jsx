import Link from "next/link";
import { FaTiktok, FaInstagram, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer sm:footer-horizontal bg-base-300 text-base-content p-10 bg-(--primary-blue)">
      {/* Nav grid */}

      <div className="w-full grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-8 items-start">
        <nav className="w-full">
          <h4 className="t-h4 footer-title">Adresse</h4>
          <p className="t-p">
            St. Kongensgade 3,<br></br>1264 København K
          </p>
        </nav>

        <nav className="w-full">
          <h4 className="t-h4 footer-title">Åbningstider</h4>
          <p className="t-p">
            Man-fre: 08:00 - 16:00 <br></br>Lørdag & søndag: 12:00 - 15:00
          </p>
        </nav>

        <nav className="w-full">
          <h4 className="t-h4 footer-title">Godt at vide</h4>
          <ul className="space-y-1">
            <li>
              <Link href="/" className="t-p link link-hover underline">
                Handelsbetingelser
              </Link>
            </li>
            <li>
              <Link href="/" className="t-p link link-hover underline">
                Cookie Informationer
              </Link>
            </li>
            <li>
              <Link href="/" className="t-p link link-hover underline">
                Persondatapolitik
              </Link>
            </li>
          </ul>
        </nav>

        <nav className="w-full">
          <h4 className="t-h4 footer-title">Kontakt</h4>
          <ul className="space-y-1">
            <li>
              <Link href="/" className="t-p link link-hover underline">
                Mail
              </Link>
            </li>
            <li>
              <Link href="/" className="t-p link link-hover underline">
                Galleri ansvarlig
              </Link>
            </li>
          </ul>
        </nav>

        <nav className="w-full">
          <h4 className="t-h4 footer-title">Nyhedsbrev</h4>
          <p className="t-p text-sm mt-3 leading-relaxed">
            Nyhedsbrevet er til dig, der gerne vil holde sig opdateret om Dansk kvindesamfunds events og nyheder.
            <br />
            Du kan til enhver tid framelde dig igen!
          </p>

          <div className="mt-3 flex flex-col gap-2">
            <input type="text" placeholder="Fuldt navn" className="input input-bordered w-full t-p" />
            <input type="email" placeholder="Email" className="input input-bordered w-full t-p" />
          </div>
        </nav>
      </div>

      <div className="w-full mt-6 flex flex-col items-center">
        <img src="/Images/logo.svg" alt="kaentt logo" className="h-20 object-contain mb-3" />
        <nav aria-label="Sociale medier" className="flex gap-6 items-center text-2xl mt-2">
          <a href="#" aria-label="TikTok" className="hover:opacity-80">
            <FaTiktok />
          </a>
          <a href="#" aria-label="Instagram" className="hover:opacity-80">
            <FaInstagram />
          </a>
          <a href="#" aria-label="Facebook" className="hover:opacity-80">
            <FaFacebook />
          </a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
