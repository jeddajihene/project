const express = require("express");
const contactRouter = express.Router();
require("dotenv").config();
const nodemailer = require("nodemailer");
const {
  contactUsValidation,
  validation
} = require("../middlewares/validation");

contactRouter.post("/", contactUsValidation, validation, (req, res) => {
  let output = `<p>You have a new contact request</p>
     <h4>Contact Details </h4>
     <ul>
      <li>Name: ${req.body.name}</li>
      <li>Email: ${req.body.email}</li>
      <li>Message: ${req.body.message}</li>
     </ul>`;

  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_EMAIL,
      pass: process.env.GMAIL_PASS
    },
    tls: {
      rejectUnauthorized: false //localhost
    }
  });

  let mailOptions = {
    from: "'Happy Birthday Contact Request'<happyBirthdayTransportor@gmail.com>",
    to: "happyBirthdayContactUs@gmail.com",
    text: "",
    subject: "Happy Birthday Contact Request",
    html: output
  };

  transporter.sendMail(mailOptions, (err, data) => {
    if (err) {
      console.log(err);
      return res.status(404).send({ errors: [{ msg: "Error" }] });
    } else {
      res.status(200).send({ msg: "Email is sended!" });
    }
  });
});

module.exports = contactRouter;
