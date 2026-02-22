import {Link} from "react-router-dom"

function RightSection({imageURL, productName, productDescription, learnMore }) {
  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-6 mt-5 p-5">
          <h1 className="mt-5 p-5">{productName}</h1>
          <p>{productDescription}</p>
          <div>
            <Link to={learnMore} className="p-3">
              Lrean more <i className="fa-solid fa-arrow-right-long"></i>
            </Link>
          </div>
        </div>
        {/* <div className="col-2"></div> */}
        <div className="col-6">
          <img src={imageURL} alt="Product preview" ></img>
        </div>
      </div>
    </div>
  );
}

export default RightSection;
