import React from "react";
import Footer from "../components/home/Footer";
import Map from "../components/home/Map";
import Brend from "../components/home/Brend";
import Information from "../components/home/Information";
import Manifac from "../components/ManifacMain/Manifac";

const ManifacMain = () => {
  return (
    <div>
      <Manifac />
      <Brend />
      <Information />
      <Map />
    </div>
  );
};

export default ManifacMain;
