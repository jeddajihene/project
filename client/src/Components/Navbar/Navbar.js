import React, { useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import Avatar from "@mui/material/Avatar";
import Chip from "@mui/material/Chip";
import "./Navbar.css";
import Register from "../Register";
import SignIn from "../SignIn";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../assets/icons/logo.png";
import { useSelector, useDispatch } from "react-redux";
import { logOutAction } from "../../redux/Actions/userActions";
import { getProfileAction } from "../../redux/Actions/profileActions";
const NavbarC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [signIn, setSignIn] = useState(false);
  const handleSignIn = () => {
    setSignIn(true);
  };
  const [register, setRegister] = useState(false);
  const handleregister = () => {
    setRegister(true);
  };
  const handleClick = (id) => {
    navigate(`/service/profile/${id}`);
  };

  const handleLogOut = () => {
    dispatch(logOutAction());
    navigate("/");
  };
  const userReducer = useSelector((state) => state.userReducer);
  return (
    <>
      <Navbar variant="dark" className="nav_bar">
        <Container>
          <Nav className="me-auto">
            <div className="nav-bar-left">
              <img src={Logo} alt="" style={{ width: 80, marginTop: 10 }} />
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/service">
                Services
              </Nav.Link>
            </div>
            {localStorage.getItem("token") || userReducer.auth ? (
              <div className="nav-bar-right">
                <Chip
                  className="avatar-chip"
                  onClick={() => handleClick(userReducer.user?._id)}
                  avatar={<Avatar alt="User" src={userReducer.user?.avatar} />}
                  label={userReducer.user?.name}
                  variant="outlined"
                />
                <Nav.Link as={Link} to="edit-profile">
                  Edit profile
                </Nav.Link>
                <Nav.Link onClick={handleLogOut}>LogOut</Nav.Link>
              </div>
            ) : (
              <div className="nav-bar-right">
                <Nav.Link onClick={handleregister}>Register</Nav.Link>
                <Nav.Link onClick={handleSignIn}>Sign In</Nav.Link>
                {/* <Nav.Link as={Link} to="/edit-profile">
                Profile
              </Nav.Link> */}
              </div>
            )}
          </Nav>
        </Container>
      </Navbar>
      {register && <Register register={register} setRegister={setRegister} />}
      {signIn && <SignIn signIn={signIn} setSignIn={setSignIn} />}
    </>
  );
};

export default NavbarC;
