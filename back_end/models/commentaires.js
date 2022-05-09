const mongoose = require("mongoose");
const commentaireSchema = new mongoose.Schema({
  description: String,
  ownerId: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
  profilId: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
  // fi ana profil ta3malil commentaire
});
module.exports = mongoose.model("commmentaire", commentaireSchema);
