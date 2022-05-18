import React from "react";
import OurServices from "../Components/OurServices";
import OurObjects from "../Components/OurObjects";
import ContactUs from "../Components/ContactUs";
import HeaderHome from "../Components/HeaderHome";
import "../styles/home.css";

const Home = () => {
  return (
    <div style={{ marginBottom: 30 }}>
      <HeaderHome />
      <OurServices />
      <OurObjects />
      <ContactUs />
    </div>
  );
};

export default Home;
