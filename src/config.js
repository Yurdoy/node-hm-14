import mongoose from "mongoose";
const MONGO_URI = process.env.MONGO_URI;
async function connectDb() {
  try {
  } catch (error) {
    console.error(error);
    process.exit();
  }
}

export default connectDb;
