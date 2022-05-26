import React from "react";
import balloons from "../assets/icons/balloons.png";
import cake from "../assets/icons/cake.png";
import confetti from "../assets/icons/confetti.png";
import party from "../assets/icons/party.png";

const OurObjects = () => {
  const objectsArr = [
    {
      img: balloons,
      title: "Unforgettable Time",
      desc: "We never let amazing moments fade from your memory. Our goal is to establish them forever"
    },
    {
      img: cake,
      title: "Unique Scenarios",
      desc: " Our goal is to make your day special in all its details..."
    },
    {
      img: confetti,
      title: "Perfect Venues",
      desc: "To those who have come to share their happy times with you... Comfort and hospitality is our mission"
    },
    {
      img: party,
      title: "Friendly Team",
      desc: "Our team is always working to make you happy and fulfill your desires..."
    }
  ];
  return (
    <div style={{ marginTop: 40 }}>
      {/* <h1 className="title-object">Our objectifs</h1> */}
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
