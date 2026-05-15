const LearnMore = () => {
  return (
    <section className="learn-more">
      <div className="card-body">
        <div className="mb-3">
          <div className="bg-(--primary-blue) h-1 w-26 mb-2 mt-10"></div>
          <p className="">Kunstnere</p>
        </div>

        <h3>
          Lær mere om <br></br>kunstnerne bag<br></br> værkerne
        </h3>
        <h5 className="mt-2">
          Få mere information om de aktuelle kunstnere bag de værker du finder<br></br> hos Kæntt.
        </h5>

        <a href="#" className="mt-3 inline-block underline hover:text-primary text-(--secondary-blue)">
          Læs mere
        </a>

        <img src="/images/Learn-More_img.jpg" alt="Learn more" className="mt-6 w-full object-cover" />
      </div>
    </section>
  );
};

export default LearnMore;
