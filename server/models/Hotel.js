const mongoose = require("mongoose");

const hotelSchema = new mongoose.Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  description: String,
  price: Number,
  images: [String], // Array to store multiple image URLs
  createdAt: {
    type: Date,
    default: Date.now, // Set the default value to the current date
  },
});

module.exports = mongoose.model("Hotel", hotelSchema);
