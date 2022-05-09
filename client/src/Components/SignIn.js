import React, { useState } from "react";
import "./Navbar/Navbar.css";
import {
  TextField,
  Modal,
  Button,
  InputAdornment,
  IconButton,
  FormControl,
  Input,
  InputLabel,
} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useDispatch } from "react-redux";
import { loginUser } from "../redux/Actions/userActions";
import { useNavigate } from "react-router-dom";

const SignIn = ({ signIn, setSignIn }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [signInForm, setSignInForm] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const handleChange = (e) => {
    setSignInForm({
      ...signInForm,
      [e.target.name]: e.target.value,
    });
  };

  const handleClose = () => {
    setSignIn(false);
  };
  const handleSubmit = () => {
    dispatch(loginUser(signInForm));
    handleClose();
  };
  return (
    <>
      <Modal open={signIn} onClose={handleClose}>
        <div className="signIn_card">
          <h1 className="signIn-title">Happy to see you again</h1>
          <div className="formulaire-SignIn">
            <TextField
              id="standard-basic"
              label="Email"
              variant="standard"
              style={{ width: "100%" }}
              value={signInForm.email}
              onChange={handleChange}
              name="email"
            />
            <FormControl variant="standard">
              <InputLabel htmlFor="standard-adornment-password">
                Password
              </InputLabel>
              <Input
                id="standard-adornment-password"
                type={showPassword ? "text" : "password"}
                style={{ width: "100%" }}
                value={signInForm.password}
                onChange={handleChange}
                name="password"
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <VisibilityIcon />
                      ) : (
                        <VisibilityOffIcon />
                      )}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
          </div>
          <div className="SignIn_buttons_container">
            <Button
              variant="contained"
              className="contact-button"
              onClick={handleClose}
            >
              cancel
            </Button>
            <Button
              variant="contained"
              className="contact-button"
              onClick={handleSubmit}
            >
              okay !
            </Button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default SignIn;
