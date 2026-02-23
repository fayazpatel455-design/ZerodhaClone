import React, { useEffect, useState } from "react";
import axios from "axios";

const Orders = () => {

  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios
      .get("https://zerodhaclone-01-ei19.onrender.com/allOrders")
      .then((res) => {
        setOrders(res.data);
      });
  }, []);

  return (

    <div className="container-fluid mt-4 px-5">

      <h2 className="text-center mb-4">
        Orders History
      </h2>

      <table className="table table-bordered table-striped">

        <thead>

          <tr>
            <th>Name</th>
            <th>Qty</th>
            <th>Price</th>
            <th>Mode</th>
          </tr>

        </thead>

        <tbody>

          {orders.map((order, idx) => (

            <tr key={idx}>

              <td>{order.name}</td>

              <td>{order.qty}</td>

              <td>{order.price}</td>

              <td
                style={{
                  color:
                    order.mode === "BUY"
                      ? "green"
                      : "red",
                  fontWeight: "bold"
                }}
              >
                {order.mode}
              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>

  );

};

export default Orders;