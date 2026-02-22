import {Link} from "react-router-dom"
function Hero() {
  return (
    <div className=" container border-bottom mb-5">
      <div className="row text-center p-5 p-4">
        <h1>Technology</h1>
        <h3  className="mt-3 fs-5 text-muted">Sleek, modern and intutive trading platforms</h3>
        <p className="mt-3 mb-5">
          check out our{" "}
          <Link to={"/"}>
            investment offering <i className="fa-solid fa-arrow-right-long"></i>
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Hero;
