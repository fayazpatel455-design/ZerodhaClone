import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googleplay,
  appStore,
}) {
  return (
    <div className="container mt-5">
      <div className="row ">
        <div className="col-6 ">
          <img src={imageURL}></img>
        </div>
        {/* <div className="col-3"></div> */}
        <div className="col-6 p-5 mt-5">
          <h1>{productName}</h1>
          <p>{productDescription}</p>
          <div className="mt-3">
            <a href={tryDemo} className="p-3">
              Try Demo <i className="fa-solid fa-arrow-right-long"></i>
            </a>
            <a href={learnMore} className="p-3">
              Lrean more <i className="fa-solid fa-arrow-right-long"></i>
            </a>
          </div>
          <div className="mt-3">
            <a href={googleplay}  className="p-3">
              <img src="media/images/googlePlayBadge.svg"></img>
            </a>
            <a href={appStore}  className="p-3" >
              <img src="media/images/appStoreBadge.svg"></img>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
