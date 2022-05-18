import React, { useEffect } from "react";
import OfferCard from "../Components/OfferCard";
import ProfileDtails from "../Components/ProfileDtails";
import "../styles/profile.css";
import { useSelector, useDispatch } from "react-redux";
import { getProfileAction } from "../redux/Actions/profileActions";
import { useParams } from "react-router-dom";
const Profile = () => {
  let { id } = useParams();
  const dispatch = useDispatch();
  const profileReducer = useSelector((state) => state.profileReducer);
  useEffect(() => {
    if (id) {
      dispatch(getProfileAction(id));
    }
  }, [id]);
  return (
    <div style={{ paddingTop: 70 }}>
      <ProfileDtails user={profileReducer.profile} />
      <div className="offers-wrapper">
        {profileReducer.profile.offers?.map((el) => (
          <OfferCard offer={el} id={id} />
        ))}
      </div>

      <div className="pro-work-box-container">
        <div className="pro-work-box">
          {profileReducer.profile.images?.map((el, i) => (
            <span className={`image${i + 1}`}>
              <img src={el.imageName} />
            </span>
          ))}
          {/* <span className="un">
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
          </span> */}
        </div>
      </div>
    </div>
  );
};

export default Profile;
