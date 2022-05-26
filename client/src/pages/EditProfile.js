import React, { useState, useRef, useEffect } from "react";
import "../styles/editProfile.css";
import {
  loadUserAction,
  upadatePassWordAction,
  upadateUserAction
} from "../redux/Actions/userActions";
import { getOfferAction } from "../redux/Actions/offerActions";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { upadateAvatarAction } from "../redux/Actions/avatarAction";
import { Alert } from "@mui/material";

import AddGallery from "../Components/AddGallery";
import AddOffer from "../Components/AddOffer";
import { getGalleryAction } from "../redux/Actions/galleryAction";
import { removeAction } from "../redux/Actions/removeAction";

const Profile = () => {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.userReducer);
  const galleryReducer = useSelector((state) => state.galleryReducer);
  const [showSuccessAlertAvatar, setShowSuccessAlertAvatar] = useState(false);
  const [showSuccessAlertUser, setShowSuccessAlertUser] = useState(false);
  const [showSuccessAlertPassword, setShowSuccessAlertPassword] =
    useState(false);
  const [upadateUser, setUpadateUser] = useState({
    name: "",
    phone: "",
    address: "",
    proNumber: "",
    facebook: "",
    instagram: ""
  });
  useEffect(() => {
    dispatch(getOfferAction());
    dispatch(getGalleryAction());
    return () => {
      dispatch(removeAction());
      dispatch(loadUserAction());
    };
  }, []);
  useEffect(() => {
    setUpadateUser({
      ...upadateUser,
      name: userData.user?.name,
      phone: userData.user?.phone,
      address: userData.user?.address,
      proNumber: userData.user?.proNumber,
      facebook: userData.user?.facebook,
      instagram: userData.user?.instagram
    });
  }, [userData.user]);

  const handleChangeUser = (e) => {
    setUpadateUser({
      ...upadateUser,
      [e.target.name]: e.target.value
    });
  };
  const handleSubmitUpdates = () => {
    dispatch(upadateUserAction(upadateUser));
  };
  const [upadatePassWord, setUpadatePassWord] = useState({
    actualpassword: "",
    confirmPassword: "",
    newPassword: ""
  });
  const handleChange = (e) => {
    setUpadatePassWord({
      ...upadatePassWord,
      [e.target.name]: e.target.value
    });
  };
  const handleUpadatePassword = () => {
    dispatch(upadatePassWordAction(upadatePassWord));
  };
  const [avatar, setAvatar] = useState(null);
  const [showAvatar, setShowAvatar] = useState(null);
  const editAvatar = useRef();
  const handlechangeAvatar = (e) => {
    setAvatar(e.target.files[0]);
    console.log(e.target.files);
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setShowAvatar(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const saveAvatar = (e) => {
    e.preventDefault();
    dispatch(upadateAvatarAction(avatar));
  };
  useEffect(() => {
    if (userData?.password_msg) {
      setShowSuccessAlertPassword(true);
      setUpadatePassWord({
        actualpassword: "",
        confirmPassword: "",
        newPassword: ""
      });
    }
  }, [userData.password_msg]);
  useEffect(() => {
    if (userData?.updated_avatar_msg) {
      setShowSuccessAlertAvatar(true);
    }
  }, [userData.updated_avatar_msg]);
  useEffect(() => {
    if (userData?.updated_user_msg) {
      setShowSuccessAlertUser(true);
    }
  }, [userData.updated_user_msg]);
  return (
    <>
      {userData.load && galleryReducer.load ? (
        <h1>...Loading</h1>
      ) : (
        <div class="container-xl px-4 mt-4" style={{ paddingTop: 60 }}>
          <div class="row">
            {/* Edit Avatar */}
            <div class="col-xl-4">
              <div class="card mb-4 mb-xl-0">
                <div class="card-header">Profile Picture</div>
                <div class="card-body text-center">
                  <img
                    class="img-account-profile rounded-circle mb-2"
                    src={showAvatar ? showAvatar : userData.user?.avatar}
                    alt=""
                  />
                  <div className="avatar-buttons-container">
                    <button
                      class="btn btn-primary edit-profile-button"
                      type="button"
                      onClick={() => editAvatar.current.click()}
                    >
                      Select
                    </button>
                    <label
                      class="small mb-1"
                      for="inputUserAvatar"
                      ref={editAvatar}
                    ></label>
                    <input
                      style={{ display: "none" }}
                      id="inputUserAvatar"
                      type="file"
                      // accept="image/*"
                      onChange={handlechangeAvatar}
                    />
                    <button
                      button
                      class="btn btn-primary edit-profile-button"
                      type="button"
                      onClick={saveAvatar}
                    >
                      Save
                    </button>
                  </div>
                </div>
                {showSuccessAlertAvatar && (
                  <>
                    <Alert
                      severity="success"
                      onClose={() => {
                        setShowSuccessAlertAvatar(false);
                      }}
                    >
                      {userData?.updated_avatar_msg}
                    </Alert>
                  </>
                )}
              </div>
            </div>
            <div class="col-xl-8">
              {/* Edit user data */}
              <div class="card mb-4">
                <div class="card-header">Account Details</div>
                <div class="card-body">
                  {/* <form> */}
                  <div class="mb-3">
                    <label class="small mb-1" for="inputUsername">
                      Update your name
                    </label>
                    <input
                      class="form-control"
                      id="inputUsername"
                      type="text"
                      placeholder="Enter your full name"
                      name="name"
                      value={upadateUser.name}
                      onChange={handleChangeUser}
                    />
                  </div>

                  <div class="row gx-3 mb-3">
                    <div class="col-md-6">
                      <label class="small mb-1" for="inputPhone">
                        Update your phone number
                      </label>
                      <input
                        class="form-control"
                        id="inputPhone"
                        type="text"
                        placeholder="Enter your phone number"
                        name="phone"
                        value={upadateUser.phone}
                        onChange={handleChangeUser}
                      />
                    </div>

                    <div class="col-md-6">
                      <label class="small mb-1" for="inputProNumber">
                        Add your Pro phone number
                      </label>
                      <input
                        class="form-control"
                        id="inputProNumber"
                        type="text"
                        placeholder="Enter your pro phone number"
                        name="proNumber"
                        value={upadateUser.proNumber}
                        onChange={handleChangeUser}
                      />
                    </div>
                  </div>
                  <div class="mb-3">
                    <label class="small mb-1" for="inputAddress">
                      Add your address
                    </label>
                    <input
                      class="form-control"
                      id="inputAddress"
                      type="text"
                      placeholder="Enter your address"
                      name="address"
                      value={upadateUser.address}
                      onChange={handleChangeUser}
                    />
                  </div>
                  <div class="row gx-3 mb-3">
                    <div class="col-md-6">
                      <label class="small mb-1" for="inputFaceBook">
                        Add your Facebook account
                      </label>
                      <input
                        class="form-control"
                        id="inputFaceBook"
                        type="text"
                        placeholder="Enter your Facebook account"
                        name="facebook"
                        value={upadateUser.facebook}
                        onChange={handleChangeUser}
                      />
                    </div>

                    <div class="col-md-6">
                      <label class="small mb-1" for="inputInstagram">
                        Add your Instagram account
                      </label>
                      <input
                        class="form-control"
                        id="inputInstagram"
                        type="text"
                        placeholder="Enter your Instagram account"
                        name="instagram"
                        value={upadateUser.instagram}
                        onChange={handleChangeUser}
                      />
                    </div>
                  </div>
                  <div className="card-Footer">
                    <button
                      class="btn btn-primary edit-profile-button"
                      type="button"
                      onClick={handleSubmitUpdates}
                    >
                      Save changes
                    </button>
                    {showSuccessAlertUser && (
                      <>
                        <Alert
                          severity="success"
                          onClose={() => {
                            setShowSuccessAlertUser(false);
                          }}
                        >
                          {userData?.updated_user_msg}
                        </Alert>
                      </>
                    )}
                  </div>
                </div>
              </div>
              {/* Edit Password */}
              <div class="card mb-4">
                <div class="card-header">Update Password</div>
                <div class="card-body">
                  <div class="mb-3">
                    <label class="small mb-1" for="inputActualPassword">
                      Actual Password
                    </label>
                    <input
                      class="form-control"
                      id="inputActualPassword"
                      type="password"
                      placeholder="Enter your actual password"
                      name="actualpassword"
                      value={upadatePassWord.actualpassword}
                      onChange={handleChange}
                    />
                  </div>
                  {userData.errors.filter((el) => el.msg === "Wrong password")
                    .length !== 0 && (
                    <p className="red-msg-error-register">*Wrong password</p>
                  )}
                  <div class="mb-3">
                    <label class="small mb-1" for="inputNewPassword">
                      New Password
                    </label>
                    <input
                      class="form-control"
                      id="inputNewPassword"
                      type="password"
                      placeholder="Enter your new password"
                      name="newPassword"
                      value={upadatePassWord.newPassword}
                      onChange={handleChange}
                    />
                  </div>
                  {userData.errors.filter((el) => el.msg === "Password error")
                    .length !== 0 && (
                    <p className="red-msg-error-register">
                      *must contain at least 6 characters
                    </p>
                  )}
                  <div class="mb-3">
                    <label class="small mb-1" for="inputConfirmPassword">
                      Confirm New Password
                    </label>
                    <input
                      class="form-control"
                      id="inputConfirmPassword"
                      type="password"
                      placeholder="Enter your new password again"
                      name="confirmPassword"
                      value={upadatePassWord.confirmPassword}
                      onChange={handleChange}
                    />
                  </div>
                  {userData.errors.filter(
                    (el) => el.msg === "Passwords don't match"
                  ).length !== 0 && (
                    <p className="red-msg-error-register">
                      *passwords don't match
                    </p>
                  )}
                  <div className="card-Footer">
                    <button
                      class="btn btn-primary edit-profile-button"
                      type="button"
                      onClick={handleUpadatePassword}
                    >
                      Save changes
                    </button>
                    {showSuccessAlertPassword && (
                      <>
                        <Alert
                          severity="success"
                          onClose={() => {
                            setShowSuccessAlertPassword(false);
                          }}
                        >
                          {userData?.password_msg}
                        </Alert>
                      </>
                    )}
                  </div>

                  {/* </form> */}
                </div>
              </div>
              {userData.user?.category === "professional" ? (
                <>
                  {/* Add Gallery */}
                  <AddGallery />
                  {/* Add Offer */}
                  <AddOffer />
                </>
              ) : null}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Profile;
