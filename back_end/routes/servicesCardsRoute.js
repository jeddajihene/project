const express = require("express");

const users = require("../models/users");

const serviceCardRouter = express.Router();
//get photographers//
serviceCardRouter.get("/getphotographers", async (req, res) => {
  try {
    const photographers = await users.find(
      { speciality: "photographer" },
      { name: 1, avatar: 1, facebook: 1, instagram: 1 }
    );
    res.status(200).send(photographers);
  } catch (error) {
    res.status(500).send("could not get photographers");
  }
}); //get pastrys//
serviceCardRouter.get("/getpastrys", async (req, res) => {
  try {
    const pastrys = await users.find(
      { speciality: "pastry_chef" },
      { name: 1, avatar: 1, facebook: 1, instagram: 1 }
    );
    res.status(200).send(pastrys);
  } catch (error) {
    res.status(500).send("could not get pastrys");
  }
});

//get decorator//
serviceCardRouter.get("/getdecorator", async (req, res) => {
  try {
    const decorator = await users.find(
      { speciality: "decorator" },
      { name: 1, avatar: 1, facebook: 1, instagram: 1 }
    );
    res.status(200).send(decorator);
  } catch (error) {
    res.status(500).send("could not get decorator");
  }
});
//get animator//
serviceCardRouter.get("/getanimator", async (req, res) => {
  try {
    const animator = await users.find(
      { speciality: "animator" },
      { name: 1, avatar: 1, facebook: 1, instagram: 1 }
    );
    res.status(200).send(animator);
  } catch (error) {
    res.status(500).send("could not get animator");
  }
});

module.exports = serviceCardRouter;
