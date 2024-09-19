
import dotenv from "dotenv";
import connnectDB from "./db/index.js";

dotenv.config({
  path: "./.env",
});


connnectDB();


/*import DB_NAME from "./constant";
import express from "express";
const app = express();

// Connect to MongoDB
(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    app.on((Error) => {
      console.log("Error: ", Error);
      throw Error;
    });

    app.listen(process.env.PORT, () => {
      console.log(`App is lisning on Port ${process.env.PORT}`);
    });
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
})();
*/
