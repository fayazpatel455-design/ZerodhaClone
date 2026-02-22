import React, { useEffect, useState } from "react";
import axios from "axios";
const Orders = () => {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    axios.get("https://zerodhaclone-01-ei19.onrender.com/allOrders").then((res) => {
      // console.log(res.data);
      setOrders(res.data);
    });
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col-6 ">
          <h3>BUY Orders</h3>
          <table className=".order-table">
            <thead >
              <tr >
                <th >Name</th>
                <th>Qty</th>
                <th>Price</th>
                <th>Mode</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order, idx) => {
                return(
                   order.mode === "BUY"?
                    <tr key={idx} >
                      <td>{order.name}</td>
                      <td>{order.qty}</td>
                      <td>{order.price}</td>
                      <td>{order.mode}</td>
                    </tr>
                  :"")
                }
                )
               
              }
            </tbody>
          </table>
        </div>
        <div className="col-6">
          <h3>SELL Orders</h3>
          <table className=".order-table">
            <thead>
              <tr >
                <th>Name</th>
                <th>Qty</th>
                <th>Price</th>
                <th>Mode</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order, idx) => {
                 return(
                  order.mode === "SELL"?
                   (
                    <tr key={idx} >
                      <td>{order.name}</td>
                      <td>{order.qty}</td>
                      <td>{order.price}</td>
                      <td>{order.mode}</td>
                    </tr>
                  ):"")
                }
                 )
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
export default Orders;
