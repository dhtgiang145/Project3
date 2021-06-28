const mongoose = require("mongoose");

const ReviewSchema = new mongoose.Schema({
  _id: String,
 name: String,
 item: String,
 content: String,
});

module.exports = mongoose.model("Review", ReviewSchema);
