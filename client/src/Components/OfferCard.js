import React from "react";
import "../styles/offerCard.css";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { IconButton } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { deleteOfferAction } from "../redux/Actions/offerActions";

const OfferCard = ({ offer, id }) => {
  const userReducer = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();
  return (
    <>
      <div class="wrapper">
        <div class="product-img">
          <img src={offer?.offerImage} height="420" width="327" />
        </div>
        <div class="product-info">
          <div class="product-text">
            <h1>{offer?.offerTitle}</h1>
            <p>{offer?.offerDetails}</p>
          </div>
          <div class="product-price-btn">
            <p>
              <span className="price">{offer?.offerPrice}</span>DT
            </p>
            <button type="button">buy now</button>
          </div>
        </div>
        {userReducer.user._id === id && (
          <div className="delete-offer-icon">
            <IconButton onClick={() => dispatch(deleteOfferAction(offer?._id))}>
              <HighlightOffIcon style={{ color: "#f6416c" }} />
            </IconButton>
          </div>
        )}
      </div>
    </>
  );
};

export default OfferCard;
