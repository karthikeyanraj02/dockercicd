import mongoose from "mongoose";
import * as dotenv from "dotenv";
dotenv.config();

async function connectDB() {
  try {
    await mongoose.connect(process.env.DB_URI as string);
    console.log("Database connected");
  } catch (error) {
    console.log("Database connection error", error);
  }
}

export default connectDB;
