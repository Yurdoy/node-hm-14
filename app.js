import express from "express";
import "dotenv/config.js";
import connectDb from "./src/config.js";
import { connect } from "mongoose";
import { Category } from "./src/models/category.js";
import { Product } from "./src/models/product.js";

const app = express();
app.use(express.json());
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.json({ message: "This is Node.js Home work 14" });
});

connectDb();

app.listen(PORT, () => {
  console.log(`Server id running on http://localhost:${PORT}`);
});
