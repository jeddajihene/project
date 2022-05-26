import React from "react";
import "../styles/offerCard.css";

const OfferCard = ({ offer }) => {
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
              <span className="price">{offer?.offerPrice}</span>
              <span className="price">&nbsp;DT</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default OfferCard;
