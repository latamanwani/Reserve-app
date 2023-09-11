const express = require("express");
const app = express();
const Trip = require("../modal/trip");

const addtrip = async (req, res) => {
  try {
    const addedTrips = await Trip.insertMany(req.body); // Insert multiple trips
    res.status(200).send(addedTrips); // Sending back the array of inserted trips
  } catch (error) {
    console.error(error);
    res.status(400).send("Failed to add trips");
  }
};
// this is the post api which will return the bus name and fare based on the req.body
const busdetails = async (req, res) => {
  const { destination } = req.body;
  try {
    const getbus = await Trip.find({
      from: destination[0],
      to: destination[1],
    });
    // Insert multiple trips
    if (getbus) {
      res.status(200).send(getbus); // Sending back the array of inserted trips
    } else {
      res.status(404).send("No bus found for this tirp");
    }
  } catch (error) {
    console.error(error);
    res.status(400).send("Failed to find bus");
  }
};
// creating a route which will give the trips detailstaht limit to 50 only
const getTrip = async (req, res) => {
  try {
    // here it will send only50 trip at once
    let Findtrip = await Trip.find({}).limit(50);
    res.status(200).send(Findtrip);
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
};

//HELPER function
const getTripdate = async (req, res, date) => {
  try {
    let findDate = await Trip.find({ date: date });
    if (findDate.length > 0) {
      res.status(200).json(findDate);
      // console.log(findDate);
    } else {
      res.status(404).json("Trip not found on this date");
    }
  } catch (error) {
    res.status(400).send(error);
    console.log(error);
  }
};
// helper function for from and to
const getTripdestination = async (req, res, destination) => {
  // console.log(destination);
  try {
    // note here destination is an array which has from and to..
    const Tripdestiantion = await Trip.find({
      from: destination[0],
      to: destination[1],
    });
    if (Tripdestiantion.length > 0) {
      console.log(Tripdestiantion);
      res.status(200).send(Tripdestiantion);
    } else {
      res.status(404).send("Sorry no buses found for this route");
    }
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
};

// HELPER FUNCTION this will give the trips details based on category
const getTripCategory = async (req, res, category) => {
  try {
    let TripCategory = await Trip.find({ category: category });
    if (TripCategory.length > 0) {
      // console.log(TripCategory);
      res.status(200).send(TripCategory);
    } else {
      res.status(404).send("No Buses found with given category");
    }
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
};
// HELPER FUNCTION to get the bus name
const getTripBusname = async (req, res, busName) => {
  // console.log(busName);
  try {
    let TripBus = await Trip.find({ busName: busName });
    if (TripBus.length > 0) {
      // console.log(TripBus);
      res.status(200).send(TripBus);
    } else {
      res.status(404).send("No Buses found with given Name");
    }
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
};
//  HELPER FUNCTION WHICH WILL GIVE THE BUS DETAILS BASED ON THE AMENITES LIST
const getTripAmenities = async (req, res, animeties_list) => {
  try {
    let TripAmenities = await Trip.find({ animeties_list: animeties_list });
    if (TripAmenities.length > 0) {
      // console.log(TripAmenities);
      res.status(200).send(TripAmenities);
    } else {
      res.status(404).send("No Buses found with this Animeties");
    }
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
};

// this functionis giving the details based on the user input in
const getTripsdetials = async (req, res) => {
  const { date, destination, category, busName, animeties_list } = req.body;
  if (date) {
    await getTripdate(res, res, date);
  }
  if (destination) {
    await getTripdestination(req, res, destination);
  }
  if (category) {
    await getTripCategory(req, res, category);
  }
  if (busName) {
    await getTripBusname(req, res, busName);
  }
  if (animeties_list) {
    await getTripAmenities(req, res, animeties_list);
  }
};
module.exports = { getTrip, addtrip, getTripsdetials, busdetails };