const express = require("express");
const users = require("../models/users");

const profileRouter = express.Router();
//get user profile
profileRouter.get("/getProfile/:id", async (req, res) => {
  try {
    const profile = await users
      .findById(req.params.id)
      .populate("offers")
      .populate("images");
    res.status(200).send(profile);
  } catch (error) {
    res.status(500).send("could not profile");
  }
});

module.exports = profileRouter;
