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
  InputLabel
} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../redux/Actions/userActions";
import { useNavigate } from "react-router-dom";
import { removeUserErrorAction } from "../redux/Actions/userActions";
const SignIn = ({ signIn, setSignIn }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [signInForm, setSignInForm] = useState({
    email: "",
    password: ""
  });
  const [showPassword, setShowPassword] = useState(false);
  const handleChange = (e) => {
    setSignInForm({
      ...signInForm,
      [e.target.name]: e.target.value
    });
  };

  const handleClose = () => {
    setSignIn(false);
    dispatch(removeUserErrorAction());
  };
  const handleSubmit = () => {
    dispatch(loginUser(signInForm));
    setSignIn(false);
  };
  const userData = useSelector((state) => state.userReducer);
  return (
    <>
      <Modal open={signIn} onClose={handleClose}>
        <div className="signIn_card">
          <h1 className="signIn-title">Happy to see you again</h1>

          <div className="formulaire-SignIn">
            <div>
              <TextField
                id="standard-basic"
                label="Email"
                variant="standard"
                style={{ width: "100%" }}
                value={signInForm.email}
                onChange={handleChange}
                name="email"
              />
              {userData.errors?.filter((el) => el.msg === "put your email")
                .length !== 0 && (
                <p className="red-msg-error-register">*Put your email</p>
              )}
              {userData.errors?.filter(
                (el) => el.msg === "Please register before"
              ).length !== 0 && (
                <p className="red-msg-error-register">
                  *Please register before
                </p>
              )}
            </div>
            <div>
              <FormControl variant="standard" style={{ width: "100%" }}>
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
              {userData.errors?.filter((el) => el.msg === "enter your password")
                .length !== 0 && (
                <p className="red-msg-error-register">*Enter your password</p>
              )}
            </div>
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
