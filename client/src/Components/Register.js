import React, { useState, useEffect } from "react";
import "./Navbar/Navbar.css";
import {
  FormControlLabel,
  FormControl,
  FormLabel,
  RadioGroup,
  Radio,
  TextField,
  Modal,
  Button,
  Select,
  InputLabel,
  MenuItem,
  InputAdornment,
  IconButton,
  Input,
} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useDispatch } from "react-redux";
import { registerUser } from "../redux/Actions/userActions";
import { useNavigate } from "react-router-dom";

const Register = ({ register, setRegister }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [registerForm, setRegisterForm] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    category: "",
    speciality: "",
    avatar: "https://img.icons8.com/officel/80/000000/user.png",
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setRegisterForm({
      ...registerForm,
      [e.target.name]: e.target.value,
    });
  };
  const handleClose = () => {
    setRegister(false);
  };
  const handleSubmit = () => {
    dispatch(registerUser(registerForm, navigate));
    handleClose();
  };
  return (
    <>
      <Modal open={register} onClose={handleClose}>
        <div className="register_card">
          <h1 className="register-title">Tell us more about you</h1>
          <div className="formulaire-register">
            <TextField
              id="standard-basic"
              label="Full name"
              variant="standard"
              style={{ width: "100%" }}
              value={registerForm.name}
              onChange={handleChange}
              name="name"
            />
            <p className="msg-error-register">*must contain only letters</p>

            <FormControl className="register_radio_buttons">
              <p className="register_radio_buttons_label">Category:</p>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
                value={registerForm.category}
                onChange={handleChange}
                name="category"
                style={{ flexWrap: "nowrap" }}
              >
                <FormControlLabel
                  value="customer"
                  control={<Radio />}
                  label="Customer"
                />
                <FormControlLabel
                  value="professional"
                  control={<Radio />}
                  label="Professional"
                />
              </RadioGroup>
            </FormControl>
            {registerForm.category === "professional" && (
              <FormControl
                variant="standard"
                sx={{ m: 1, Width: "100%", marginLeft: 0, marginRight: 0 }}
              >
                <InputLabel id="demo-simple-select-standard-label">
                  Speciality
                </InputLabel>
                <Select
                  labelId="demo-simple-select-standard-label"
                  id="demo-simple-select-standard"
                  value={registerForm.speciality}
                  onChange={handleChange}
                  name="speciality"
                  label="speciality"
                >
                  <MenuItem value={"photographer"}>Photographer</MenuItem>
                  <MenuItem value={"animator"}>Animator</MenuItem>
                  <MenuItem value={"decorator"}>Decorator</MenuItem>
                  <MenuItem value={"pastry_chef"}>Pastry chef</MenuItem>
                </Select>
              </FormControl>
            )}

            <TextField
              id="standard-basic"
              label="Email"
              variant="standard"
              style={{ width: "100%" }}
              value={registerForm.email}
              onChange={handleChange}
              name="email"
            />
            <p className="msg-error-register"> *please enter a valid email</p>
            <TextField
              id="standard-basic"
              label="Phone"
              variant="standard"
              style={{ width: "100%" }}
              value={registerForm.phone}
              onChange={handleChange}
              name="phone"
            />
            <p className="msg-error-register">
              *please enter a valid phone number
            </p>
            <FormControl variant="standard">
              <InputLabel htmlFor="standard-adornment-password">
                Password
              </InputLabel>
              <Input
                id="standard-adornment-password"
                type={showPassword ? "text" : "password"}
                style={{ width: "100%" }}
                value={registerForm.password}
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
            <p className="msg-error-register">
              *must contain at least 6 characters
            </p>
          </div>
          <div className="register_buttons_container">
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
              Done
            </Button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Register;
