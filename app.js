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

app.post("/products", async (req, res) => {
  const { name } = req.body;
  const existingCategory = await Product.findOne({ name });
  if (existingCategory) {
    return res.status(400).json({ error: "Category has already exist" });
  }

  const newCategory = await Category.create({
    name,
  });

  await newCategory.save();
});

connectDb();

app.listen(PORT, () => {
  console.log(`Server id running on http://localhost:${PORT}`);
});
