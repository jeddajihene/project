import { Button } from "@mui/material";
import React from "react";
import image1 from "../assets/images/image1.jpeg";
import "../styles/profilesPro.css";
import { useNavigate } from "react-router-dom";

const ProfilesPro = () => {
  const navigate = useNavigate();

  const handleWork = () => {
    navigate("/service/work");
  };
  return (
    <div style={{ paddingTop: 70 }}>
      <h1 className="title-page-proprofile">ProfilesPro</h1>
      <div className="container">
        <div className="box">
          <div className="imgBx">
            <img src={image1} />
          </div>
          <div className="content">
            <h1>jihene jedda </h1>
            <Button variant="contained" onClick={handleWork}>
              See profile
            </Button>
          </div>
        </div>
        <div className="box">
          <div className="imgBx">
            <img src={image1} />
          </div>
          <div className="content">
            <h1>jihene jedda </h1>
            <Button variant="contained" onClick={handleWork}>
              See profile
            </Button>
          </div>
        </div>
        <div className="box">
          <div className="imgBx">
            <img src={image1} />
          </div>
          <div className="content">
            <h1>jihene jedda </h1>
            <Button variant="contained" onClick={handleWork}>
              See profile
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilesPro;
