const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MySchema = new Schema({
  name: {
    type: String,
    required: "Enter your name",
  },
  Created_date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Names = mongoose.model("Names", MySchema);
