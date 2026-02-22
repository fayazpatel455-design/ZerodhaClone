import React, { useState,useContext } from "react";
import axios from "axios";
import GeneralContext from "./GeneralContext";
import "./BuyActionWindow.css";

const BuyActionWindow = ({ uid }) => {
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0);
  const { closeBuyWindow } = useContext(GeneralContext);


// const handleBuyClick = async () => {
//      axios.post("http://localhost:5000/newOrder", {
//       name: uid,
//       qty:stockQuantity,
//       price: stockPrice,
//       mode: "BUY",
//     });
//     closeBuyWindow();
//     // console.log('order done!');
// };
const handleBuyClick = async () => {
  try {
    await axios.post("https://zerodhaclone-01-ei19.onrender.com/allOrders", {
      name: uid,
      qty: stockQuantity,
      price: stockPrice,
      mode: "BUY",
    }, {withCredentials: true});

    closeBuyWindow(); // success ke baad close
  } catch (err) {
    console.error("Order failed:", err);
    // optional: alert("Order failed");
  }
};



  const handleCancelClick = () => {
    closeBuyWindow();
  };

  return (
    <div className="container" id="buy-window" draggable="true">
      <div className="regular-order">
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

      <div className="buttons">
        <span>Margin required ₹140.65</span>
        <div>
           <button className="btn btn-blue" onClick={handleBuyClick}>
            Buy
          </button>
          <button className="btn btn-grey" onClick={handleCancelClick}>
            Cancel
          </button>
        </div> 
       </div>
    </div>
  );
};

export default BuyActionWindow;
