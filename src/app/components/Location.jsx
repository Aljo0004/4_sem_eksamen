const Location = () => {
  return (
    <div className="card-body pt-10 pb-10">
      <div className="flex flex-col md:flex-row items-start gap-6">
        <img src="/images/Location_img.jpg" alt="kort" className="w-full md:w-1/2 object-cover order-2 md:order-1" />

        <div className="w-full md:w-1/2 order-1 md:order-2">
          <div className="bg-(--primary-blue) h-2 w-26 mb-2"></div>
          <h2 className="t-h2">Kom ned i galleriet</h2>
          <div className="grid grid-cols-2  pt-5 pb-2">
            <p className="t-p ">
              Vores adresse:
              <br />
              St. Kongensgade 3,
              <br />
              1264 København K
            </p>
            <p className="t-p ">
              Åbningstider:
              <br />
              Man-fre: 08:00 - 16:00
              <br />
              Lør-søn: 12:00 - 15:00
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;
