const mongoose = require("mongoose");
const shortid = require("shortid");

const MenuSchema = new mongoose.Schema({
  _id: { type: String, default: shortid.generate },
  title: String,
  image: {type: String, require: false},
  desc: String,
  chefid: {type: Number, require: false},
  price: Number,
  ratings: {type: Number, require: false},
  value: Number,
  ordered: {type: Number, require: false},
});

module.exports = mongoose.model("Menu", MenuSchema);
