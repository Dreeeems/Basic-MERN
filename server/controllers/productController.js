// Whole item controller
const Product = require("../models/productModel");
const { sendMessage } = require("../ws/ws");

exports.getProducts = async (req, res) => {
  try {
    const products = await Product.find().sort({ date: -1 });
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

wsSendProducts = async (req, res) => {
  try {
    const products = await Product.find().sort({ date: -1 });
    const message = JSON.stringify(products);
    sendMessage(message);
  } catch (err) {
    console.log(err);
  }
};

exports.getProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: "Product not found" });
    res.json(product);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.addProduct = async (req, res) => {
  const { name, type, price, rating, warranty_years, available } = req.body;

  const newProduct = new Product({
    name,
    type,
    price,
    rating,
    warranty_years,
    available,
  });

  try {
    const product = await newProduct.save();
    res.status(201).json(product);
    wsSendProducts();
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.updateProduct = async (req, res) => {
  const newData = req.body;
  console.log(newData);
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: "Product not found" });
    console.log(newData);
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      newData,
      { new: true, runValidators: true }
    );
    res.json(updatedProduct);
    console.log(updatedProduct);
    wsSendProducts();
  } catch (err) {
    console.error("Error updating product:", err);
    res.status(500).json({ message: err.message });
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: "Product not found" });
    await product.deleteOne({ _id: req.params.id });
    res.json({ message: "Product removed" });
    wsSendProducts();
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
