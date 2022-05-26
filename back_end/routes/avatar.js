const express = require("express");
const res = require("express/lib/response");
const { isAuth } = require("../middlewares/auth");
const { upload } = require("../middlewares/upload");
const users = require("../models/users");
const avatar = require("../routes/avatar");

const avatarRouter = express.Router();
//add avatar
avatarRouter.post(
  "/addavatar",
  isAuth,
  upload.single("avatar"),
  async (req, res) => {
    console.log(req.file);
    let path =
      req.protocol +
      "://" +
      req.hostname +
      ":" +
      5000 +
      "/images/" +
      req.file.filename;
    try {
      const user = await users.findById(req.user.id);
      user.avatar = path;
      await user.save();
      console.log("avatar", user.avatar);
      res.status(200).send({ msg: "Avatar is updated", user });
    } catch (error) {
      res.status(500).send("could not add avatar");
    }
  }
);
module.exports = avatarRouter;
