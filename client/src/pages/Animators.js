import { Button } from "@mui/material";
import React, { useEffect } from "react";
import image1 from "../assets/images/image1.jpeg";
import "../styles/profilesPro.css";
import { useNavigate } from "react-router-dom";
import ProfileCard from "../Components/ProfileCard";
import { useDispatch, useSelector } from "react-redux";
import { getAnimatorAction } from "../redux/Actions/servicesCardsActions";
const Animators = () => {
  const servicesCardsReducer = useSelector(
    (state) => state.servicesCardsReducer
  );
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAnimatorAction());
  }, []);

  const handleWork = () => {
    navigate("/service/work");
  };
  return (
    <div style={{ paddingTop: 90 }}>
      <h1 className="title-page-proprofile">Animators</h1>
      <div className="profiles-pro-container">
        {/* photographers élla jaw mel reducer */}
        {servicesCardsReducer.animator?.map((el, i) => (
          // profil is a props//
          <ProfileCard profile={el} />
        ))}

        {/* <div className="box">
          <div className="imgBx">
            <img src={image1} />
          </div>
          <div className="content">
            <h1>jihene jedda </h1>
            <Button variant="contained" onClick={handleWork}>
              See profile
            </Button>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Animators;
