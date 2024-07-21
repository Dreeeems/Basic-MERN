/*Mongo Model for item
name : String
type : String
Price : Number
Rating : Number
Warranty_years : Number
available : Boolean
*/

const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter a name"],
  },

  type: {
    type: String,
    required: [true, "Please enter a type"],
  },

  price: {
    type: Number,
    required: [true, "Please enter a price"],
  },

  rating: {
    type: Number,
    required: [true, "Please enter a rating"],
    min: [0, "Rating must be at least 0"],
    max: [5, "Rating must be at most 5"],
  },

  warranty_years: {
    type: Number,
    required: [true, "Please enter a warranty year"],
  },

  available: {
    type: Boolean,
    required: [true, "The value needs to be true or false"],
    default: true,
  },
});

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;
