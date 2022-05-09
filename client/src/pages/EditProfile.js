import React, { useState, useRef } from "react";
import "../styles/editProfile.css";
import {
  upadatePassWordAction,
  upadateUserAction,
} from "../redux/Actions/userActions";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { upadateAvatarAction } from "../redux/Actions/avatarAction";
import { IconButton } from "@mui/material";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import { addOfferAction } from "../redux/Actions/offerActions";

const Profile = () => {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.userReducer);
  const [upadateUser, setUpadateUser] = useState({
    name: "",
    phone: "",
    address: "",
    proNumber: "",
    facebook: "",
    instagram: "",
  });

  const handleChangeUser = (e) => {
    setUpadateUser({
      ...upadateUser,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmitUpdates = () => {
    dispatch(upadateUserAction(upadateUser));
  };
  const [upadatePassWord, setUpadatePassWord] = useState({
    actualpassword: "",
    confirmPassword: "",
    newPassword: "",
  });
  const handleChange = (e) => {
    setUpadatePassWord({
      ...upadatePassWord,
      [e.target.name]: e.target.value,
    });
  };
  const handleUpadatePassword = () => {
    dispatch(upadatePassWordAction(upadatePassWord));
  };
  const [avatar, setAvatar] = useState(null);
  const [showAvatar, setShowAvatar] = useState(null);
  const editAvatar = useRef();
  const handlechangeAvatar = (e) => {
    console.log(e.target.files[0]);
    setAvatar(e.target.files[0]);
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setShowAvatar(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
  const formData = new FormData();
  formData.append("avatar", avatar);
  const saveAvatar = () => {
    dispatch(upadateAvatarAction(formData));
  };

  const [addOffer, setAddOffer] = useState({
    offerTitle: "",
    offerDetails: "",
    offerPrice: 0,
  });
  const handleChangeOffer = (e) => {
    setAddOffer({
      ...addOffer,
      [e.target.name]: e.target.value,
    });
  };
  const [offerImage, setofferImage] = useState(null);
  const [showOfferImage, setShowOfferImage] = useState(null);
  const addOfferImage = useRef();
  const handleAddOfferImage = (e) => {
    setofferImage(e.target.files[0]);
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setShowOfferImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
  const handleAddOffer = () => {
    dispatch(addOfferAction(addOffer, offerImage));
  };
  return (
    <div class="container-xl px-4 mt-4" style={{ paddingTop: 60 }}>
      <div class="row">
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
                  accept="image/*"
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
          </div>
        </div>
        <div class="col-xl-8">
          <div class="card mb-4">
            <div class="card-header">Account Details</div>
            <div class="card-body">
              <form>
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

                <button
                  class="btn btn-primary edit-profile-button"
                  type="button"
                  onClick={handleSubmitUpdates}
                >
                  Save changes
                </button>
              </form>
            </div>
          </div>
          <div class="card mb-4">
            <div class="card-header">Update Password</div>
            <div class="card-body">
              <form>
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
                <button
                  class="btn btn-primary edit-profile-button"
                  type="button"
                  onClick={handleUpadatePassword}
                >
                  Save changes
                </button>
              </form>
            </div>
          </div>
          <div class="card mb-4">
            <div class="card-header">Add gallery image</div>
            <div class="card-body">
              <h1>hello world</h1>
            </div>
          </div>
          <div class="card mb-4">
            <div class="card-header">Add offers</div>
            <div class="card-body">
              <form>
                {showOfferImage ? (
                  <div className="show-image-container">
                    <img alt="" src={showOfferImage} />
                    <IconButton
                      onClick={() => addOfferImage.current.click()}
                      className="add-image-icon"
                    >
                      <AddAPhotoIcon style={{ color: "#fff" }} />
                    </IconButton>
                    <label
                      htmlFor="importOfferImage"
                      ref={addOfferImage}
                    ></label>
                    <input
                      type="file"
                      id="importOfferImage"
                      accept="image/*"
                      onChange={handleAddOfferImage}
                    />
                  </div>
                ) : (
                  <div className="add-image-container">
                    <div className="inner-add-image-container">
                      <IconButton onClick={() => addOfferImage.current.click()}>
                        <AddAPhotoIcon
                          style={{ color: "#4C959E", fontSize: 40 }}
                        />
                      </IconButton>
                      <label
                        htmlFor="importOfferImage"
                        ref={addOfferImage}
                      ></label>
                      <input
                        type="file"
                        id="importOfferImage"
                        accept="image/*"
                        onChange={handleAddOfferImage}
                      />
                    </div>
                    <p>Add offer image</p>
                  </div>
                )}

                <div class="row gx-3 mb-3">
                  <div class="col-md-6">
                    <label class="small mb-1" for="offerTitle">
                      Offer Title
                    </label>
                    <input
                      class="form-control"
                      id="offerTitle"
                      type="text"
                      placeholder="Enter offer title"
                      name="offerTitle"
                      value={addOffer.offerTitle}
                      onChange={handleChangeOffer}
                    />
                  </div>

                  <div class="col-md-6">
                    <label class="small mb-1" for="offerPrice">
                      Offer price
                    </label>
                    <input
                      class="form-control"
                      id="offerPrice"
                      type="text"
                      placeholder="Enter offer price"
                      name="offerPrice"
                      value={addOffer.offerPrice}
                      onChange={handleChangeOffer}
                    />
                  </div>
                </div>
                <div class="mb-3">
                  <label class="small mb-1" for="offerDetails">
                    Offer details
                  </label>
                  <textarea
                    cols="40"
                    rows="5"
                    class="form-control"
                    id="offerDetails"
                    type="text"
                    placeholder="Describe the offer"
                    name="offerDetails"
                    value={addOffer.offerDetails}
                    onChange={handleChangeOffer}
                  />
                </div>

                <button
                  class="btn btn-primary edit-profile-button"
                  type="button"
                  onClick={handleAddOffer}
                >
                  Add Offer
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
