const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("✅ Successfully connected to MongoDB");
  } catch (error) {
    console.log( error);
    process.exit(1); // Exit the process if connection fails
  }
};

module.exports = connectDB;

