import React from "react";
import "../styles/profileCard.css";
import profile from "../assets/images/profileimg.png";
const ProfileCard = () => {
  return (
    <>
      <div className="profile-card">
        <div className="profile-card-img">
          <img src={profile} />
        </div>
        <div className="profile-content">
          <div className="profile-details">
            <h2>
              {" "}
              meriem
              <br></br>
              <span>souissi one</span>
            </h2>
            <div className="data">
              <h3>
                342
                <br></br>
                <span>offers</span>
              </h3>
              <h3>
                342
                <br></br>
                <span>price</span>
              </h3>
              <h3>
                342
                <br></br>
                <span>date</span>
              </h3>
            </div>
            <div className="actionBtn">
              <button>See profile</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileCard;
