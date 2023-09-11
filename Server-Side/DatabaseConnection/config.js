const mongoose = require("mongoose");
// const data = require("../data/busdata");

const Bus = require("../modal/bus");
const DatabaseConnection = async () => {
  try {
    let connection = await mongoose.connect(process.env.DatabaseUri, {
      UseNewUrlParser: true,
      useUnifiedTopology: true,
      // note//
      // UseNewUrlParser:ture  //When this option is enabled, it tells the MongoDB driver to use the new URL parser when connecting to the MongoDB server.
      // useUnifiedTopology: true, when we use this we  are instructing the MongoDB driver to use the unified topology engine for managing connections to the MongoDB server.
    });

    console.log("Database connected Sucessfully");
  } catch (error) {
    console.log(error);
  }
};
module.exports = DatabaseConnection;