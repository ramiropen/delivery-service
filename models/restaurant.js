// Import Mongoose
const mongoose = require("mongoose");

// restaurant Schema
const restaurantSchema = new Schema({
    name: { type: String, required: true },
    address: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    zip: { type: Number, required: true },
    cuisines: { type: String, required: true },
  });

  // Model
const Restaurant = mongoose.model("Restaurant", restaurantSchema);

// Exports
module.exports = Restaurant;
