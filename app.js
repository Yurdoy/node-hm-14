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

app.get("/products", async (req, res) => {
  try {
    const products = await Product.find({}).populate("category");
    res.status(200).json({ message: "Products received", products });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
});

app.post("/products", async (req, res) => {
  try {
    const { name, price, category } = req.body;
    const existingProduct = await Product.findOne({ name });
    if (existingProduct) {
      return res.status(400).json({ error: "Product has already exist" });
    }

    const newProduct = await Product.create({
      name,
      price,
      category,
    });

    await newProduct.save();
    res.status(201).json({ message: "Product was successfully created" });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
});

app.post("/categories", async (req, res) => {
  try {
    const { name } = req.body;
    const existingCategory = await Category.findOne({ name });
    if (existingCategory) {
      return res.status(400).json({ error: "Category has already exist" });
    }

    const newCategory = await Category.create({ name });
    res.status(201).json({ message: "Category was successfully created" });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
});

connectDb();

app.listen(PORT, () => {
  console.log(`Server id running on http://localhost:${PORT}`);
});
