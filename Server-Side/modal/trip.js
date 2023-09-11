const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const TripsSchema = new mongoose.Schema(
  {
    date: String,
    from: String,
    to: String,

    startTime: Number,
    EndTime: Number,
    category: String,
    SeatBooked: {
      type: Array,
    },
    animeties_list: {
      type: Array,
    },
    busFare: Number,
    busName: String,
    gender: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    mobileno: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
// creating collections
const TripModal = mongoose.model("Trips", TripsSchema);
module.exports = TripModal;