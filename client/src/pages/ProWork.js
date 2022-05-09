import React from "react";
import image1 from "../assets/images/image1.jpeg";
import photograph from "../assets/images/photograph.jpg";
import decoration from "../assets/images/decoration.png";
import animateur from "../assets/images/animateur.jpg";
import "../styles/proWork.css";

const ProWork = () => {
  return (
    <div style={{ paddingTop: 70 }}>
      <h1>ProWork </h1>
      <div className="pro-work-box-container">
        <div className="pro-work-box">
          <span className="un">
            <img src={image1} />
          </span>
          <span className="deux">
            <img src={photograph} />
          </span>
          <span className="trois">
            <img src={decoration} />
          </span>
          <span className="quatre">
            <img src={animateur} />
          </span>
          <span className="cinq">
            <img src={image1} />
          </span>
          <span className="six">
            <img src={photograph} />
          </span>
          <span className="sept">
            <img src={decoration} />
          </span>
          <span className="huit">
            <img src={animateur} />
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProWork;
