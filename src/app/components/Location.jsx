const Location = () => {
  return (
    <div className="card-body pt-10 pb-10">
      <div className="flex flex-col md:flex-row items-start md:items-end gap-6">
        <img src="/images/Location_img.jpg" alt="kort" className="w-full md:w-1/2 object-cover" />

        <div className="w-full md:w-1/2">
          <h4 className="text-xl md:font-size: var(--fontsize-h3-desktop);">Kom ned i galleriet</h4>
          <div className="grid grid-cols-1 gap-2 pt-2 pb-2">
            <p>
              Vores adresse: <br></br> St. Kongensgade 3, <br></br> 1264 København K
            </p>
            <p>
              Åbningstider: <br></br> Man-fre: 08:00 - 16:00 <br></br> Lør-søn: 12:00 - 15:00
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;
