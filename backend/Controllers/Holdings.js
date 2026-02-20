const HoldingModel = require("../Models/HoldingModel");
module.exports.getHoldings = async (req, res) => {
  try {
    let allHoldings = await HoldingModel.find({});
    res.send(allHoldings);
  } catch (err) {
    res.status(500).send("Error fetching holdings");
  }
};