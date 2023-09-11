// this will give the bus details like based on the rating, amenities,busnane,category
// to access the data routes shoud be same we are seding diffrent type of re.body from user
const Bus = require("../modal/bus");
// this is the helper function for getting the  datails of the bus based on the rating

const getbusRating = async (req, res, Rating) => {
  // console.log(Rating);
  try {
    let findbus = await Bus.find({ Rating: Rating });
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

// this is the helper function of get the details of bus based on name
const getbusName = async (req, res, BusName) => {
  // console.log(BusName);
  try {
    let findbus = await Bus.find({ BusName: BusName });
    if (findbus.length > 0) {
      res.status(200).send(findbus);
      //   console.log(findbus);
    } else {
      res.status(404).send("No buses found with this name");
    }
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
};
// this will give th bus details based on the from and to and days run
const getbusDetailsbyfromto = async (req, res, From, To, DaysRunOn) => {
  try {
    let findbus = await Bus.find({ From: From, To: To, DaysRunOn: DaysRunOn });
    if (findbus.length > 0) {
      res.status(200).send(findbus);
      //   console.log(findbus);
    } else {
      res.status(404).send("No buses found with this data");
    }
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
};
// this is the main function
const getbusdetails = async (req, res) => {
  const { Rating, BusName, From, To, DaysRunOn } = req.body;
  if (Rating) {
    await getbusRating(req, res, Rating);
  }
  if (BusName) {
    await getbusName(req, res, BusName);
  }
  if ((From, To, DaysRunOn)) {
    await getbusDetailsbyfromto(req, res, From, To, DaysRunOn);
  }
};

module.exports = getbusdetails;