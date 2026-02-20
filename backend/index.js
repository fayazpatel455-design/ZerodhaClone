if (process.env.NODE_ENV != "production") {
  require("dotenv").config();
}
// console.log(process.env.SECRET);

const express = require("express");
const app = express();

app.use(express.json());       
app.use(express.urlencoded({ extended: true }));

const cors=require("cors");
app.use(cors({
  // origin: ["http://localhost:3000", "http://localhost:3001"],
  origin:true,
  credentials: true
}));

//signup
const cookieParser = require("cookie-parser");
app.use(cookieParser());


const mongoose = require("mongoose");

const url = process.env.MONGO_URL;
mongoose
  .connect(url)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("Mongo error:", err.message));


const finnhub = require("finnhub").default;

// const {dataRoute} = require("./Routes/dataRoute");
// app.use("/data", dataRoute);


const authRoute = require("./Routes/AuthRoute");
app.use("/", authRoute);

const holdingsRoute =require("./Routes/Holdings");
app.use("/allHoldings",holdingsRoute);

const postionRoute=require("./Routes/Position");
app.use("/allPosition",postionRoute);


const OrderRoute=require("./Routes/Orders");
app.use("/allOrders",OrderRoute);

// const marketRoute = require("./Routes/MarketRoute");
// app.use("/api/stocks", marketRoute);

const port = process.env.PORT || 5000;
app.listen(port, (req, res) => {
  console.log(port, "is listing.");
});

// app.get("/",(req, res) => {
//  res.send("Done!")
// })