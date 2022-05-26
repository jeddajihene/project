import React, { useState, useRef, useEffect } from "react";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { Alert, IconButton } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  addGalleryAction,
  deleteGalleryAction
} from "../redux/Actions/galleryAction";

const AddGallery = () => {
  const galleryReducer = useSelector((state) => state.galleryReducer);
  const dispatch = useDispatch();
  const addGalleryImage = useRef();
  const [galleryImage, setGalleryImage] = useState(new FormData());
  const [showGalleryImage, setShowGallery] = useState(galleryReducer.images);
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  useEffect(() => {
    setShowGallery(galleryReducer.images);
  }, [galleryReducer.images]);
  useEffect(() => {
    setShowSuccessAlert(false);
  }, []);
  const handleAddGallery = (e) => {
    if (
      e.target.files &&
      e.target.files.length < 13 - showGalleryImage.length
    ) {
      console.log("files", e.target.files);
      let formData = new FormData();
      for (let i = 0; i < e.target.files.length; i++) {
        formData.append("gallery", e.target.files[i]);
      }
      setGalleryImage(formData);
      const fileArray = Array.from(e.target.files).map((file) =>
        URL.createObjectURL(file)
      );
      // setShowGallery((prevImages) => prevImages.concat(fileArray));
      setShowGallery((prevImages) =>
        prevImages.concat(
          fileArray.map((el) => {
            return { imageName: el };
          })
        )
      );
    }
  };
  const deleteImage = (index) => {
    if (showGalleryImage[index]._id) {
      dispatch(deleteGalleryAction(showGalleryImage[index]._id));
      const arrImages = showGalleryImage.filter(
        (el) => showGalleryImage.indexOf(el) !== index
      );
      setShowGallery(arrImages);
    } else {
      const arrImages = showGalleryImage.filter(
        (el) => showGalleryImage.indexOf(el) !== index
      );
      setShowGallery(arrImages);
    }
  };
  const saveAddGallery = () => {
    dispatch(addGalleryAction(galleryImage));
  };
  useEffect(() => {
    if (galleryReducer?.add_gallery_msg) {
      setShowSuccessAlert(true);
    }
  }, [galleryReducer.add_gallery_msg]);
  return (
    <div class="card mb-4">
      <div class="card-header">Add gallery image</div>
      <div class="card-body">
        <div className="gallery-container">
          {showGalleryImage &&
            showGalleryImage.map((el, index) => (
              <div
                key={index}
                className="show-image-container"
                style={{ margin: "20px 0px" }}
              >
                <img alt="" src={el.imageName} />
                <IconButton
                  className="delete-image-icon"
                  onClick={() => deleteImage(index)}
                >
                  <HighlightOffIcon style={{ color: "#f6416c" }} />
                </IconButton>
              </div>
            ))}
          <div className="add-image-container" style={{ margin: "20px 0px" }}>
            <div className="inner-add-image-container">
              <IconButton onClick={() => addGalleryImage.current.click()}>
                <AddAPhotoIcon style={{ color: "#4C959E", fontSize: 40 }} />
              </IconButton>
              <label htmlFor="importGalleryImage" ref={addGalleryImage}></label>
              <input
                type="file"
                id="importGalleryImage"
                accept="image/*"
                multiple
                onChange={handleAddGallery}
              />
            </div>
            <p>Add image</p>
          </div>
        </div>
        <div className="card-Footer">
          {showGalleryImage && (
            <button
              class="btn btn-primary edit-profile-button"
              type="button"
              onClick={saveAddGallery}
            >
              Save Images
            </button>
          )}
          {showSuccessAlert && (
            <>
              <Alert
                severity="success"
                onClose={() => {
                  setShowSuccessAlert(false);
                }}
              >
                {galleryReducer?.add_gallery_msg}
              </Alert>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default AddGallery;
