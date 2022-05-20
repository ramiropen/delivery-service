// Import Mongoose
const mongoose = require("mongoose");

// Schema Constructor
const { Schema } = mongoose;


// restaurant Schema
const restaurantSchema = new Schema({
    name: { type: String, required: true },
    hasGluten: Boolean,
    image: { type: String, default: "http://placehold.it/500x500.png" },
    baker: {
      type: Schema.Types.ObjectID,
    },
  });

  // Model
const Restaurant = mongoose.model("Restaurant", restaurantSchema);

// Exports
module.exports = Restaurant;
