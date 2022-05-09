import React from "react";
import { TextField, Button } from "@mui/material";

const ContactUs = () => {
  return (
    <div className="contact-container">
      <div className="contact-card">
        <h1 className="contact-title">Contact Us</h1>
        <form className="formulaire" noValidate autoComplete="off">
          <TextField
            id="standard-basic"
            label="Full name"
            variant="standard"
            style={{ width: "100%" }}
          />
          <TextField
            id="standard-basic"
            label="Email"
            variant="standard"
            style={{ width: "100%" }}
          />
          <TextField
            id="standard-basic"
            label="Your message"
            variant="standard"
            multiline
            rows={5}
            style={{ width: "100%" }}
          />

          <Button variant="contained" className="contact-button">
            Send
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
