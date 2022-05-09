const mongoose = require("mongoose");
const OfferSchema = new mongoose.Schema({
  offerImage: String,
  offerTitle: String,
  offerDetails: String,
  offerPrice: Number,
  // offerExpires: Date,
  ownerId: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
});
module.exports = mongoose.model("offer", OfferSchema);
