import React from "react";
import balloons from "../assets/icons/balloons.png";
import cake from "../assets/icons/cake.png";
import confetti from "../assets/icons/confetti.png";
import party from "../assets/icons/party.png";

const OurObjects = () => {
  const objectsArr = [
    {
      img: balloons,
      title: "Pastry shop",
      desc: "lorem ipsum dolor sit amet, consectetur adipiscing elit",
    },
    {
      img: cake,
      title: "Photography",
      desc: "lorem ipsum dolor sit amet, consectetur adipiscing elit",
    },
    {
      img: confetti,
      title: "Decoration",
      desc: "lorem ipsum dolor sit amet, consectetur adipiscing elit",
    },
    {
      img: party,
      title: "Animation",
      desc: "lorem ipsum dolor sit amet, consectetur adipiscing elit",
    },
  ];
  return (
    <div>
      <h1 className="title-object">Our objects</h1>
      <div className="object-cards-container">
        {objectsArr.map((el) => (
          <div className="object-card">
            <div className="object-card-image">
              <img alt="" src={el.img} />
            </div>
            <h1 className="object-card-title">{el.title}</h1>
            <p>{el.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurObjects;
