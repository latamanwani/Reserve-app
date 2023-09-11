const mongoose = require("mongoose");

const StateSchema = new mongoose.Schema(
  {
    state: {
      type: String,
      trim: true,
    },

    districts: {
      type: Array,
    },
  },
  { timestamps: true }
);

// Creating collection using the model
const StateModal = mongoose.model("State_district", StateSchema);
module.exports = StateModal;