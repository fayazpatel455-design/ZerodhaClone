function Hero() {
  return (
    <div className="container text-center  p-5 mb-5 ">
      <div className="row">
        <img
          src="Media/images/homeHero.png"
          alt="Hero Image"
          className="mb-5"
        />
        <h1 className="mt-5">Invest in everything</h1>
        <p>
          Online platform to invest in stocks ,derivatives,mutual funds, and
          more
        </p>
       <div className="d-grid  col-2 mx-auto">
          <button className="btn btn-primary fs-4 " type="button">
            Signup now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
