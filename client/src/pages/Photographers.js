import React, { useEffect } from "react";
import "../styles/profilesPro.css";
import { useNavigate } from "react-router-dom";
import ProfileCard from "../Components/ProfileCard";
import { useDispatch, useSelector } from "react-redux";
import { getPhotographerAction } from "../redux/Actions/servicesCardsActions";

const Photographers = () => {
  const servicesCardsReducer = useSelector(
    (state) => state.servicesCardsReducer
  );
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPhotographerAction());
  }, []);
  const handleWork = () => {
    navigate("/service/work");
  };
  return (
    <div style={{ paddingTop: 90 }}>
      <h1 className="title-page-proprofile">Photographers</h1>
      <div className="profiles-pro-container">
        {/* photographers élla jaw mel reducer */}
        {servicesCardsReducer.ourPhotographers?.map((el, i) => (
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

export default Photographers;
