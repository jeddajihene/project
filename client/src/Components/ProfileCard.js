import React from "react";
import "../styles/profileCard.css";
import { useNavigate } from "react-router-dom";
const ProfileCard = ({ profile }) => {
  const navigate = useNavigate();

  return (
    <>
      <div className="profile-card">
        <div className="profile-card-img">
          <img src={profile.avatar} />
        </div>
        <div className="profile-content">
          <div className="profile-details">
            <h2>
              {profile.name}
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
              <button
                onClick={() => {
                  navigate(`/service/profile/${profile._id}`);
                }}
              >
                See profile
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileCard;
