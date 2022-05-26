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
            <h2>{profile.name}</h2>

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
