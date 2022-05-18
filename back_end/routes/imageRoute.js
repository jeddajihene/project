const express = require("express");
const res = require("express/lib/response");
const { isAuth } = require("../middlewares/auth");
const { upload } = require("../middlewares/upload");
const image = require("../models/image");
const users = require("../models/users");

const imageRouter = express.Router();
//add image
imageRouter.post(
  "/addimage",
  isAuth,
  upload.array("gallery", 12),
  async (req, res) => {
    try {
      const arr = [];
      req.files.forEach((el) => {
        el.path =
          req.protocol +
          "://" +
          req.hostname +
          ":" +
          5000 +
          "/images/" +
          el.filename;
        const newImage = new image({
          imageName: el.path,
          ownerId: req.user.id
        });
        newImage.save();
        arr.push(newImage._id);
      });
      const user = await users.findById(req.user.id);
      user.images = [...user.images, ...arr];
      await user.save();
      res.status(200).send({ msg: "Images is added" });
    } catch (error) {
      res.status(500).send("could not add image");
      console.log(error);
    }
  }
);
module.exports = imageRouter;
