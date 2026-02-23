import {Link} from "react-router-dom"
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
          <img src={imageURL} alt="" ></img>
        </div>
        {/* <div className="col-3"></div> */}
        <div className="col-6 p-5 mt-5">
          <h1>{productName}</h1>
          <p>{productDescription}</p>
          <div className="mt-3">
            <Link to={tryDemo} className="p-3">
              Try Demo <i className="fa-solid fa-arrow-right-long"></i>
            </Link>
            <Link to={learnMore} className="p-3">
              Lrean more <i className="fa-solid fa-arrow-right-long"></i>
            </Link>
          </div>
          <div className="mt-3">
            <Link to={googleplay}  className="p-3">
              <img src="media/images/googlePlayBadge.svg" alt="Product interface preview"></img>
            </Link>
            <Link to={appStore}  className="p-3" >
              <img src="media/images/appStoreBadge.svg" alt="Product interface preview"></img>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
