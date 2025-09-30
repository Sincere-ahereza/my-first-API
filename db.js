const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const connectionString = "mongodb+srv://aherezamatthan_db_user:28M1udLlxYAhXGSJ@cluster0.zbwygrl.mongodb.net/";
    
    await mongoose.connect(connectionString, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("✅ Successfully connected to MongoDB");
  } catch (error) {
    console.log(error);
    process.exit(1); // Optional: exit the process if connection fails
  }
};

module.exports = connectDB;

