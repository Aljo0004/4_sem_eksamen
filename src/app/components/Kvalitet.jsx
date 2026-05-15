const Kvalitet = () => {
  return (
    <div className="flex flex-col md:flex-row gap-6 items-stretch mb-10">
      <div className="w-full md:w-1/2 order-2 md:order-1">
        <div className="bg-(--primary-blue) h-1 w-26 mb-2"></div>
        <h3>Kvalitetssikring i hver detalje</h3>
        <h5>
          Vi arbejder tæt sammen med vores talentfulde kunstnere og printer deres værker på vores eksklusive Hahnemühle Matte Art Paper 210 g/m². Hvert enkelt print bliver omhyggeligt håndteret. Vi kan garantere, at du modtager et produkt af højeste kvalitet, samtidig med at vi undgår behovet for at opretholde store lagerbeholdninger. Vi mener, at kvalitet over kvantitet er vejen frem, og vi undgår masseproduktion for at bevare hvert kunstværks unikke karakter. Vi printer alle ordrer efter behov på bestilling. Dette sikrer, at vi kun producerer det, der reelt bestilles, hvilket reducerer spild og giver en mere miljøvenlig tilgang til produktionen. Unikke kunstværker kræver omhu, når de skabes. Vi printer, snitter, indrammer, montere hver dag med ønsket om du får lige det værk, du ønsker
          dig.
        </h5>
      </div>

      <div className="w-full md:w-1/2 order-1 md:order-2">
        <img src="/images/Learn-More-kvalitet_img.jpg" alt="Hvem er" className="w-full h-full object-cover" />
      </div>
    </div>
  );
};

export default Kvalitet;
