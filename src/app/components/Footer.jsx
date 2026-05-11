const Footer = () => {
  return (
    <footer className="footer sm:footer-horizontal bg-base-300 text-base-content p-10 font-(--font-montserrat)">
      {/* Top: logo + social icons */}
      <div className="w-full border-b border-base-200 pb-6 mb-6">
        <div className="max-w-6xl mx-auto flex flex-col items-center justify-center gap-2">
          <img src="/logo.png" alt="Logo" className="h-12 object-contain" />

          <div className="flex items-center gap-4 mt-2">
            <a href="#" aria-label="Facebook" className="hover:text-primary transition">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
              </svg>
            </a>

            <a href="#" aria-label="Instagram" className="hover:text-primary transition">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.07 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1 1 12.324 0 6.162 6.162 0 0 1-12.324 0zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm4.965-10.322a1.44 1.44 0 1 1 2.881.001 1.44 1.44 0 0 1-2.881-.001z" />
              </svg>
            </a>

            <a href="#" aria-label="TikTok" className="hover:text-primary transition">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
                <path d="M16.5 3h2.5v2.5c0 2.5 1.5 4 4 4v2c-2.5 0-4-1.5-4-4v-3h-2.5V3zM9 8.5c0 3.5 2.5 6.1 6 6.5v2.5c-4.5-.5-8-4-8-9V8.5h2z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col md:flex-row md:gap-8 gap-6">
        <nav className="flex-1">
          <h6 className="footer-title text-[18px]">Adresse -</h6>
          <p className="text-[14px]">St. Kongensgade 3, 1264 København K</p>
        </nav>

        <nav className="flex-1">
          <h6 className="footer-title text-[18px]">Åbningstider - </h6>
          <p className="text-[14px]">
            Man-fre: 08:00 - 16:00 <br></br>Lørdag & søndag: 12:00 - 15:00
          </p>
        </nav>

        <nav className="flex-1">
          <h6 className="footer-title text-[18px]">Nyhedsbrev -</h6>
          <p className="text-[14px]">
            Nyhedsbrevet er til dig, der gerne vil holde sig opdateret om Dansk kvindesamfunds events og nyheder. <br></br>
            <br></br> <b>Du kan til enhver tid framelde dig igen!</b>
          </p>
          <div className="mt-4 space-y-3">
            <fieldset className="fieldset w-full border border-base-200 rounded-lg px-3 py-2">
              <legend className="fieldset-legend text-[12px]">Fuldt navn</legend>
              <input type="text" className="input input-sm w-full" placeholder="skriv her" />
            </fieldset>
            <fieldset className="fieldset w-full border border-base-200 rounded-lg px-3 py-2">
              <legend className="fieldset-legend text-[12px]">E-mail</legend>
              <input type="text" className="input input-sm w-full" placeholder="Skriv her" />
            </fieldset>
          </div>
        </nav>

        <nav className="flex-1 flex flex-col gap-1">
          <h6 className="footer-title text-[18px]">Godt at vide</h6>
          <a className="link link-hover text-[14px] underline">Handelsbetingelser</a>
          <a className="link link-hover text-[14px] underline">Cookie Informationer</a>
          <a className="link link-hover text-[14px] underline">Persondatapolitik</a>
        </nav>

        <nav className="flex-1 flex flex-col gap-1">
          <h6 className="footer-title text-[18px]">Kontakt os</h6>
          <a className="link link-hover text-[14px] underline">Adresse</a>
          <a className="link link-hover text-[14px] underline">Mail</a>
          <a className="link link-hover text-[14px] underline">Galleri ansvarlig</a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
