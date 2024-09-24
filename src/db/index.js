import { DB_NAME } from "../constant.js";
import mongoose from "mongoose";

const connnectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URL}/${DB_NAME}`
    );
    console.log(
      `MongoDB connected successfully with DB: ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.log("Error connecting to MongoDB ", error);
    process.exit(1);
  }
};

export default connnectDB;
