// Import Mongoose
const mongoose = require("mongoose");

// Schema Constructor
const { Schema } = mongoose;

// Schema
const menuSchema = new Schema({
  name: { type: String, required: true },
  address: { type: String, required: true },
  city: { type: String, default: "https://loremflickr.com/286/180/food" },
  state: { type: String, required: true },
  zip:{ type: Number, required: true }
});

// helper methods
// breadSchema.methods.getBakedBy = function () {
//   return `${this.name} was baked with love by ${
//     this.baker.name
//   }, who has been with us since ${this.baker.startDate.getFullYear()}`;
// };

// Model
const Menu = mongoose.model("Menu", menuSchema);

// Exports
module.exports = Menu;
