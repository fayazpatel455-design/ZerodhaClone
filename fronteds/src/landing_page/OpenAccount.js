import React from "react";

function OpenAccount() {
  return (
    <div className="container text-center  p-6 mb-5 ">
      <div className="row">
        <h1 className="mt-5">Open a Zerodha account</h1>
        <p>
          Modern platform and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.
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

export default OpenAccount;
