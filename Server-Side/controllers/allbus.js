const Bus = require("../modal/bus");
// this is the helper function for getting the  datails of the bus based on the rating

const getbusRating = async (req, res, Rating) => {
  // console.log(Rating);
  try {
    let findbus = await Bus.find({});
    if (findbus.length > 0) {
      //   console.log(findbus);
      res.status(200).send(findbus);
    } else {
      res.status(404).send("No bus found based on this rating");
      //   console.log("Not found");
    }
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
};
module.exports = getbusRating;