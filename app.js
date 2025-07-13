import express from "express";
import "dotenv/config.js";
import connectDb from "./src/config.js";
import { connect } from "mongoose";

const app = express();
app.use(express.json());
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.json({ message: "This is Node.js Home work 14" });
});

app.listen(PORT, () => {
  console.log(`Server id running on http://localhost:${PORT}`);
});
