import React from "react";
import "../styles/profileDetails.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import { IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";

const ProfileDtails = ({ user }) => {
  const navigate = useNavigate();
  return (
    <>
      <div class="container db-social">
        <div class="jumbotron jumbotron-fluid"></div>
        <div class="container-fluid">
          <div class="row justify-content-center">
            <div class="col-xl-11">
              <div class="widget head-profile has-shadow">
                <div class="widget-body pb-0">
                  <div class="row d-flex align-items-center">
                    <div class="col-xl-4 col-md-4 d-flex justify-content-lg-start justify-content-md-start justify-content-center">
                      <ul style={{ display: "flex", alignItems: "center" }}>
                        <li>
                          <div class="counter">
                            {/* target="_blank" t7el il fb fi onglet wa7dou */}
                            <a href={user?.facebook} target="_blank">
                              <IconButton>
                                <FacebookIcon fontSize="large" />
                              </IconButton>
                            </a>
                          </div>
                        </li>
                        <li>
                          <div class="counter">
                            <a href={user?.instagram} target="_blank">
                              <IconButton>
                                <InstagramIcon fontSize="large" />
                              </IconButton>
                            </a>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div class="col-xl-4 col-md-4 d-flex justify-content-center">
                      <div class="image-default">
                        <img
                          // class="rounded-circle"
                          src={user?.avatar}
                          alt="..."
                        />
                      </div>
                      <div class="infos">
                        <h2>{user?.name}</h2>
                        <div class="location">{user?.speciality}</div>
                      </div>
                    </div>
                    <div class="col-xl-4 col-md-4 d-flex profile-infos">
                      <div class="follow">
                        <div className="profile-infos-adress">
                          <IconButton>
                            <LocationOnIcon fontSize="large" />
                          </IconButton>
                          <p>{user?.address}</p>
                        </div>
                        <div className="profile-infos-phone">
                          <IconButton>
                            <LocalPhoneIcon fontSize="large" />
                          </IconButton>
                          <p>
                            {user?.proNumber ? user.proNumber : user?.phone}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileDtails;
