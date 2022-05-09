import React from "react";
import image1 from "../assets/images/image1.jpeg";
import photograph from "../assets/images/photograph.jpg";
import decoration from "../assets/images/decoration.png";
import animateur from "../assets/images/animateur.jpg";

const OurServices = () => {
  const sevicesArr = [
    { img: image1, title: "Pastry shop" },
    { img: photograph, title: "Photography" },
    { img: decoration, title: "Decoration" },
    { img: animateur, title: "Animation" },
  ];
  return (
    <div>
      <h1 className="title-service">Our services</h1>
      <div className="service-cards-container">
        {sevicesArr.map((el) => (
          <div className="service-card">
            <div className="service-card-image">
              <img alt="" src={el.img} />
            </div>
            <h1 className="service-card-title">{el.title}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurServices;
