const mongoose = require("mongoose");

const connectionDB = async () => {
  try {
    mongoose.connect(process.env.DB_URL).then(() => {
      console.log("connected to db");
    });
  } catch (error) {
    console.error("Error connecting to database: ", error);
  }
};

module.exports = connectionDB;
