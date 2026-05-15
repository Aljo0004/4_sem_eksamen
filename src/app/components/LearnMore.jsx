const LearnMore = () => {
  return (
    <section className="learn-more mt-5">
      <div className="card-body grid md:grid-cols-3 gap-6">
        <div className="order-2 lg:order-1 md:col-span-2">
          <img src="/images/Learn-More_img.jpg" alt="Learn more" className="w-full object-cover" />
        </div>
        <div className="order-1 md:order-2">
          <div className="mb-3">
            <div className="bg-(--primary-blue) h-2 w-26 mb-2"></div>
            <p className="">Kunstnere</p>
          </div>
          <h3 className="lg:!text-6xl lg:mb-5">Lær mere om kunstnerne bag værkerne</h3>
          <h5 className="mt-2 lg:!text-2xl max-w-[26ch] lg:mb-5">Få mere information om de aktuelle kunstnere bag de værker du finder hos Kæntt.</h5>
          <a href="#" className="mt-3 inline-block underline hover:text-primary text-(--secondary-blue)">
            Læs mere
          </a>
        </div>
      </div>
    </section>
  );
};

export default LearnMore;
