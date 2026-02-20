import React from "react";

function Hero() {
  return (
    <section className="container-fluid  " id="supportHero">
      <div id="supportWrapper">
        <h4 className="mt-3">Support Portal</h4>
        <a href="" className="fs-5 text-light text-decoration-underline ">
          Track Tickets
        </a>
      </div>
      <div className="row mx-5 p-4 ms-6" >
        <div className="col p-5 ms-5"  style={{lineHeight:"2.5"}}>
          <h1 className="fs-3 " style={{lineHeight:"1.5"}}>Search for an answer or browse help topics to create a ticket</h1>
          <input placeholder="Eg: how do i activate F&O, why is my order getting rejected.." className="p-3 fs-6  my-3" style={{width:"85%", borderRadius:"15px" ,border:"none"}}></input>
          <br></br>

          <a href="" className="text-light text-decoration-underline ">
            Track account opening
          </a>&nbsp;&nbsp;&nbsp;&nbsp;
          <a href="" className="text-light text-decoration-underline ">
            Track segment activation
          </a>&nbsp;&nbsp;&nbsp;&nbsp;
          <a href="" className="text-light text-decoration-underline ">
            intraday  margins.
          </a><br></br>
          <a href="" className="text-light text-decoration-underline ">
            Kite user manual
          </a>
        </div>
        <div className="col p-5" style={{lineHeight:"2.5"}}>
          <h1 className="fs-3" >Featured</h1>
          <ol>
            <li>
              <a href="" className="text-light text-decoration-underline ">
                Current Takeovers and Delistng - January 2024
              </a>
            </li>
            <li>
              <a href="" className="text-light text-decoration-underline">
                Latest intraday leverages - MIS & CO
              </a>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Hero;
