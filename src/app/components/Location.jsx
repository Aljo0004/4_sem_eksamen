const Location = () => {
  return (
    <div className="ml-5">
      <div className="card-body">
        <h4 className="--fontsize-h4-mobil font-lighter">Kom ned i galleriet</h4>
        <div className="grid grid-cols-2 md:grid-cols-2 gap-2 font-bold">
          <p>Vores adresse: St. Kongensgade 3, 1264 København K</p>
          <p>Åbningstider: Man-fre: 08:00 - 16:00 Lør-søn: 12:00 - 15:00</p>
        </div>
        <img src="/images/Location_img.jpg" alt="kort" />
      </div>
    </div>
  );
};

export default Location;
