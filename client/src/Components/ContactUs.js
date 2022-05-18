import React, { useState, useEffect } from "react";
import { TextField, Button, Alert } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  contactUsAction,
  removeErrorAction
} from "../redux/Actions/contactUsAtions";

const ContactUs = () => {
  const contactUsReducer = useSelector((state) => state.contactUsReducer);
  const dispatch = useDispatch();
  const [contactUs, setContactUs] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const handleSendEmail = () => {
    dispatch(contactUsAction(contactUs));
  };
  const handleChange = (e) => {
    setContactUs({
      ...contactUs,
      [e.target.name]: e.target.value
    });
  };
  useEffect(() => {
    if (contactUsReducer?.success_contactUs_msg) {
      setShowSuccessAlert(true);
      setContactUs({
        name: "",
        email: "",
        message: ""
      });
    }
  }, [contactUsReducer.success_contactUs_msg]);
  return (
    <div className="contact-container">
      <div className="contact-card">
        <h1 className="contact-title">Contact Us</h1>
        <form className="formulaire" noValidate autoComplete="off">
          <div style={{ width: "100%" }}>
            <TextField
              id="standard-basic"
              label="Full name"
              variant="standard"
              style={{ width: "100%" }}
              value={contactUs.name}
              onChange={handleChange}
              name="name"
            />
            {contactUsReducer.errors.filter(
              (el) => el.msg === "please add your full name"
            ).length !== 0 && (
              <p className="red-msg-error-register">
                *please add your full name
              </p>
            )}
          </div>
          <div style={{ width: "100%" }}>
            <TextField
              id="standard-basic"
              label="Email"
              variant="standard"
              style={{ width: "100%" }}
              value={contactUs.email}
              onChange={handleChange}
              name="email"
            />
            {contactUsReducer.errors.filter(
              (el) => el.msg === "please add a valid email"
            ).length !== 0 && (
              <p className="red-msg-error-register">
                *please add a valid email
              </p>
            )}
          </div>
          <div style={{ width: "100%" }}>
            <TextField
              id="standard-basic"
              label="Your message"
              variant="standard"
              multiline
              rows={5}
              style={{ width: "100%" }}
              value={contactUs.message}
              onChange={handleChange}
              name="message"
            />
            {contactUsReducer.errors.filter(
              (el) => el.msg === "please add your message"
            ).length !== 0 && (
              <p className="red-msg-error-register">*please add your message</p>
            )}
          </div>

          <Button
            variant="contained"
            className="contact-button"
            onClick={handleSendEmail}
          >
            Send
          </Button>
          {showSuccessAlert && (
            <>
              <Alert
                severity="success"
                onClose={() => {
                  setShowSuccessAlert(false);
                }}
              >
                {contactUsReducer?.success_contactUs_msg}
              </Alert>
            </>
          )}
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
