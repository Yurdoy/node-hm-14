import mongoose from "mongoose";
const MONGO_URI = process.env.MONGO_URI;
async function connectDb() {
  try {
    const connection = await mongoose.connect(MONGO_URI);
    console.log("MongoDb connected", connection.connection.host);
  } catch (error) {
    console.error(error);
    process.exit();
  }
}

export default connectDb;
