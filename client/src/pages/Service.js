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
    { img: image1, title: "Pastry shop" },
    { img: photograph, title: "Photography" },
  ];
  const sevicesArr2 = [
    { img: decoration, title: "Decoration" },
    { img: animateur, title: "Animation" },
  ];
  const handleProfils = () => {
    navigate("/service/profils");
  };
  return (
    <div style={{ paddingTop: 70 }}>
      <h1 className="title-page-service">Our Services </h1>
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
                <h2 onClick={handleProfils}>Meet our team</h2>
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
                {/* <h1>Photography</h1> */}
                <h2 onClick={handleProfils}>Meet our team</h2>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Service;
