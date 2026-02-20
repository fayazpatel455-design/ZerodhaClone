import React, { useState, useContext } from "react";
import axios from "axios";
import GeneralContext from "./GeneralContext";
import "./BuyActionWindow.css";

const SellActionWindow = ({ uid }) => {
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0);
  const { closeSellWindow } = useContext(GeneralContext);

  const handleSellClick = async () => {
    // console.log("UID 👉", uid);

    axios.post("http://localhost:5000/allOrders", {
      name: uid,
      qty: stockQuantity,
      price: stockPrice,
      mode: "SELL",
    });
    closeSellWindow();
    console.log("order  sell done!");
  };
  const handleCancelClick = () => {
    closeSellWindow();
  };

  return (
    <div className="container" id="buy-window" draggable="true">
      <div
        className="regular-order"
        style={{ backgroundColor: " rgb(250, 118, 78)" }}
      >
        <div className="inputs">
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              name="qty"
              id="qty"
              onChange={(e) => setStockQuantity(Number(e.target.value))}
              value={stockQuantity}
            />
          </fieldset>
          <fieldset>
            <legend>Price</legend>
            <input
              type="number"
              name="price"
              id="price"
              step="0.05"
              onChange={(e) => setStockPrice(Number(e.target.value))}
              value={stockPrice}
            />
          </fieldset>
        </div>
      </div>

      <div
        className="buttons"
        style={{ display: "flex ", justifyContent: "center" }}
      >
        <div>
          <button className="btn btn-blue" onClick={handleSellClick}>
            Sell
          </button>
          &nbsp;&nbsp;&nbsp;
          <button className="btn btn-grey" onClick={handleCancelClick}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default SellActionWindow;
