const Kvalitet = () => {
  return (
    <div className=" pt-10 pb-10">
      <div className="flex flex-col lg:flex-row lg:justify-between items-start">
        {/* Text column: stays above image on mobile, left on desktop */}
        <div className="order-2 w-full lg:w-480px lg:order-1 pb-10">
          <div className="">
            <div className="bg-(--primary-blue) h-2 w-24 mb-2 mt-5 lg:mt-0"></div>
            <h2 className="t-h2 pb-5">Kvalitetssikring i hver detalje</h2>
            <p className="t-p lg:pr-45">
              Vi arbejder tæt sammen med vores talentfulde kunstnere og printer deres værker på vores eksklusive Hahnemühle Matte Art Paper 210 g/m². Hvert enkelt print bliver omhyggeligt håndteret. Vi kan garantere, at du modtager et produkt af højeste kvalitet, samtidig med at vi undgår behovet for at opretholde store lagerbeholdninger. <br></br>
              <br></br> Vi mener, at kvalitet over kvantitet er vejen frem, og vi undgår masseproduktion for at bevare hvert kunstværks unikke karakter. Vi printer alle ordrer efter behov på bestilling. Dette sikrer, at vi kun producerer det, der reelt bestilles, hvilket reducerer spild og giver en mere miljøvenlig tilgang til produktionen. <br></br>
              <br></br>Unikke kunstværker kræver omhu, når de skabes. Vi printer, snitter, indrammer, montere hver dag med ønsket om du får lige det værk, du ønsker dig.
            </p>
          </div>
        </div>

        <div className="w-full lg:w-1/2 lg:order-2 lg:flex">
          <img src="/Images/Learn-More-kvalitet_img.jpg" alt="Learn more" className="" />
        </div>
      </div>
    </div>
  );
};

export default Kvalitet;
