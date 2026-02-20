import React from "react";

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
          <img src="media/images/smallcaseLogo.png"></img>
          <p className="text-small text-muted mt-3">Thematic investment platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/images/streakLogo.png" style={{width:"40%"}}></img>
          <p className="text-small text-muted mt-3">Thematic investment platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/images/sensibullLogo.svg" style={{width:"80%"}}></img>
          <p className="text-small text-muted mt-3">Thematic investment platform</p>
        </div>
      </div>
      <div className="row">
         <div className="col-4 p-3 mt-5" >
          <img src="media/images/zerodhafundhouse.png" style={{width:"35%"}}></img>
          <p className="text-small text-muted mt-3">Thematic investment platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/images/goldenpiLogo.png"></img>
          <p className="text-small text-muted mt-3">Thematic investment platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/images/dittoLogo.png" style={{width:"25%"}}></img>
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
