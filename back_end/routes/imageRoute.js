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
//get user images
imageRouter.get("/getimages", isAuth, async (req, res) => {
  try {
    const images = await image.find({ ownerId: req.user.id });
    res.status(200).send(images);
  } catch (error) {
    res.status(500).send({ msg: "could not get images" });
  }
});

//delete imgae
imageRouter.delete("/deleteimage/:id", isAuth, async (req, res) => {
  try {
    const deleteImage = await image.findById(req.params.id);
    const user = await users.findById(req.user.id);
    let arr = user.images;
    console.log(arr);
    user.images = [];
    console.log(user.images);
    user.images = arr.filter((el) => el != deleteImage.id);
    console.log("new", user.images);
    await user.save();
    await image.findByIdAndDelete(req.params.id);
    res.status(200).send(req.params.id);
  } catch (error) {
    res.status(500).send("image not deleted");
  }
});
module.exports = imageRouter;
