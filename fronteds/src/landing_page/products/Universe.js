function Universe() {
  return (
    <div className="container text-center">
      <div className="row">
        <h1>The Zerodha Universe</h1>
        <p className="p-3">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>

        <div className="col-4 p-3 mt-5" >
          <img src="media/images/smallcaseLogo.png" alt="Partner product 1" ></img>
          <p className="text-small text-muted mt-3">Thematic investment platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/images/streakLogo.png" alt="Partner product 2"  style={{width:"40%"}}></img>
          <p className="text-small text-muted mt-3">Thematic investment platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/images/sensibullLogo.svg" alt="Partner product 3"  style={{width:"80%"}}></img>
          <p className="text-small text-muted mt-3">Thematic investment platform</p>
        </div>
      </div>
      <div className="row">
         <div className="col-4 p-3 mt-5" >
          <img src="media/images/zerodhafundhouse.png" alt="Partner product 4"  style={{width:"35%"}}></img>
          <p className="text-small text-muted mt-3">Thematic investment platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/images/goldenpiLogo.png" alt="Partner product 5" ></img>
          <p className="text-small text-muted mt-3">Thematic investment platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/images/dittoLogo.png" alt="Partner product 6"  style={{width:"25%"}}></img>
          <p className="text-small text-muted mt-3">Thematic investment platform</p>
        </div>
          <button className="col-2 btn btn-primary fs-4  mx-auto my-5" type="button">
            Signup now
          </button>
      </div>
    </div>
  );
}

export default Universe;
