import React, { useState, useRef, useEffect } from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Alert,
  IconButton,
  Typography
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { addOfferAction } from "../redux/Actions/offerActions";

const AddOffer = () => {
  const dispatch = useDispatch();
  const offerReducer = useSelector((state) => state.offerReducer);
  const [addOffer, setAddOffer] = useState({
    offerTitle: "",
    offerDetails: "",
    offerPrice: 0
  });
  const [offerImage, setofferImage] = useState(null);
  const [showOfferImage, setShowOfferImage] = useState(null);
  const addOfferImage = useRef();
  const handleChangeOffer = (e) => {
    setAddOffer({
      ...addOffer,
      [e.target.name]: e.target.value
    });
  };
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
  const handleAddOffer = (e) => {
    e.preventDefault();
    dispatch(addOfferAction(addOffer, offerImage));
  };

  const [showSuccessAlertOffer, setShowSuccessAlertOffer] = useState(false);
  useEffect(() => {
    if (offerReducer?.success_offer_msg) {
      setShowSuccessAlertOffer(true);
      setShowOfferImage(null);
      setAddOffer({
        offerTitle: "",
        offerDetails: "",
        offerPrice: 0
      });
    }
  }, [offerReducer.success_offer_msg]);
  return (
    <div class="card mb-4">
      <div class="card-header">Add offers</div>
      <div class="card-body">
        {showOfferImage ? (
          <div className="show-image-container">
            <img alt="" src={showOfferImage} />
            <IconButton
              onClick={() => addOfferImage.current.click()}
              className="add-image-icon"
            >
              <AddAPhotoIcon style={{ color: "#fff" }} />
            </IconButton>
            <label htmlFor="importOfferImage" ref={addOfferImage}></label>
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
                <AddAPhotoIcon style={{ color: "#4C959E", fontSize: 40 }} />
              </IconButton>
              <label htmlFor="importOfferImage" ref={addOfferImage}></label>
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
        <div className="card-Footer">
          <button
            class="btn btn-primary edit-profile-button"
            type="button"
            onClick={handleAddOffer}
          >
            Add Offer
          </button>
          {showSuccessAlertOffer && (
            <>
              <Alert
                severity="success"
                onClose={() => {
                  setShowSuccessAlertOffer(false);
                }}
              >
                {offerReducer?.success_offer_msg}
              </Alert>
            </>
          )}
        </div>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Accordion 1</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
};
export default AddOffer;
