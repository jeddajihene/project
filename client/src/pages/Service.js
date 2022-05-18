import React from "react";
import "../styles/service.css";
import image1 from "../assets/images/image1.jpeg";
import photograph from "../assets/images/photograph.jpg";
import decoration from "../assets/images/decoration.png";
import animateur from "../assets/images/animateur.jpg";
import { useNavigate } from "react-router-dom";

const Service = () => {
  const navigate = useNavigate();
  const sevicesArr1 = [
    { img: image1, title: "Pastry shop", linkTo: "pastrys" },
    { img: photograph, title: "Photography", linkTo: "photographers" }
  ];
  //link to('decorators') is get it from app.js
  const sevicesArr2 = [
    { img: decoration, title: "Decoration", linkTo: "decorators" },
    { img: animateur, title: "Animation", linkTo: "animators" }
  ];
  const handleProfils = (el) => {
    //link to tkamil il url de page elli n7ebou nimchiw leha w navigate hiya elli bech thezna
    navigate(`/service/${el.linkTo}`);
  };
  return (
    <div style={{ paddingTop: 90 }}>
      <div className="card-service-container">
        {sevicesArr1.map((el) => (
          <div className="card-service">
            <div className="imgBox">
              <img alt="" src={el.img} />
              <img src={el.img} />
            </div>

            <div className="details">
              <div className="content">
                <h1>{el.title}</h1>
                <h2 onClick={() => handleProfils(el)}>Meet our team</h2>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="card-service-container">
        {sevicesArr2.map((el) => (
          <div className="card-service">
            <div className="imgBox">
              <img alt="" src={el.img} />
              <img src={el.img} />
            </div>

            <div className="details">
              <div className="content">
                <h1>{el.title}</h1>
                <h2 onClick={() => handleProfils(el)}>Meet our team</h2>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Service;
