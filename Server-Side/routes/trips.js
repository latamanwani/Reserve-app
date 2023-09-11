const express = require("express");
const app = express();
const router = express.Router();
// controllers
const {
  addtrip,
  getTrip,
  busdetails,
  getTripsdetials,
} = require("../controllers/trips");
const allbusdetails = require("../controllers/allbus");
const getbusdetails = require("../controllers/bus");
// creating a routes
router.get("/gettrips", getTrip);
router.get("/allbus", allbusdetails);
router.get("/getTripsdetails", getTripsdetials); // gives us trip deatials based on different fields such as date,name from and to
router.post("/getbusdetail", getbusdetails); // it gives the bus detials based on name, rating
router.post("/trips", addtrip); // this will add new trips or ticket in the databse
router.post("/busdetails", busdetails);

module.exports = router;