// Import Mongoose
const mongoose = require("mongoose");

// Schema Constructor
const { Schema } = mongoose;


// Schema
const userSchema = new Schema({
    name: { type: String, required: true },
    hasGluten: Boolean,
    image: { type: String, default: "http://placehold.it/500x500.png" },
    baker: {
      type: Schema.Types.ObjectID,
    //   ref: "Baker",
    },
  });

  // Model
const User = mongoose.model("User", userSchema);

// Exports
module.exports = User;
