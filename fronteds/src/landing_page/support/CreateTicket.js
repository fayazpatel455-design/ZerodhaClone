import {Link} from "react-router-dom"
function CreateTicket() {
  return (
    <div className="container">
      <div className="row">
         <h1 className="my-4 fs-2">
          To create a ticket, select a relevant topic
        </h1>
        <div className="col-4 mt-4 mb-4 p-4" style={{ lineHeight: "2.5" }}>
          <h4 className=" mb-5 fw-normal">
            <i class="fa fa-plus-circle" aria-hidden="true"></i> Account Opening
          </h4>
          <Link to={"/"}>Online Account Opening</Link>
          <br></br>
          <Link to={"/"}>Offline Account Opening</Link>
          <br></br>
          <Link to={"/"}> Company, Partnership and HUF Account Opening</Link>
          <br></br>
          <Link to={"/"}>NRI Account Opening</Link>
          <br></br>
          <Link to={"/"}>Charges at Zerodha</Link>
          <br></br>
          <Link to={"/"}> Zerodha IDFC FIRST Bank 3-in-1 Account</Link>
          <br></br>
          <Link to={"/"}>Getting Started</Link>
        </div>
        <div className="col-4 mt-4 mb-4 p-4" style={{ lineHeight: "2.5" }}>
          <h4 className="mb-5 fw-normal">
            <i class="fa-solid fa-user"></i> Your Zerodha Account
          </h4>
          <Link to={"/"}>Login Credentials</Link>
          <br></br>
          <Link to={"/"}>Account Modification and Segment addition</Link>
          <br></br>
          <Link to={"/"}>DP DI and bank details</Link>
          <br></br>
          <Link to={"/"}>Your Profile</Link>
          <br></br>
          <Link to={"/"}>Transfer and conversion of shares</Link>
          <Link to={"/"}></Link>
        </div>
        <div className="col-4 mt-4 mb-4 p-4" style={{ lineHeight: "2.5" }}>
          <h4 className="mb-5 fw-normal">
            <i class="fa-solid fa-chart-column"></i> Your Zerodha Account
          </h4>
          <Link to={"/"}>Kite Web and Mobile</Link>
          <br></br>
          <Link to={"/"}>Trading FAQs</Link>
          <br></br>
          <Link to={"/"}>Margin Trading Facility (MTF) and Margins</Link>
          <br></br>
          <Link to={"/"}>Corporate Action</Link>
          <br></br>
          <Link to={"/"}>Sentinel</Link>
          <br></br>
          <Link to={"/"}>Kite API</Link>
          <br></br>
          <Link to={"/"}>Pi and other platform</Link>
          <br></br>
          <Link to={"/"}>Stockerports+</Link>
          <br></br>
          <Link to={"/"}>GTT</Link>
          <br></br>
        </div>
        <div className="col-4 mt-4 mb-4 p-4" style={{ lineHeight: "2.5" }}>
          <h4 className="mb-5 fs-3 fw-normal"><i class="fa-regular fa-credit-card"></i> Funds</h4>
          <Link to={"/"}>Adding Funds</Link>
          <br></br>
          <Link to={"/"}>Fund Withdrawal</Link>
          <br></br>
          <Link to={"/"}>eMandates</Link>
          <br></br>
          <Link to={"/"}>Adding Bank Accounts</Link>
        </div>
        <div className="col-4  mt-4 mb-4 p-4" style={{ lineHeight: "2.5" }}>
          <h4 className="mb-5 fs-3 fw-normal"><i class="fa-solid fa-circle-notch"></i> Console</h4>
          <Link to={"/"}>Reports</Link>
          <br></br>
          <Link to={"/"}>Ledger</Link>
          <br></br>
          <Link to={"/"}>Portfolio</Link>
          <br></br>
          <Link to={"/"}>60 Day Challenge</Link>
          <br></br>
          <Link to={"/"}>IPO</Link>
          <br></br>
          <Link to={"/"}>Referral Program</Link>
        </div>
        <div className="col-4 mt-4 mb-4 p-4" style={{ lineHeight: "2.5" }}>
          <h4 className="mb-5 fs-3 fw-normal"><i class="fa-regular fa-circle"></i> Coin</h4>
          <Link to={"/"}>Understanding Mutual Funds</Link>
          <br></br>
          <Link to={"/"}>About Coin</Link>
          <br></br>
          <Link to={"/"}>Buying and Selling through Coin</Link>
          <br></br>
          <Link to={"/"}>Starting an SIP</Link>
          <br></br>
          <Link to={"/"}>Managing your Portfolio</Link>
          <br></br>
          <Link to={"/"}>Coin App</Link>
          <br></br>
          <Link to={"/"}>Moving to Coin</Link>
          <br></br>
          <Link to={"/"}>Government Securities</Link>
        </div>
        </div>
    </div>
  );
}

export default CreateTicket;
