const express = require("express");
const { isAuth } = require("../middlewares/auth");
const users = require("../models/users");
const offer = require("../models/offer");
const { upload } = require("../middlewares/upload");
const offerRouter = express.Router();
//add offer
offerRouter.post(
  "/addoffer",
  isAuth,
  upload.single("offerImage"),
  async (req, res) => {
    let path =
      req.protocol +
      "://" +
      req.hostname +
      ":" +
      5000 +
      "/images/" +
      req.file.filename;
    try {
      const myBody = JSON.parse(req.body.addOffer);
      const newOffer = new offer({
        ...myBody,
        ownerId: req.user._id,
        offerImage: path
      });
      await newOffer.save();
      console.log(newOffer.offerImage);
      const user = await users.findById(req.user.id);
      user.offers.push(newOffer._id);
      await user.save();
      res.status(200).send({ msg: "Offer is added", newOffer });
    } catch (error) {
      res.status(500).send({ msg: "could not add offer" });
    }
  }
);
//get user offers
offerRouter.get("/getoffers", isAuth, async (req, res) => {
  try {
    const offers = await offer.find({ ownerId: req.user.id });
    res.status(200).send(offers);
  } catch (error) {
    res.status(500).send({ msg: "could not get offers" });
  }
});
//get one offer
offerRouter.get("/getoneoffer/:id", isAuth, async (req, res) => {
  try {
    const oneOffer = await offer.findById(req.params.id);
    res.status(200).send({ msg: "one offer is found", oneOffer });
  } catch (error) {
    res.status(500).send("one offer not found");
  }
});
//update offer
offerRouter.put("/updateoffer/:id", isAuth, async (req, res) => {
  try {
    const updateOffer = await offer.findByIdAndUpdate(req.params.id, {
      // $set: { ...req.body },
    });
    updateOffer = { ...req.body };
    await updateOffer.save();
    res.status(200).send({ msg: "offer is upadated", updateOffer });
  } catch (error) {
    res.status(500).send("offer not updated");
  }
});
//delete offer
offerRouter.delete("/deleteoffer/:id", isAuth, async (req, res) => {
  try {
    const deleteOffer = await offer.findById(req.params.id);
    const user = await users.findById(req.user.id);
    let arr = user.offers;
    console.log(arr);
    user.offers = [];
    console.log(user.offers);
    user.offers = arr.filter((el) => el != deleteOffer.id);
    console.log("new", user.offers);
    await user.save();
    await offer.findByIdAndDelete(req.params.id);
    res.status(200).send(req.params.id);
  } catch (error) {
    res.status(500).send("offer not deleted");
  }
});

module.exports = offerRouter;
