const express = require("express");
const router = express.Router();
const {
  getProducts,
  getProduct,
  addProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/productController");

router.get("/products", getProducts);
router.get("/product/:id", getProduct);
router.post("/add", addProduct);
router.patch("/update/:id", updateProduct);
router.delete("/delete/:id", deleteProduct);

module.exports = router;
