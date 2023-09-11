const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const BusSchema = new mongoose.Schema(
  {
    BusName: {
      type: String,
      required: true,
    },
    Rating: {
      type: String,
      required: true,
    },
    From: {
      type: String,
      required: true,
    },
    To: {
      type: String,
      required: true,
    },
    FromTime: {
      type: String,
      required: true,
    },
    ToTime: {
      type: String,
      required: true,
    },
    DaysRunOn: {
      type: Array,
      required: true,
    },
    TimeInterval: {
      type: String,
      required: true,
    },
    seatsUpper: {
      type: Object,
      required: true,
    },
    seatsLower: {
      type: Object,
      required: true,
    },
    category: String,
    totalSeats: Number,

    animeties_list: {
      type: Array,
    },
  },
  { timestamps: true }
);
// creating collections
const BusModal = mongoose.model("Bus_owner", BusSchema);
module.exports = BusModal;