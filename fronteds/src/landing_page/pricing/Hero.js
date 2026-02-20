import React from "react";

function Hero() {
  return (
    <div className="container">
      <div className="row p-5 my-5 text-center border-bottom">
        <h1>Pricing</h1>
        <p className="mt-4 text-muted"> Free equity investments and flat ₹20 traday and F&O trades</p>
      </div>
      <div className="row p-5 my-5 text-center ">
        <div className="col p-4 ">
            <img src="media/images/pricingEquity.svg"></img>
            <h2>Free equity delivery</h2>
            <p className="text-muted mt-4"> All equity delivery investments (NSE, BSE), are absolutely free — ₹
            0 brokerage.</p>
        </div>
          <div className="col p-4 ">
            <img src="media/images/intradayTrades.svg"></img>
            <h2>Intraday and F&O trades</h2>
            <p className="text-muted mt-3">Flat Rs. 20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades.</p>
        </div>
          <div className="col p-4">
            <img src="media/images/pricingEquity.svg"></img>
            <h2>Free direct MF</h2>
            <p  className="text-muted mt-4">All direct mutual fund investments are absolutely free — ₹ 0
            commissions & DP charges.</p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
